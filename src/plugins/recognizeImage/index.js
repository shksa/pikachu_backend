const { recognizeImageRoute } = require('./route')

exports.register = (server, options, next) => {
  server.route(recognizeImageRoute)
  next()
}

exports.register.attributes = {
  name: 'image-recognition',
  version: '0.0.1',
}

