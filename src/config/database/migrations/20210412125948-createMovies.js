'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'movies',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        director: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        gender: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        synopsis: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        total_votes: {
          allowNull: false,
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        is_deleted: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
          defaultValue: false,

        },
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("movies");
  }
};
