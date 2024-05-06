exports.up = function (knex) {
  return knex.schema.createTable("stores", function (table) {
    table.increments("id");
    table.string("name").notNullable();
    table.string("address").notNullable();
    table.string("latitude");
    table.string("longitude");
    table.string("media");
    table.json("categories");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("stores");
};
