const express = require('express');
const router = express.Router();
const RoverController = require('../controllers/RoverController');


router.get('/allPhotos/:rover_name', RoverController.getAll );
router.get('/rover/:rover_name', RoverController.getRoverInfo)
router.get('/:rover_name/:rover_camara', RoverController.getFilterPhotos);

module.exports = router;