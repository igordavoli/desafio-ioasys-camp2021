"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "directors",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
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
          defaultValue: false,
          type: Sequelize.BOOLEAN,
        },
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("directors")
  }
};
