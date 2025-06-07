const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const { uploadFile, getFiles } = require('../controllers/fileController');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

router.post('/upload', upload.single('file'), uploadFile);
router.get('/', getFiles);

module.exports = router;
