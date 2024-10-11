// models/Class.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Class = sequelize.define('Class', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    class_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    teacher_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Teachers',
            key: 'id',
        },
    },
}, {
    tableName: 'Classes',
    timestamps: true,
});

module.exports = Class;
