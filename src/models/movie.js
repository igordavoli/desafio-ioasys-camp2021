const { static } = require("express");

module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "Movie",
    {
      title: DataTypes.STRING,
      gender: DataTypes.STRING,
      synopsis: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
      },
      totalVotes: {
        type: DataTypes.INTEGER,
        field: "total_votes"
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        field: "is_deleted",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },

    },
    { tableName: "movies", }
  );

  Movie.associate = function (models) {
    Movie.belongsTo(models.User, { foreignKey: 'userId', as: 'user' })
  }
  return Movie;
};
