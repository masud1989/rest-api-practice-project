const express = require('express');
const router = express.Router();
const {CreateProfile, UserLogin, SelectProfile} = require('../controllers/ProfileController');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');



router.post('/CreateProfile', CreateProfile);
router.post('/UserLogin', UserLogin);
router.get('/SelectProfile', AuthVerifyMiddleware, SelectProfile);


module.exports = router;