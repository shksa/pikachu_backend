const cv = require('opencv4nodejs')
const { models } = require('./models')

const model = models.tensorflow.inception5h()

exports.classify = (imgBuffer) => {
  const img = cv.imdecode(imgBuffer)

  const maxImgDim = 224
  const white = new cv.Vec(255, 255, 255)
  const imgResized = img.resizeToMax(maxImgDim).padToSquare(white)

  const inputBlob = cv.blobFromImage(imgResized)
  model.network.setInput(inputBlob)

  const outputBlob = model.network.forward()

  const minConfidence = 0.05

  const locations =
      outputBlob
        .threshold(minConfidence, 1, cv.THRESH_BINARY)
        .convertTo(cv.CV_8U)
        .findNonZero()

  const result =
      locations.map(pt => ({
        confidence: parseInt(outputBlob.at(0, pt.x) * 100) / 100,
        className: model.classNames[pt.x],
      }))
        .sort((r0, r1) => r1.confidence - r0.confidence)
        .map(res => `${res.className} (${res.confidence})`)

  return result
}
