exports.getDocumentData = documentData => {
  if (process.env.NODE_ENV === 'production') {
    documentData.bodyScript = ''
  }
  return documentData
}