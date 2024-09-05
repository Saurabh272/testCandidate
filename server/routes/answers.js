const express = require('express');
const router = express.Router();
const answerController = require('../controllers/answerController');

router.post('/', answerController.submitAnswer);

module.exports = router;