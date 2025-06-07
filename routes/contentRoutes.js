const express = require('express');
const router = express.Router();
const { getContent, setContent } = require('../controllers/contentController');

router.get('/', getContent);
router.post('/', setContent);

module.exports = router;
