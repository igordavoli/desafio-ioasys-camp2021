module.exports = (sequelize, DataTypes) => {
  const Grade = sequelize.define(
    "Grade",
    {
      grade: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
      },
      movieId: {
        type: DataTypes.INTEGER,
        field: "movie_id",
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
    { tableName: "movies_grades", }
  );
  Grade.associate = function (models) {
    Grade.belongsTo(models.Movie, { foreignKey: "movieId", as: "movie" });
    Grade.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  };
  return Grade;
};
