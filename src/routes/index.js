const { auth } = require("./auth.routes");
const { users } = require("./users.routes");
const { movies } = require("./movies.routes");

module.exports = {
  auth,
  users,
  movies,

};
