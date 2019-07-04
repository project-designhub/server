exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl.string('name').notNullable();
    tbl
      .string('email')
      .notNullable()
      .unique();
    tbl.string('profile_picture');
    tbl
      .string('username')
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
