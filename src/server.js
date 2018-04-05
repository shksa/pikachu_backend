const hapi = require('hapi');
const routes = require('./routes');

const server = new hapi.Server();

server.connection({
  port: 7000,
  host: 'localhost',
});

server.routes(routes);

if (!module.parent) {
  server.start((err) => {
    if (err) {
      throw (err);
    }
    console.log('Server started at port 3001');
  });
}

module.exports = server;
