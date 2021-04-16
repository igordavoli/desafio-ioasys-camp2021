"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "movie_directors",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        movie_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: "movies", key: "id" },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        director_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: "directors", key: "id" },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("movie_directors")
  }
};
