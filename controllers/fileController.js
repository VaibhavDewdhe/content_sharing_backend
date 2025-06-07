const FileMeta = require('../models/FileMeta');

exports.uploadFile = async (req, res) => {
  const newFile = new FileMeta({
    originalName: req.file.originalname,
    storedName: req.file.filename
  });
  await newFile.save();
  res.json({ message: "File uploaded", file: req.file });
};

exports.getFiles = async (req, res) => {
  const files = await FileMeta.find();
  const baseUrl = `${req.protocol}://${req.get('host')}/uploads/`;
  res.json(files.map(f => ({
    originalName: f.originalName,
    fileUrl: baseUrl + f.storedName
  })));
};
