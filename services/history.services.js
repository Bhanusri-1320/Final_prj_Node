import { use } from "orm";
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
  console.log(username);
  return await History.scan
    .where(({ userName }, { eq }) => `${eq(userName, username)}`)
    .go();

  // .where(
  //   ({ category }, { eq }) => `
  //       ${eq(category, "food/coffee")} OR ${eq(category, "spite store")}
  //   `,
  // )

  // await StoreLocations.query
  // .stores({
  //   cityId: "Atlanta1",
  //   mallId: "EastPointe",
  // })
  // .go();
}
async function createHistory(movie) {
  console.log(movie);
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
