const { moviesRepository, actorsRepository } = require("../../repositories");
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

  const [actors] = await actorsRepository.findOrCreate(options.actors)

  const newMovie = {
    title: options.title,
    gender: options.gender,
    synopsis: options.synopsis,
    userId: options.userId
  };

  const storedMovie = await moviesRepository.create(newMovie);

  await storedMovie.addActor(actors);

  return storedMovie;



};