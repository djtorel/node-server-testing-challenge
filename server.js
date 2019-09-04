const express = require('express');

const { getFooBars } = require('./data/models/fooBarModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Server working' });
});

server.get('/fooBars', async (req, res) => {
  try {
    return res.status(200).json(await getFooBars());
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = server;
