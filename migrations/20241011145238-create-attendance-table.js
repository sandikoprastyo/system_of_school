// migrations/XXXX-create-attendance-table.js
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Attendance', {
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
            class_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                // references: {
                //     model: 'Classes',
                //     key: 'id',
                // },
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            status: {
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
        await queryInterface.dropTable('Attendance');
    }
};
