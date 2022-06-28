const express = require('express');
const router = express.Router();
const {CreateProfile, UserLogin, SelectProfile, UpdateProfile} = require('../controllers/ProfileController');
const { CreateTodo, SelectTodo, UpdateTodo } = require('../controllers/ToDoListController');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');



router.post('/CreateProfile', CreateProfile);
router.post('/UserLogin', UserLogin);

// with jwt Token 
router.get('/SelectProfile', AuthVerifyMiddleware, SelectProfile);
router.post('/UpdateProfile', AuthVerifyMiddleware, UpdateProfile);

// Todo 
router.post('/CreateTodo', AuthVerifyMiddleware, CreateTodo);
router.get('/SelectTodo', AuthVerifyMiddleware, SelectTodo);
router.post('/UpdateTodo', AuthVerifyMiddleware, UpdateTodo);


module.exports = router;