const express = require('express');
const router = express.Router();
const {CreateProfile, UserLogin, SelectProfile, UpdateProfile} = require('../controllers/ProfileController');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');



router.post('/CreateProfile', CreateProfile);
router.post('/UserLogin', UserLogin);

// with jwt Token 
router.get('/SelectProfile', AuthVerifyMiddleware, SelectProfile);
router.post('/UpdateProfile', AuthVerifyMiddleware, UpdateProfile);


module.exports = router;