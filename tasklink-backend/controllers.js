// tasklink-backend/controllers.js
const { User, Task, Message, Review } = require('./models');

// REQ-01: User Registration with secure identity verification [cite: 35, 188]
async function registerUser(req, res) {
    const { name, email, password, role, location } = req.body;
    
    if (!name || !email || !password || !role) {
        return res.status(400).json({ status: "error", message: "Missing required data" });
    }
    
    try {
        const user = await User.create({ name, email, password, role, location });
        return res.status(201).json({ status: "success", user_id: user.id });
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
}

// User Authentication [cite: 188]
async function loginUser(req, res) {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ 
            where: { email: email } 
        });

        if (!user || user.password !== password) {
            return res.status(401).json({ 
                success: false, 
                message: "Invalid email or password." 
            });
        }

        return res.status(200).json({
            success: true,
            message: "Login successful!",
            data: {
                id: user.id, 
                name: user.name,
                role: user.role
            }
        });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ 
            success: false, 
            message: "Internal server error." 
        });
    }
}

// REQ-02: Post a Local Task [cite: 189, 211]
async function createTask(req, res) {
    const { poster_id, title, price, description } = req.body;
    if (!poster_id || !title || !price) {
        return res.status(400).json({ status: "error", message: "Missing required data" });
    }
    try {
        const task = await Task.create({ poster_id, title, price, description, status: "Open" });
        return res.status(201).json({ status: "success", message: "Task posted", task_id: task.id });
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
}

// Location-Based Browsing [cite: 30, 190]
async function getNearbyTasks(req, res) {
    const locationQuery = req.query.location || 'San Fernando';
    try {
        const tasks = await Task.findAll({
            where: { status: "Open" },
            include: [{ model: User, where: { location: locationQuery }, attributes: [] }]
        });
        return res.status(200).json({ status: "success", data: tasks });
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
}

// REQ-03: Browse and Accept Tasks [cite: 190, 209]
async function acceptTask(req, res) {
    const { task_id, tasker_id } = req.body;
    
    if (!task_id || !tasker_id) {
        return res.status(400).json({ status: "error", message: "Task ID and Tasker ID are required" });
    }

    try {
        const task = await Task.findOne({ where: { id: task_id, status: 'Open' } });
        
        if (!task) {
            return res.status(404).json({ status: "error", message: "Task unavailable" });
        }

        task.status = 'In Progress';
        task.tasker_id = tasker_id;
        await task.save();

        return res.status(200).json({ 
            status: "success", 
            message: "Task accepted",
            data: task 
        });
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
}

// REQ-04: Real-time Messaging (Process 3.0) [cite: 31, 150]
async function sendMessage(req, res) {
    const { task_id, sender_id, receiver_id, content } = req.body;
    if (!sender_id || !receiver_id || !content) {
        return res.status(400).json({ status: "error", message: "Incomplete message data" });
    }
    try {
        await Message.create({ task_id, sender_id, receiver_id, content });
        return res.status(201).json({ status: "success", message: "Message sent" });
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
}

async function getChatHistory(req, res) {
    const { task_id } = req.params;
    try {
        const messages = await Message.findAll({
            where: { task_id: task_id },
            order: [['createdAt', 'ASC']]
        });
        return res.status(200).json({ status: "success", data: messages });
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
}

// REQ-05: Rating and Review Management (Process 4.0) [cite: 32, 192]
async function submitReview(req, res) {
    const { task_id, reviewer_id, rating, comment } = req.body;
    if (!task_id || !rating) {
        return res.status(400).json({ status: "error", message: "Rating and Task ID required" });
    }
    try {
        await Review.create({ task_id, reviewer_id, rating, comment });
        return res.status(201).json({ status: "success", message: "Review submitted" });
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
}

module.exports = { 
    registerUser, 
    loginUser,
    createTask, 
    getNearbyTasks, 
    acceptTask,
    sendMessage, 
    submitReview,
    getChatHistory  
};