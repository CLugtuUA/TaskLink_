const express = require('express');
const router = express.Router();
const { registerUser, createTask, getNearbyTasks, sendMessage, submitReview} = require('./controllers'); 

router.post('/users/register', registerUser);
router.post('/tasks/create', createTask);
router.post('/messages/send', sendMessage);
router.get('/tasks/nearby', getNearbyTasks);
router.post('/reviews/submit', submitReview);

module.exports = router;