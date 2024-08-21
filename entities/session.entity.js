import { Entity } from "electrodb"; // ORM(Object relation mapping) // Adapter on adapter

import { client } from "../util/dbo.connection.js";

const Session = new Entity(
  {
    model: {
      entity: "session",
      version: "2",
      service: "sessionService",
    },
    attributes: {
      userName: {
        type: "string",
        required: true,
      },
      token: {
        type: "string",
        required: true,
      },
      roleId: {
        type: "string",
      },
    },
    indexes: {
      primary: {
        pk: {
          field: "pk",
          facets: ["token"],
        },
        sk: {
          field: "sk",
          facets: [],
        },
      },
    },
  },
  { client, table: "session" }
);

export { Session };

// async function logicUserCtr(req, res) {
//   const data = req.body;
//   const userName = data.userName ;
//   const userFromDB = await getUserByuserName(data.userName);
//   if (!userFromDB.data) {
//     res.status(404).send({ msg: "Invalid Credentials" });
//     return;
//   } else {
//     const storedDBPassword = userFromDB.data.password;
//     const providedPassword = data.password;
//     const isPasswordCheck = await bcrypt.compare(
//       providedPassword,
//       storedDBPassword
//     );
//     if (isPasswordCheck) {
//       var token = jwt.sign(
//         { foo: userFromDB.data.userName },
//         process.env.SECRET_KEY
//       );
//       const sessionData = {userName , token}
//       await createSession(sessionData);

//       res.status(200).send({ msg: "Login Successful", token });
//     } else {
//       res.status(400).send({ msg: "Invalid Credentials" });
//     }
//   }
// }
