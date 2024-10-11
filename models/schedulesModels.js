const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Schedule = sequelize.define(
  'Schedule',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Classes',
        key: 'id',
      },
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Course',
        key: 'id',
      },
    },
    day: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time_start: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    time_end: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    tableName: 'Schedules',
    timestamps: true,
  },
);

Schedule.associate = (models) => {
  Schedule.belongsTo(models.Class, { foreignKey: 'class_id' });
  Schedule.belongsTo(models.Course, { foreignKey: 'course_id' });
};

module.exports = Schedule;
