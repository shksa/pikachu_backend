const { getBufferFromBase64 } = require('./getBufferFromBase64')
const { detectify } = require('./detectify')

exports.getBufferAndDetectify = base64Text => detectify(getBufferFromBase64(base64Text))
