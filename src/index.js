const http = require('http');
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
