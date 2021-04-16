const { moviesRepository, directorsRepository, actorsRepository } = require("../../repositories");
const { messages } = require("../../helpers");
const { StatusCodes } = require("http-status-codes");

module.exports.store = async (options) => {

  const hasMovie = await moviesRepository.get({ title: options.title })

  if (hasMovie) {
    throw {
      status: StatusCodes.CONFLICT,
      messages: messages.alreadyExists('movie'),
    }
  }

  const newMovie = {
    title: options.title,
    gender: options.gender,
    synopsis: options.synopsis,
    userId: options.userId
  };

  const storedMovie = await moviesRepository.create(newMovie);

  options.directors.forEach((async directors => {
    const [storedDirector] = await directorsRepository.findOrCreate(directors);
    await storedMovie.addDirector(storedDirector);
  }))

  options.actors.forEach(async actors => {
    const [storedActors] = await actorsRepository.findOrCreate(actors);
    await storedMovie.addActor(storedActors);
  })

  return storedMovie;



};