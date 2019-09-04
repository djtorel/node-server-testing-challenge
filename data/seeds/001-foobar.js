exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fooBar')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('fooBar').insert([
        { id: 1, foo: '12345' },
        { id: 2, foo: 'Barista', bar: 'barbar' },
        { id: 3, foo: 'FizzBuzz' },
      ]);
    });
};
