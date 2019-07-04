exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl.string('name');
    tbl.string('email');
    tbl.string('profile_picture');
    tbl.string('nickname');
    tbl.string('sub');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
