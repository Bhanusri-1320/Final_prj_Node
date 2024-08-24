import { Tickets } from "../entities/tickets.entity.js";
async function getAllTickets() {
  return await Tickets.scan.go();
}
async function getTicketsById(id) {
  return await Tickets.get({ movieId: id }).go();
}
async function createTicket(addMovie) {
  await Tickets.create(addMovie).go();
}
async function updateTicketById(movie, updateMovie) {
  return await Tickets.put({
    ...movie.data,
    ...updateMovie,
  }).go();
}

async function deleteTicketById(id) {
  await Tickets.delete({ movieId: id }).go();
}

export {
  getAllTickets,
  getTicketsById,
  updateTicketById,
  deleteTicketById,
  createTicket,
};
