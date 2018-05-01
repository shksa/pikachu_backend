const { tfModels } = require('./tensorflow')
const { caffeModels } = require('./caffe')

exports.models = {
  tensorflow: tfModels,
  caffe: caffeModels,
}
