const { moviesRepository, gradesRepository } = require("../../repositories");
const { messages } = require("../../helpers");
const { StatusCodes } = require("http-status-codes");

module.exports.avaliate = async (userId, id, grade) => {

  const movie = await moviesRepository.get({ id });

  if (!movie) {
    throw {
      status: StatusCodes.NOT_FOUND,
      message: messages.notFound("movie"),
    };
  }

  const hasGrade = await gradesRepository.get({
    userId,
    movieId: id,
  });

  if (hasGrade) {
    hasGrade.grade = grade;
    gradesRepository.update(hasGrade)

    return hasGrade;
  }

  const newGrade = {
    userId,
    movieId: movie.id,
    grade
  }

  const storedGrade = await gradesRepository.create(newGrade);

  await movie.addGrade(storedGrade);

  return storedGrade;
}