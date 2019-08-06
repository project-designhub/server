const db = require('../../data/dbConfig');

const findBy = filter => {
  return db('users')
    .where(filter)
    .first();
};

const findAllBy = filter => {
  return db('users').where(filter);
};

const getAll = () => {
  return db('users');
};

const update = (filter, item) => {
  return db('users')
    .where(filter)
    .update(item);
};

module.exports = {
  findBy,
  findAllBy,
  getAll,
  update
};
