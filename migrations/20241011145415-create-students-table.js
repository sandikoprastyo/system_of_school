// migrations/XXXX-create-students-table.js
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Students', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            birthdate: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            gender: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            class_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                // references: {
                //     model: 'Classes',
                //     key: 'id',
                // },
            },
            address: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            phone: {
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
        await queryInterface.dropTable('Students');
    }
};
