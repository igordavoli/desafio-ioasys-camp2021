const { moviesRepository, directorsRepository, actorsRepository } = require("../../repositories");
const { messages } = require("../../helpers");
const { StatusCodes } = require("http-status-codes");

module.exports.store = async (options) => {

  const hasMovie = await moviesRepository.get({ title: options.title })

  if (hasMovie) {
    throw {
      status: StatusCodes.CONFLICT,
      message: messages.alreadyExists('movie'),
    }
  }

  const newMovie = {
    title: options.title,
    gender: options.gender,
    synopsis: options.synopsis,
    userId: options.userId
  };

  const storedMovie = await moviesRepository.create(newMovie);

  options.directors.forEach((async director => {
    const [storedDirector] = await directorsRepository.findOrCreate(director);
    await storedMovie.addDirector(storedDirector);
  }))

  options.actors.forEach(async actor => {
    const [storedActor] = await actorsRepository.findOrCreate(actor);
    await storedMovie.addActor(storedActor);
  })

  return storedMovie;



};