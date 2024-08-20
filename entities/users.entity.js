import { Entity } from "electrodb"; // ORM (Object Relation Mapping)
import { client } from "../util/dbo.connection.js";

const Users = new Entity(
  {
    model: {
      entity: "Users",
      version: "2", // Ensure this matches your schema version
      service: "UsersService",
    },
    attributes: {
      userName: {
        type: "string",
        required: true,
      },
      password: {
        type: "string",
        required: true,
      },
      roleId: {
        type: "string", // Changed from "number" to "string" for DynamoDB compatibility
        // required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          field: "pk",
          facets: ["userName"],
        },
        sk: {
          field: "sk",
          facets: [],
        },
      },
    },
  },
  { client, table: "Users" } // Ensure the table name is correct and matches your DynamoDB table
);
export { Users };
