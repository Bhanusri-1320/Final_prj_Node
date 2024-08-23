// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
import cors from "cors";
const app = express();
import userRouter from "./routes/users.route.js";
import moviesRouter from "./routes/movies.route.js";
import historyRouter from "./routes/history.route.js";

const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});
app.use("/user", userRouter);
app.use("/movies", moviesRouter);
app.use("/history", historyRouter);
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
