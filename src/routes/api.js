const express = require('express');
const router = express.Router();
const {CreateProfile, UserLogin, SelectProfile, UpdateProfile} = require('../controllers/ProfileController');
const { CreateTodo, SelectTodo, UpdateTodo, UpdateStatus, RemoveTodo, SelectTodoByStatus, SelectTodoByDate } = require('../controllers/ToDoListController');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');



router.post('/CreateProfile', CreateProfile);
router.post('/UserLogin', UserLogin);

// Profile Routes with jwt Token 
router.get('/SelectProfile', AuthVerifyMiddleware, SelectProfile);
router.post('/UpdateProfile', AuthVerifyMiddleware, UpdateProfile);

// Todo Routes with jwt Token 
router.post('/CreateTodo', AuthVerifyMiddleware, CreateTodo);
router.get('/SelectTodo', AuthVerifyMiddleware, SelectTodo);
router.post('/UpdateTodo', AuthVerifyMiddleware, UpdateTodo);
router.post('/UpdateStatus', AuthVerifyMiddleware, UpdateStatus);
router.get('/RemoveTodo', AuthVerifyMiddleware, RemoveTodo);
router.get('/SelectTodoByStatus', AuthVerifyMiddleware, SelectTodoByStatus);
router.get('/SelectTodoByDate', AuthVerifyMiddleware, SelectTodoByDate);


module.exports = router;