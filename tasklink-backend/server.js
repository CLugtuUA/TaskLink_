require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models'); 
const apiRoutes = require('./routes');     

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Mount the API routes
app.use('/api', apiRoutes);

// Sync database and start server
async function startServer() {
    try {
        await sequelize.sync({ alter: true }); 
        console.log("Database connected and synced.");
        app.listen(PORT, function() {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
    }
}

startServer();