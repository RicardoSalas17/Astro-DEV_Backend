
const express = require('express');
const router = express.Router();
const ApodController = require('../controllers/ApodController');


// Create
// router.post('/users', UserController.create);

router.get('/photo', ApodController.getPhoto );

module.exports = router;