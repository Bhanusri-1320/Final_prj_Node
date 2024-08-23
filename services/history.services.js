import { History } from "../entities/history.entity.js";
async function getAllMovies() {
  return await History.scan.go();
}
async function getMoviesById(id) {
  return await History.get({ movieId: id }).go();
}
// async function createMovie(addMovie) {
//   await History.create(addMovie).go();
// }
// async function UpdateMovieById(movie, updateMovie) {
//   return await History.put({
//     ...movie.data,
//     ...updateMovie,
//   }).go();
// }
// async function deleteMovieById(id) {
//   await History.delete({ movieId: id }).go();
// }
async function getUserByname(username) {
  return await History.get({ userName: username }).go();
}
async function createHistory(movie) {
  await History.create(movie).go();
}

export {
  getAllMovies,
  getMoviesById,
  getUserByname,
  createHistory,
  // UpdateMovieById,
  // deleteMovieById,
  // createMovie,
};
