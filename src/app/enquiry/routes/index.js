const schemas = require("../schemas");
const handlers = require("../handlers");

module.exports = async fastify => {
  // fastify.route({
  //   method: "GET",
  //   url: "/users",
  //   schema: schemas.getUserById,
  //   handler: handlers.getUserById(fastify)
  // });
  fastify.route({
    method: "GET",
    url: "/users",
    schema: schemas.getAllUsers,
    handler: handlers.getAllUserHandler(fastify)
  });

  fastify.route({
    method: "POST",
    url: "/users",
    schema: schemas.postAddUser,
    handler: handlers.createUser(fastify)
  });
};
