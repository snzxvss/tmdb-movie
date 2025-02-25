import React from "react";
import { motion } from "framer-motion";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      className="search w-full max-w-3xl mt-4 mx-auto absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50" /* Cambios aquí */
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative flex items-center w-full bg-light-100/5 px-4 py-3 rounded-2xl transition-all duration-300 ease-in-out hover:bg-light-100/10"
      >
        <motion.img
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          src="search.svg"
          alt="search"
          className="h-5 w-5 absolute left-3"
        />
        <input
          type="text"
          placeholder="Descubre nuestro catálogo."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 py-2 ml-6 mr-6 text-base text-gray-200 rounded-2xl placeholder-light-200 bg-transparent outline-none transition-all duration-300 ease-in-out focus:bg-light-100/10 focus:placeholder-transparent"
        />
      </motion.div>
    </motion.div>
  );
};

export default Search;
