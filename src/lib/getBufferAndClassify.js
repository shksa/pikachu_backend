const { getBufferFromBase64 } = require('./getBufferFromBase64')
const { classify } = require('./classify')

exports.getBufferAndClassify = base64Text => classify(getBufferFromBase64(base64Text))
