# TMDB Movie Project

## Descripción
Este proyecto es una aplicación web desarrollada con React y Vite que permite explorar películas y series utilizando la API de TMDB. Incluye funcionalidades como búsqueda, filtrado por categorías, paginación y visualización de detalles de películas.

## Estructura del Proyecto
La estructura del proyecto está organizada de la siguiente manera:

```
public/
  hero.png
  logo.png
  no-movie.png
  search.svg
  star.svg
src/
  App.css
  App.jsx
  appwrite.js
  index.css
  main.jsx
  components/
    MovieCard.jsx
    Search.jsx
    Spinner.jsx
    Spotlight.jsx
    SpotlightNewDemo.jsx
  lib/
    utils.ts
.eslint.config.js
index.html
package.json
vite.config.js
```

- **public/**: Contiene los recursos estáticos como imágenes y SVGs.
- **src/**: Contiene el código fuente de la aplicación.
  - **components/**: Componentes reutilizables como `MovieCard`, `Search`, `Spinner`, etc.
  - **lib/**: Funciones utilitarias como `utils.ts`.
  - **App.jsx**: Componente principal de la aplicación.
  - **main.jsx**: Punto de entrada de la aplicación.
- **index.html**: Archivo HTML principal.
- **vite.config.js**: Configuración de Vite.
- **eslint.config.js**: Configuración de ESLint.

## Ejecución
Para ejecutar el proyecto, sigue los siguientes pasos:

1. Clona el repositorio:
   ```bash
   git clone <URL-del-repositorio>
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre la aplicación en tu navegador en `http://localhost:3000`.

## Lógica del Proyecto
La lógica principal del proyecto incluye:

- **Consumo de la API de TMDB**: Utiliza la clave de API almacenada en variables de entorno para realizar solicitudes a la API de TMDB.
- **Búsqueda y Filtrado**: Permite buscar películas y series por título y filtrar por categorías como "top rated".
- **Paginación**: Implementa paginación para navegar entre los resultados.
- **Componentes Reutilizables**: Utiliza componentes como `MovieCard` para mostrar información de las películas y `Search` para realizar búsquedas.
- **Estilos**: Utiliza Tailwind CSS para los estilos y animaciones con Framer Motion.

## Desarrollador
Desarrollado por Camilo Sanz.
