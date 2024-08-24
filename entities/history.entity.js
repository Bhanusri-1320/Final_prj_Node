import { Entity } from "electrodb"; // ORM (Object Relation Mapping)
import { client } from "../util/dbo.connection.js";

const History = new Entity(
  {
    model: {
      entity: "History",
      version: "3", // Ensure this matches your schema version
      service: "HistoryService",
    },
    attributes: {
      historyId: {
        type: "string",
        required: true,
      },
      userName: {
        type: "string",
        required: true,
      },
      theaterName: {
        type: "string",
      },
      timing: {
        type: "string", // Changed from "number" to "string" for DynamoDB compatibility
        // required: true,
      },
      date: {
        type: "string",
      },
      title: {
        type: "string",
      },
    },
    indexes: {
      primary: {
        pk: {
          field: "pk",
          facets: ["historyId"],
        },
        sk: {
          field: "sk",
          facets: [],
        },
      },
    },
  },
  { client, table: "History" } // Ensure the table name is correct and matches your DynamoDB table
);
export { History };
