const {
  detectObjectsInFrame, detectObjectsInFrameAndEmit, recognizeImageAndEmit, recognizeFrameAndEmit,
} = require('./handler')

exports.register = (server, options, next) => {
  const io = require('socket.io')(server.listener)

  io.on('connect', (socket) => {
    console.log('got a new connection from client ')

    socket.emit('helloToClient', 'Hello client')

    socket.on('detectObjectsInFrame', (frameData, fn) => fn(detectObjectsInFrame(frameData)))

    // socket.on('detectObjectsInFrame', frameData => detectObjectsInFrameAndEmit(frameData, socket))

    socket.on('recognizeImage', imageData => recognizeImageAndEmit(imageData, socket))

    socket.on('recognizeFrame', frameData => recognizeFrameAndEmit(frameData, socket))

    socket.on('disconnect', reason => console.log(reason))
  })

  next()
}

exports.register.attributes = {
  name: 'socketCV',
  version: '0.0.1',
}
