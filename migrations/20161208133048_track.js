
exports.up = function(knex, Promise) {
  return knex.schema.createTable("track", (table) => {
    table.increments()
    table.text("name")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("track")
};
