const express = require('express');
const router = express.Router();
const RoverController = require('../controllers/RoverController');


// Create
// router.post('/users', UserController.create);

router.get('/allPhotos', RoverController.getAll );

module.exports = router;