const { User, Task, Message, Review } = require('./models'); // Updated path

async function registerUser(req, res) {
    const { name, role, location } = req.body;
    if (!name || !role) {
        return res.status(400).json({ status: "error", message: "Missing data" });
    }
    try {
        const user = await User.create({ name, role, location });
        return res.status(201).json({ status: "success", user_id: user.id });
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
}

async function createTask(req, res) {
    const { poster_id, title, price } = req.body;
    if (!poster_id || !title || !price) {
        return res.status(400).json({ status: "error", message: "Missing required data" });
    }
    try {
        const task = await Task.create({ poster_id, title, price, status: "Open" });
        return res.status(201).json({ status: "success", message: "Task posted", task_id: task.id });
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
}

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

module.exports = { registerUser, createTask, getNearbyTasks };