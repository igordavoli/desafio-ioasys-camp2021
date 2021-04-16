module.exports = (sequelize, DataTypes) => {
  const Director = sequelize.define(
    "Director",
    {
      name: DataTypes.STRING,
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
    { tableName: "directors", }
  );

  Director.associate = function (models) {
    Director.belongsToMany(models.Movie, { foreignKey: { name: "director_id" }, through: "movie_directors", as: "movies" });
  }

  return Director;
};
