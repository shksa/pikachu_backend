const Hapi = require('hapi')

const server = new Hapi.Server()

server.connection({
  port: 7000,
  host: 'localhost',
})

server.register([
  {
    register: require('./plugins/recognizeImage'),
  },
  {
    register: require('./plugins/socketCV'),
  },
])
  .then(() => {
    server.start()
  })
  .then(() => {
    console.log(`server started at ${server.info.uri}`)
  })
  .catch((err) => {
    throw err
  })
