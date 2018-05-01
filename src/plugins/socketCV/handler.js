const { getBufferAndDetectify } = require('../../lib/getBufferAndDetectify')
const { getBufferAndClassify } = require('../../lib/getBufferAndClassify')
const { classify } = require('../../lib/classify')

module.exports = {

  detectObjectsInFrame: (frameData) => {
    const predictions = getBufferAndDetectify(frameData)
    return predictions
  },

  detectObjectsInFrameAndEmit: (frameData, socket) => {
    const predictions = getBufferAndDetectify(frameData)
    socket.emit('frameImagePredictions', predictions)
  },

  recognizeImageAndEmit: (imageData, socket) => {
    const predictions = classify(imageData)
    socket.emit('imageClass', predictions)
  },

  recognizeFrameAndEmit: (frameData, socket) => {
    const predictions = getBufferAndClassify(frameData)
    socket.emit('frameImagePredictions', predictions)
  },

}
