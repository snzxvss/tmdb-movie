import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import { SpotlightNewDemo } from "./components/SpotlightNewDemo";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("top_rated");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterRating, setFilterRating] = useState(null);

  const fetchMovies = async (query = "", page = currentPage, category = selectedCategory) => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      let endpoint = "";
      if (query) {
        endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          query
        )}&page=${page}`;
      } else {
        endpoint = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}&api_key=${API_KEY}`;
      }

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch movies.");
      }

      const data = await response.json();

      if (data.success === false) {
        throw new Error(data.status_message || "Failed to fetch movies.");
      }
      setMovieList(data.results || []);
      setTotalPages(data.total_pages || 1);
    } catch (error) {
      console.log(`Error fetching movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later.");
      setMovieList([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Ejecuta la búsqueda cuando cambian searchTerm, la categoría o la página
  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm, selectedCategory, currentPage]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <main>
      <div className="pattern" />
      <div>

        <header className="relative">
          <SpotlightNewDemo />
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          />
        </header>

    <nav className="navbar-categories p-4 text-white">
      <ul className="flex gap-4 justify-center">
        <li
          className={`cursor-pointer hover:text-[var(--color-light-100)] ${
            selectedCategory === "top_rated" ? "font-bold" : ""
          }`}
          onClick={() => handleCategoryChange("top_rated")}
        >
          Más Valoradas
        </li>
        <li
          className={`cursor-pointer hover:text-[var(--color-light-100)] ${
            selectedCategory === "popular" ? "font-bold" : ""
          }`}
          onClick={() => handleCategoryChange("popular")}
        >
          Populares
        </li>
        <li
          className={`cursor-pointer hover:text-[var(--color-light-100)] ${
            selectedCategory === "upcoming" ? "font-bold" : ""
          }`}
          onClick={() => handleCategoryChange("upcoming")}
        >
          Próximamente
        </li>
        <li
          className={`cursor-pointer hover:text-[var(--color-light-100)] ${
            selectedCategory === "now_playing" ? "font-bold" : ""
          }`}
          onClick={() => handleCategoryChange("now_playing")}
        >
          En Cartelera
        </li>
      </ul>
    </nav>

      <section className="all-movies p-4">
        <h2 className="mt-[40px] text-white">Todas las peliculas</h2>
        {isLoading ? (
          <Spinner />
        ) : errorMessage ? (
          <p className="text-red-500">{errorMessage}</p>
        ) : (
          <>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
            {/* Paginado con estilo de página */}
            <div className="pagination flex justify-center items-center gap-4 mt-6">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-4 py-2 bg-[var(--color-light-100)] text-dark-100 rounded disabled:opacity-50 hover:bg-[var(--color-light-200)]"
              >
                Previous
              </button>
              <span className="text-white">
                Page {currentPage} of {totalPages}
              </span>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="px-4 py-2 bg-[var(--color-light-100)] text-dark-100 rounded disabled:opacity-50 hover:bg-[var(--color-light-200)]"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;