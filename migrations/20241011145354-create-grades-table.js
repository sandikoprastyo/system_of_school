// migrations/XXXX-create-grades-table.js
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Grades', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            student_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                // references: {
                //     model: 'Students',
                //     key: 'id',
                // },
            },
            course_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                // references: {
                //     model: 'Courses',
                //     key: 'id',
                // },
            },
            grade: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            date: {
                type: Sequelize.DATE,
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
        await queryInterface.dropTable('Grades');
    }
};
