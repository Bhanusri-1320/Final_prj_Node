import jwt from "jsonwebtoken";

const auth = (request, response, next) => {
  console.log("auth..");
  const token = request.header("x-auth-token");
  console.log(token);
  try {
    jwt.verify(token, process.env.SECRET_KEY);
    next();
    console.log("next");
  } catch (err) {
    response.status(401).send({ msg: err.message });
  }
};

export { auth };
