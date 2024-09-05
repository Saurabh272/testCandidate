const express = require('express');
const router = express.Router();
const resultController = require('../controllers/resultController');

router.get('/:testId/:profileId', resultController.getTestResults);

module.exports = router;