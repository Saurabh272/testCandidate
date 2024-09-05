const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');

router.get('/', testController.getAllTests);
router.get('/:id', testController.getTestById);
router.post('/', testController.createTest);

module.exports = router;