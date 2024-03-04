const express = require('express');
const ResturantControllers = require('../Controllers/Resturants');
const router = express.Router();
router.post('/filterResturants',ResturantControllers.filterResturants);

module.exports = router;
