const getAllUserService = require("../services/getAllUser");

function getAllUserHandler(fastify) {
  const getAllUser = getAllUserService(fastify);
  return async (request, reply) => {
    const { logTrace } = request;
    const response = await getAllUser({ logTrace });
    return reply.code(200).send(response);
  };
}

module.exports = getAllUserHandler;
