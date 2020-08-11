
exports.up = function(knex) {
    return knex.schema.createTable('url', function (table) {
        table.increments();
        table.string('hits').notNullable();
        table.string('url').notNullable();
        table.string('shortUrl').notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('url');
};
