// migrations/XXXX-create-classes-table.js
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Classes', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            class_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            teacher_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                // references: {
                //     model: 'Teachers',
                //     key: 'id',
                // },
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
        await queryInterface.dropTable('Classes');
    }
};
