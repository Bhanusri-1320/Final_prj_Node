import jwt from "jsonwebtoken";
import { Session } from "../entities/session.entity.js";
import { Users } from "../entities/users.entity.js";
// middleware are function

const ADMIN = "0";

const authIsAdmin = async (request, response, next) => {
  const token = request.header("x-auth-token");
  console.log(token);
  try {
    jwt.verify(token, process.env.SECRET_KEY);
    const results = await Session.get({ token: token }).go();
    console.log("results", results);
    const role = await Users.get({ userName: results.data.userName }).go();
    if (results.data.roleId === ADMIN) {
      console.log("role");
      next();
    } else {
      throw new Error("Unauthorized");
    }
    next();
  } catch (err) {
    response.status(401).send({ msg: err.message });
  }
};

export { authIsAdmin };
