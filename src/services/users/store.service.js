const { usersRepository } = require("../../repositories");

module.exports.store = async (options) => {
  console.log(options);

  const newUser = {
    email: options.email,
    name: options.name,
    password: options.password
  };

  const storedUser = await usersRepository.create(newUser);

  return storedUser;
};
