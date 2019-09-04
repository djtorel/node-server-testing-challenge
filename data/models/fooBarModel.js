const db = require('../dbConfig');

const getFooBars = () => db('fooBar');

const getFooBarById = id =>
  db('fooBar')
    .where({ id })
    .first();

const addFooBar = fooBar =>
  db('fooBar')
    .insert(fooBar)
    .then(([id]) => getFooBarById(id));

module.exports = {
  getFooBars,
  getFooBarById,
  addFooBar,
};
