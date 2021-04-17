const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const { messages } = require("../../helpers");
const { constants } = require("../../utils");
const { usersRepository } = require("../../repositories");
const { promisify } = require("util");

module.exports.signup = async (email, name, password) => {
  const hasUser = await usersRepository.get({ email });

  if (hasUser) {
    throw {
      status: StatusCodes.CONFLICT,
      message: messages.alreadyExists('email'),
    };
  }

  const storedUser = await usersRepository.create({ email, name, password });

  const payload = {
    id: storedUser.id,
    email: storedUser.email,
  };

  const sign = promisify(jwt.sign);
  const token = await sign(payload, constants.jwtToken);

  return { storedUser, token };
};
