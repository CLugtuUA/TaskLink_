// routes.js
const express = require('express');
const router = express.Router();

// 1. Import loginUser from controllers
const { registerUser, loginUser, createTask, getNearbyTasks, sendMessage, submitReview, acceptTask, getChatHistory} = require('./controllers'); 

// User Routes
router.post('/users/register', registerUser);
router.post('/users/login', loginUser); // <-- Added login route here

// Task Routes
router.post('/tasks/create', createTask);
router.get('/tasks/nearby', getNearbyTasks);
router.post('/tasks/accept', acceptTask);

// Messaging & Review Routes
router.post('/messages/send', sendMessage);
router.post('/reviews/submit', submitReview);
router.get('/chat/:taskId', getChatHistory);

module.exports = router;