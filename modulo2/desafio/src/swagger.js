export const swaggerDocument = {
  openapi: "3.0.1",
  info: {
    title: "Swagger Safetrace Backend Admin",
    version: "1.0.0",
    description: "Backend server of safetrace network administration",
  },
  host: "localhost:3000",
  tags: [
    {
      name: "Organization",
      description: "Hyperledger fabric organization",
    },
  ],
  paths: {
    "/createGrid": {
      post: {
        tags: ["Grid"],
        summary: "Add a new grid",
        operationId: "addOrg",
        requestBody: {
          description:
            "Create a new grid",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/createGrid",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Success",
          },
          "400": {
            description: "Bad request",
          },
          "403": {
            description: "Forbiden",
          },
        },
      },
    },
    "/updateGrid": {
      put: {
        tags: ["Grid"],
        summary: "Update grid",
        operationId: "addOrg",
        requestBody: {
          description:
            "Update grid",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/updateGrid",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Success",
          },
          "400": {
            description: "Bad request",
          },
          "403": {
            description: "Forbiden",
          },
        },
      },
    },
  },
  components: {
    schemas: {
      createGrid: {
        type: "object",
        properties: {
          student: {
            type: "string",
            example:"Guilherme",
            description: "Student name",
          },
          subject: {
            type: "string",
            example:"Mathematics",
            description: "Mathematics",
          },
          type: {
            type: "string",
            example:"Final test",
            description: "Insert a type of test",
          },
          value: {
            type: "float",
            example:7.5,
            description: "Test note",
          }
        },
        required: ["student", "subject", "type", "value"],
      },
      updateGrid: {
        type: "object",
        properties: {
          id: {
            type: "number",
            example:1,
            description: "Grid id",
          },
          student: {
            type: "string",
            example:"New Guilherme",
            description: "Student name",
          },
          subject: {
            type: "string",
            example:"Mathematics",
            description: "Mathematics",
          },
          type: {
            type: "string",
            example:"New final test",
            description: "Insert a type of test",
          },
          value: {
            type: "float",
            example:10,
            description: "Test note",
          }
        },
        required: ["student", "subject", "type", "value"],
      },
    },
  },
};
