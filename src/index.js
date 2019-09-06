const http = require('http');
const app = require('./server');
const config = require('./server/config');
const database = require('./server/database');

// Database Connection
database.connect(config.database, {});

const server = http.createServer(app);
const { port } = config.server;

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
