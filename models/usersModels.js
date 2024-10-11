const { DataTypes } = require('sequelize');
const sequelize = require('../config/development');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'admin', // Default role can be 'user', 'admin', etc.
    },
}, {
    tableName: 'Users',
    timestamps: true,
});

module.exports = User;
