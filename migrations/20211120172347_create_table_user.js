exports.up = knex => {
  return knex
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .then(() => knex.schema.hasTable("enquiry"))
    .then(exists => {
      if (!exists) {
        return knex.schema.createTable("enquiry", table => {
          table
            .uuid("user_id")
            .primary()
            .notNullable()
            .defaultTo(knex.raw("uuid_generate_v4()"));
          table.string("student_name");
          table.string("email");
          table.string("city");
          table.jsonb("contact");
          table.string("state");
          table.timestamp("date_created");
        });
      }
      return false;
    });
};

exports.down = knex => {
  return knex.schema.dropTable("enquiry");
};

// /    POST API for enquiry form

// Name
// Email
// Contact
// City
// State(not required)

// For Backend,generate timestamp and to ISO string.

// GET API for the same

// Name
// Email
// Contact
// City
// Date

// For Filtering the data,any of the field can be used.
