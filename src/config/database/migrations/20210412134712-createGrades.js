'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'grades',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        grade: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('grades')
  }
};
