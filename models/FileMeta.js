const mongoose = require('mongoose');

const fileMetaSchema = new mongoose.Schema({
  originalName: String,
  storedName: String,
  uploadDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FileMeta', fileMetaSchema);
