const userRepo = require("../repository/users");

function getAllUserService(fastify) {
  const { getUserList } = userRepo(fastify);

  return async ({ logTrace }) => {
    fastify.log.info({
      message: "get All user service",
      logTrace
    });
    const knex = await fastify.knex;
    const response = await getUserList.call(knex, {
      logTrace
    });
    return response; // User transformer in case transformation is needed
  };
}
module.exports = getAllUserService;
