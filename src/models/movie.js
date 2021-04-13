
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "Movie",
    {
      title: DataTypes.STRING,
      gender: DataTypes.STRING,
      synopsis: DataTypes.STRING,
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
    {
      tableName: "movies",
    }
  );

  // User.beforeSave(async (user, options) => {
  //   const password = await encryptor.hashPassword(user.password);
  //   if (user.changed("password")) {
  //     Object.assign(user, { password });
  //   }
  //   return user;
  // });

  // User.prototype.toJSON = function () {
  //   const user = { ...this.get() };
  //   return Object.fromEntries(
  //     Object.entries(user).filter(([key]) => !["password"].includes(key))
  //   );
  // };

  return Movie;
};
