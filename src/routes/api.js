const express = require('express');
const router = express.Router();
const {CreateProfile, UserLogin} = require('../controllers/ProfileController');


router.post('/CreateProfile', CreateProfile);
router.post('/UserLogin', UserLogin);


module.exports = router;