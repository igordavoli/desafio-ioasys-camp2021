module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define(
    "Actor",
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
    { tableName: "actors", }
  );

  Actor.associate = function (models) {
    Actor.belongsToMany(models.Movie, { foreignKey: { name: "actor_id" }, through: "movie_actors", as: "movies" });
  }

  return Actor;
};
