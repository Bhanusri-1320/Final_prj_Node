import { v4 } from "uuid";
import {
  getAllTickets,
  getTicketsById,
  updateTicketById,
  deleteTicketById,
  createTicket,
} from "../services/tickets.services.js";
import { Tickets } from "../entities/tickets.entity.js";

async function getAllTicketsDataCtr(request, response) {
  // response.send(movies);
  try {
    const allMovies = await getAllTickets();
    response.status(200).send(allMovies.data);
    return;
  } catch (err) {
    console.log(err);
    response.status(500).send({ msg: " Couldn't get what you wanted " });
  }
}

async function getTicketsDataByIdCtr(request, response) {
  const { id } = request.params;
  // console.log(movie.data);
  try {
    const movie = await getTicketsById(id);
    console.log(movie);
    movie.data
      ? response.send(movie.data)
      : response.status(404).send({ msg: "Movie not found" });
  } catch (err) {
    response.status(500).send({ msg: "failed to retrieve" });
  }
}
async function deleteTicketsDataCtr(request, response) {
  const { id } = request.params;
  console.log(id);
  try {
    const movie = await getTicketsById(id);
    if (movie.data) {
      // const mid = movies.indexOf(movie);
      // movies.splice(mid, 1);
      await deleteTicketById(id);
      response.send({ msg: "Movie deleted 🎉" });
    } else {
      response.status(404).send({ msg: "there is No such Movie 🥲" });
    }
  } catch (err) {
    response.status(500).send({ msg: "Failed to Perform delete" });
  }
}

async function createTicketsDataCtr(req, res) {
  const data = req.body;
  const addMovie = {
    ...data,
  };
  try {
    await createTicket(addMovie);
    res.status(201).send(addMovie);
  } catch (err) {
    console.log(err);
    res.send({ msg: "unable to create" });
  }
}

async function updateTicketsDataCtr(request, response) {
  const { id } = request.params;
  console.log("id", id);
  const updateMovie = request.body;
  console.log(updateMovie);
  try {
    const movie = await getTicketsById(id);
    if (movie.data) {
      const mergedData = await updateTicketById(movie, updateMovie);
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
  getAllTicketsDataCtr,
  getTicketsDataByIdCtr,
  deleteTicketsDataCtr,
  createTicketsDataCtr,
  updateTicketsDataCtr,
};
