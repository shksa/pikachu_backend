const cv = require('opencv4nodejs')
const { extractDetectionResults } = require('./extractDetectionResults')
const { models } = require('./models')

const model = models.caffe.ssdCoco()

exports.detectify = (imgBuffer) => {
  const img = cv.imdecode(imgBuffer)

  const imgResized = img.resize(300, 300)

  const inputBlob = cv.blobFromImage(imgResized)

  model.network.setInput(inputBlob)

  let outputBlob = model.network.forward()

  outputBlob = outputBlob.flattenFloat(outputBlob.sizes[2], outputBlob.sizes[3])

  const minConfidence = 0.2

  const detectionResults =
      extractDetectionResults(outputBlob, img)
        .filter(r => r.confidence > minConfidence)
        .map(res => ({ ...res, className: model.classNames[res.classLabel] }))


  return detectionResults
}
