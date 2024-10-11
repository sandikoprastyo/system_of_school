'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Exams', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            course_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                // references: {
                //     model: 'Course',
                //     key: 'id',
                // },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            exam_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            exam_type: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            updatedAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Exams');
    }
};
