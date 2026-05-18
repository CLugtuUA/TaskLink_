const express = require('express');
const router = express.Router();
const { registerUser, createTask, getNearbyTasks } = require('./controllers'); 

router.post('/users/register', registerUser);
router.post('/tasks/create', createTask);
router.get('/tasks/nearby', getNearbyTasks);

module.exports = router;