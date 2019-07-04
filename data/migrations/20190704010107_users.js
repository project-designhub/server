exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl.string('name');
    tbl.string('email');
    tbl.string('image_url');
    tbl.string('nickname');
    tbl.string('sub');
    tbl.string('signature');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
