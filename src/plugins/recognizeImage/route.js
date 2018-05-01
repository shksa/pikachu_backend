const { classify } = require('../../lib/classify')

exports.recognizeImageRoute = {
  method: 'POST',
  path: '/recognizeImage',
  handler: (request, reply) => {
    console.log('recognizeImage route called')

    const { imageData } = request.payload

    const predictions = classify(imageData)

    reply(predictions)
  },
}
