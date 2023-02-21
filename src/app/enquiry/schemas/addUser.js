const { errorSchemas } = require("../../commons/schemas/errorSchemas");

const postAddUser = {
  tags: ["USERS"],
  summary: "This API is to create a user",
  headers: { $ref: "request-headers#" },
  body: {
    type: "object",
    required: ["student_name", "contact"],
    additionalProperties: false,
    properties: {
      student_name: { type: "string" },
      contact: {
        type: "object",
        required: ["country_code", "number"],
        additionalProperties: false,
        properties: {
          country_code: { type: "string", enum: ["+91"] },
          number: { type: "string", minLength: 10, maxLength: 10 }
        }
      },
      email: { type: "string", format: "email" },
      city: { type: "string" },
      state: { type: "string" }
    }
  },
  response: {
    201: {
      type: "object",
      properties: {
        user_id: { type: "string", format: "uuid" }
      }
    },
    ...errorSchemas
  }
};

module.exports = postAddUser;
