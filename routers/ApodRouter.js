const express = require("express");
const router = express.Router();
const ApodController = require("../controllers/ApodController");

router.get("/photo", ApodController.getPhoto);
router.get(`/:daily_photo`, ApodController.getDaily);

module.exports = router;