import { Movies } from "../entities/movies.entity.js";
async function getAllMovies() {
  return await Movies.scan.go();
}
async function getMoviesById(id) {
  return await Movies.get({ movieId: id }).go();
}
async function createMovie(addMovie) {
  await Movies.create(addMovie).go();
}
async function UpdateMovieById(movie, updateMovie) {
  return await Movies.put({
    ...movie.data,
    ...updateMovie,
  }).go();
}

async function deleteMovieById(id) {
  await Movies.delete({ movieId: id }).go();
}

export {
  getAllMovies,
  getMoviesById,
  UpdateMovieById,
  deleteMovieById,
  createMovie,
};
