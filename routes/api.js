const express = require('express');
const apiController = require('../controllers/api');
const router = express.Router();

router.get('/hello', apiController.getHello);

router.post('/fileanalyse', apiController.fileanalyse);

module.exports = router;
