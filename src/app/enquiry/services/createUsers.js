const userRepo = require("../repository/users");

function createUsersService(fastify) {
  const { createUser } = userRepo(fastify);

  return async ({ body, logTrace }) => {
    fastify.log.info({
      message: "create user service",
      logTrace
    });
    const knex = await fastify.knex;
    const date = new Date();
    const response = await createUser.call(knex, {
      data: { ...body, date_created: date },
      logTrace
    });
    return response; // User transformer in case transformation is needed
  };
}
module.exports = createUsersService;
