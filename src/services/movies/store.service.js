const { moviesRepository } = require("../../repositories");
const { messages } = require("../../helpers");
const { StatusCodes } = require("http-status-codes");

module.exports.store = async (options) => {

  const hasMovie = await moviesRepository.get({ title: options.title })

  if (hasMovie) {
    throw {
      status: StatusCodes.CONFLICT,
      messages: messages.alreadyExists('movie')
    }
  }

  const newMovie = {
    title: options.title,
    //directors: options.director,
    gender: options.gender,
    synopsis: options.synopsis,
    // actors: options.actors,
    userId: options.userId
  };

  const storedMovie = await moviesRepository.create(newMovie);

  return storedMovie;



};