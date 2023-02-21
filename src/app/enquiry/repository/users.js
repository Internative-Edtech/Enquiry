const { logQuery } = require("../../commons/helpers");
const { USER } = require("../commons/constants");

function userRepo(fastify) {
  async function createUser({ data, logTrace }) {
    const knex = this;
    const query = knex(USER.NAME).returning("*").insert(data);
    logQuery({
      logger: fastify.log,
      query,
      context: "Create User",
      logTrace
    });
    const response = await query;
    return response[0];
  }
  async function getUserList({ logTrace }) {
    const knex = this;
    const query = knex.select("*").from(USER.NAME);
    logQuery({
      logger: fastify.log,
      query,
      context: "get User List",
      logTrace
    });
    const response = await query;
    return response;
  }
  // async function getUserByPhoneNo({ logTrace,phone_no }) {
  //   const knex = this;
  //   const query = knex.select("*").from(USER.NAME).where();
  //   logQuery({
  //     logger: fastify.log,
  //     query,
  //     context: "get User List",
  //     logTrace
  //   });
  //   const response = await query;
  //   return response;
  // }

  return {
    createUser,
    getUserList
  };
}

module.exports = userRepo;
