const express = require('express');
const router = express.Router();
const {CreateProfile} = require('../controllers/ProfileController');


router.post('/CreateProfile', CreateProfile);


module.exports = router;