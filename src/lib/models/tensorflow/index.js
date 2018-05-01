const cv = require('opencv4nodejs')
const fs = require('fs')

exports.tfModels = {
  inception5h: () => ({
    network: cv.readNetFromTensorflow('/Users/sreekarnimbalkar/hobby_projs/pikachu/pikachu_backend/src/lib/models/tensorflow/inception5h/tensorflow_inception5h_graph.pb'),
    classNames: fs.readFileSync('/Users/sreekarnimbalkar/hobby_projs/pikachu/pikachu_backend/src/lib/models/tensorflow/inception5h/imagenet_classes.txt').toString().split('\n'),
  }),
}
