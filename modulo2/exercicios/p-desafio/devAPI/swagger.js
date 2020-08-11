export const swaggerDocument = {
  swagger: "2.0",
  info: {
    description: "Account management",
    version: "1.0.0",
    title: "Swagger Account Management",
  },
  host: "localhost:8888",
  tags: [
    {
      name: "Account",
      description: "Account management",
    },
  ],
  paths: {
    "/account": {
      get: {
        tags: ["Account"],
        summary: "Add a new account",
        description: "Get all accounts",
        produces: ["application/json"],
        responses: {
          "200": {
            description: "Successful operation",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/account",
              },
            },
          },
          "405": {
            description: "Invalid input",
          },
        },
      },
      post: {
        tags: ["Account"],
        summary: "Update an existing account",
        description: "",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Pet object that needs to be added to the store",
            required: true,
            schema: {
              $ref: "#/definitions/newAccount",
            },
          },
        ],
        responses: {
          "400": {
            description: "Invalid ID supplied",
          },
          "404": {
            description: "Pet not found",
          },
          "405": {
            description: "Validation exception",
          },
        },
      },
    },
  },
  definitions: {
    account: {
      type: "object",
      properties: {
        id: {
          type: "number",
          example: "1",
        },
        name: {
          type: "string",
          example: "Guilherme",
        },
        balance: {
          type: "number",
          example: 1200,
        },
      },
    },
    newAccount: {
      type: "object",
      properties: {
        name: {
          type: "string",
          example: "Guilherme",
        },
        balance: {
          type: "number",
          example: 1200,
        },
      },
    },
  },
  externalDocs: {
    description: "Find out more about Swagger",
    url: "http://swagger.io",
  },
};
