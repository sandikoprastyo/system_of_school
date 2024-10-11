'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Schedules', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            class_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                // references: {
                //     model: 'Classes',
                //     key: 'id',
                // },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            course_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                // references: {
                //     model: 'Course',
                //     key: 'id',
                // },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            day: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            time_start: {
                type: Sequelize.TIME,
                allowNull: false,
            },
            time_end: {
                type: Sequelize.TIME,
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
        await queryInterface.dropTable('Schedules');
    }
};
