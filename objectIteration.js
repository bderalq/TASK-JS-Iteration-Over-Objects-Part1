// DO NOT MODIFY OR DELETE `movies`
const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];

function hasKey(obj, key) {
  return key in obj;
}

function printMovieTitles(movies) {
  movies.forEach( m => console.log(m.title));
}
function countMoviesByYear(movies, year) {
return movies.filter(m => m.year == year).length;
}

function updateMovieGenre(movies, title, newGenre) {
  let movie = movies.find(movie => movie.title == title);
  if(movie) {movie.genre = newGenre};
  return movies;
}

module.exports = {
  hasKey,
  printMovieTitles,
  countMoviesByYear,
  updateMovieGenre,
};
