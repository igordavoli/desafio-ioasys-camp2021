'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        title: "",
        gender: "",
        synopsis: "",

        created_at: new Date(),
        updated_at: new Date(),
      }
    ]
    )
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        name: "Administrador",
        email: "admin@ioasys.com",
        password:
          "$2y$08$EEDkHQR4jJiCprUHUZXlHeuK3h5Hb27Lcufd5kbev/tnrjxCBZNUm",
        is_admin: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};

