exports.up = function(knex) {
  return knex.schema.createTable('fooBar', tbl => {
    tbl.increments();
    tbl.string('foo', 255).notNullable();
    tbl.string('bar', 255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fooBar');
};
