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
    Movie.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    //Movie.hasOne(models.Director, { foreignKey: "directorId", as: "director" })
    Movie.belongsToMany(models.Actor, { foreignKey: { name: "movie_id" }, through: "movie_actors", as: "actors" });
  }
  return Movie;
};
