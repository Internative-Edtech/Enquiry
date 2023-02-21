const { errorSchemas } = require("../../commons/schemas/errorSchemas");

const getAllUsers = {
  tags: ["WALLET"],
  summary: "This API is to get wallet balance for a customer",
  headers: { $ref: "request-headers#" },
  response: {
    200: {
      type: "array",
      items: {
        type: "object",
        properties: {
          user_id: { type: "string", format: "uuid" },
          student_name: { type: "string" },
          contact: {
            type: "object",
            properties: {
              country_code: { type: "string" },
              number: { type: "string" }
            }
          },
          email: { type: "string" },
          city: { type: "string" },
          state: { type: "string" },
          date_created: { type: "string" }
        }
      }
    }
  },
  ...errorSchemas
};

module.exports = getAllUsers;
