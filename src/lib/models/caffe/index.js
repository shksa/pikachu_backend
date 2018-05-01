const cv = require('opencv4nodejs')

exports.caffeModels = {
  ssdCoco: () => {
    const prototxt = '/Users/sreekarnimbalkar/hobby_projs/pikachu/pikachu_backend/src/lib/models/caffe/SSD_300x300/deploy.prototxt'
    const weights = '/Users/sreekarnimbalkar/hobby_projs/pikachu/pikachu_backend/src/lib/models/caffe/SSD_300x300/VGG_coco_SSD_300x300_iter_400000.caffemodel'
    const { cocoClassNames } = require('./cocoClassNames.js')
    return {
      network: cv.readNetFromCaffe(prototxt, weights),
      classNames: cocoClassNames,
    }
  },
}
