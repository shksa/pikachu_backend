
exports.getBufferFromBase64 = (base64encodedText) => {
  const base64data = base64encodedText.replace('data:image/webp;base64', '')
  const imageBuffer = Buffer.from(base64data, 'base64')
  return imageBuffer
}

