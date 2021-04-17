const { StatusCodes } = require("http-status-codes");
const { messages } = require("../helpers");

module.exports = async (req, res, next) => {
  try {

    console.log(req.user)

    if (!req.user.isAdmin) {
      throw {
        status: StatusCodes.UNAUTHORIZED,
        message: messages.unauthorized
      }
    }

    return next();

  } catch (error) {
    console.error(error);
    return res.status(error.status).json(error.message);
  }
}