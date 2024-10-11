'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Check database connection
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// Dynamically load all model files in the current directory
fs
    .readdirSync(__dirname)
    .filter(file => {
        return (
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js' &&
            file.indexOf('.test.js') === -1
        );
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

// Define associations between models
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

// Define associations here explicitly
const { Student, Teacher, Course, Class, Grade, Attendance } = db;

Student.belongsTo(Class, { foreignKey: 'id' });
Teacher.hasMany(Course, { foreignKey: 'id' });
Course.belongsTo(Teacher, { foreignKey: 'id' });
Class.belongsTo(Teacher, { foreignKey: 'id' });
Grade.belongsTo(Student, { foreignKey: 'id' });
Grade.belongsTo(Course, { foreignKey: 'id' });
Attendance.belongsTo(Student, { foreignKey: 'id' });
Attendance.belongsTo(Class, { foreignKey: 'id' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
