exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl
      .string('email')
      .notNullable()
      .unique();
    tbl
      .string('sub')
      .notNullable()
      .unique();
    tbl.string('username').unique();
    tbl.string('profile_picture');
    tbl.string('full_name');
    tbl.boolean('dark_mode').defaultTo(false);
    tbl.text('bio');
    tbl.text('location');
    tbl.string('website');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
