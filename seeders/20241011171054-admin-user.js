'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const hashedPassword = await bcrypt.hash('admin', 10); // Hash the password

        await queryInterface.bulkInsert('Users', [{
            username: 'admin',
            role: 'admin',
            password: hashedPassword, // Store the hashed password
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Users', { username: 'admin' }, {});
    }
};
