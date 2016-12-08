
exports.up = function(knex, Promise) {
  return knex.schema.table("track", (table) => {
    table.integer("artist_id")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table("track", (table) => {
    table.dropColumn("artist_id")
  })
};
