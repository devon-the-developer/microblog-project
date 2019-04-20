
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogPosts', (table) => {
      table.increments('id').primary
      table.string('name')
      table.string('tags')
      table.string('content')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blogPosts')
};
