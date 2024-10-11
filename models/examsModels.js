const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Exam = sequelize.define(
  'Exam',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Course',
        key: 'id',
      },
    },
    exam_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    exam_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'Exams',
    timestamps: true,
  },
);

Exam.associate = (models) => {
  Exam.belongsTo(models.Course, { foreignKey: 'course_id' });
};

module.exports = Exam;
