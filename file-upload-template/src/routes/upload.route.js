const express = require('express');
const router = express.Router();

const uploadMiddleware = require('../middleware/upload.middleware');
const {uploadFiles} = require('../controllers/upload.controller');

router.post('/files',uploadMiddleware.array('files',5),uploadFiles);

module.exports = router;