const db = require('../dbConfig');

const { addFooBar, getFooBars } = require('./fooBarModel');

describe('fooBar model', () => {
  describe('addFooBar()', () => {
    beforeEach(async () => {
      await db('fooBar').truncate();
    });

    it('should insert 2 fooBars', async () => {
      await addFooBar({ foo: 'bar' });
      await addFooBar({ foo: '1234', bar: 'buzz' });
    });
  });
});
