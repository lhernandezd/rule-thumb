const http = require('http');
const app = require('./server');
const config = require('./server/config');

const server = http.createServer(app);
const { port } = config.server;

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
