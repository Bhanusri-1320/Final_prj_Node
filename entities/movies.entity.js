import { Entity } from "electrodb"; // ORM(Object relation mapping) // Adapter on adapter

import { client } from "../util/dbo.connection.js";

const Movies = new Entity(
  {
    model: {
      entity: "Movies",
      version: "2",
      service: "MovieService",
    },
    attributes: {
      movieId: {
        type: "string",
        required: true,
      },
      title: {
        type: "string",
        required: true,
      },
      poster: {
        type: "string",
      },
      trailer: {
        type: "string",
      },
      ratings: {
        type: "string",
      },
      synopsis: {
        type: "string",
      },
      genre: {
        type: "list",
      },
      director: {
        type: "string",
      },
      cast: {
        type: "list",
        items: {
          type: "map",
          properties: {
            actorId: {
              type: "string",
            },
            name: {
              type: "string",
            },
            profilePic: {
              type: "string",
            },
          },
        },
      },
      releaseDate: {
        type: "string",
      },
      duration: {
        type: "string",
      },
      language: {
        type: "string",
      },
      background: {
        type: "string",
      },
    },
    indexes: {
      primary: {
        pk: {
          field: "pk",
          facets: ["movieId"],
        },
        sk: {
          field: "sk",
          facets: [],
        },
      },
    },
  },
  { client, table: "movies" }
);

export { Movies };
