// models/Attendance.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Attendance = sequelize.define('Attendance', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Students',
            key: 'id',
        },
    },
    class_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Classes',
            key: 'id',
        },
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'Attendance',
    timestamps: true,
});

module.exports = Attendance;
