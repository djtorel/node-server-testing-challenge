require('dotenv').config();

server = require('./server');

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`\n ** Server up on port ${port} **\n`));
