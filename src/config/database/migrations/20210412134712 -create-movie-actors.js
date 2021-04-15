"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "movie_actors",
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
        actor_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: "actors", key: "id" },
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
    queryInterface.dropTable("movie_actors")
  }
};
