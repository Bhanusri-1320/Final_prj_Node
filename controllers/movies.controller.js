import { v4 } from "uuid";
import {
  getAllMovies,
  getMoviesById,
  UpdateMovieById,
  deleteMovieById,
  createMovie,
} from "../services/movies.services.js";
import { Movies } from "../entities/movies.entity.js";

async function getAllMoviesCtr(request, response) {
  // response.send(movies);
  const { search } = request.query;
  if (!search) {
    try {
      const allMovies = await getAllMovies();
      response.status(200).send(allMovies.data);
      return;
    } catch (err) {
      console.log(err);
      response.status(500).send({ msg: " Couldn't get what you wanted " });
    }
  }
  const filterData = await Movies.scan
    .where(
      ({ title, synopsis, language }, { contains }) => `
      ${contains(title, search)} OR ${contains(language, search)} OR ${contains(
        synopsis,
        search
      )}
      `
    )
    .go();

  console.log(filterData);

  response.send(filterData.data);
}
async function getMoviebyIdCtr(request, response) {
  const { id } = request.params;
  // console.log(movie.data);
  try {
    const movie = await getMoviesById(id);
    console.log(movie);
    movie.data
      ? response.send(movie.data)
      : response.status(404).send({ msg: "Movie not found" });
  } catch (err) {
    response.status(500).send({ msg: "failed to retrieve" });
  }
}
async function deleteMovieCtr(request, response) {
  const { id } = request.params;
  console.log(id);
  try {
    const movie = await getMoviesById(id);
    if (movie.data) {
      // const mid = movies.indexOf(movie);
      // movies.splice(mid, 1);
      await deleteMovieById(id);
      response.send({ msg: "Movie deleted 🎉" });
    } else {
      response.status(404).send({ msg: "there is No such Movie 🥲" });
    }
  } catch (err) {
    response.status(500).send({ msg: "Failed to Perform delete" });
  }
}

async function createMovieCtr(req, res) {
  const data = req.body;
  const addMovie = {
    ...data,
    movieId: v4(),
  };
  try {
    await createMovie(addMovie);
    res.status(201).send(addMovie);
  } catch (err) {
    console.log(err);
    res.send({ msg: "unable to create" });
  }
}

async function updateMovieCtr(request, response) {
  const { id } = request.params;
  console.log("id", id);
  const updateMovie = request.body;
  console.log(updateMovie);
  try {
    const movie = await getMoviesById(id);
    if (movie.data) {
      const mergedData = await UpdateMovieById(movie, updateMovie);
      console.log("updated..");
      response.send(mergedData.data);
    } else {
      response.status(404).send("No such Movie 🥲");
    }
  } catch (err) {
    console.log(err);
    response.status(500).send({ msg: "Movie not found" });
  }
}

export {
  getAllMoviesCtr,
  getMoviebyIdCtr,
  createMovieCtr,
  updateMovieCtr,
  deleteMovieCtr,
};
