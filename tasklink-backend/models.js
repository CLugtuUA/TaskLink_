const { DataTypes } = require('sequelize');
const sequelize = require('./config/database'); 

const User = sequelize.define('User', {
    name: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false }, 
    location: { type: DataTypes.STRING, allowNull: false }
});

const Task = sequelize.define('Task', {
    title: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: 'Open' }
});

const Message = sequelize.define('Message', {
    content: { type: DataTypes.TEXT, allowNull: false }
});

const Review = sequelize.define('Review', {
    rating: { type: DataTypes.INTEGER, allowNull: false },
    comment: { type: DataTypes.TEXT, allowNull: false }
});

// Relationships
User.hasMany(Task, { foreignKey: 'poster_id' });
Task.belongsTo(User, { foreignKey: 'poster_id' });
User.hasMany(Message, { foreignKey: 'sender_id', as: 'SentMessages' });
User.hasMany(Message, { foreignKey: 'receiver_id', as: 'ReceivedMessages' });
Task.hasMany(Review, { foreignKey: 'task_id' });
Review.belongsTo(User, { foreignKey: 'reviewer_id' });

module.exports = { User, Task, Message, Review, sequelize };