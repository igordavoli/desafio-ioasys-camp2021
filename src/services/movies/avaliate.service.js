const { moviesRepository, gradesRepository } = require("../../repositories");
const { messages } = require("../../helpers");
const { StatusCodes } = require("http-status-codes");

module.exports.avaliate = async (userId, id, grade) => {

  const movie = await moviesRepository.getById(id);

  console.log(id)

  if (!movie) {
    throw {
      status: StatusCodes.NOT_FOUND,
      message: messages.notFound("movie"),
    };
  }

  const hasGrade = await gradesRepository.get(
    {
      include: {
        association: 'user',
        where: { id: userId },
        attributes: ['id'],
      },
      include: {
        association: 'movie',
        where: { id: id },
        attributes: ['id'],
      }
    }
  );

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