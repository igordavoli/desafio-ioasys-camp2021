const { moviesRepository } = require("../../repositories");
const { fn, col } = require("sequelize");

module.exports.getById = async (id) => {
  const query = {};


  query.where = { id };
  query.include = [

    {
      association: 'actors',
      attributes: ['name'],
      through: { attributes: [] }
    },
    {
      association: 'directors',
      attributes: ['name'],
      through: { attributes: [] }
    },
    {
      association: 'grades',
      attributes: [
        'grade',
      ],
      group: ['Movie.id'],
      raw: true

    }
  ]

  const movie = await moviesRepository.get(query);

  const gradesSum = movie.grades.reduce((sum, grade) => sum + grade.grade, 0);

  averegeGrade = gradesSum / movie.grades.length

  console.log(averegeGrade)

  const movieDetails = {
    title: movie.title,
    gender: movie.gender,
    synopsis: movie.synopsis,
    directors: movie.directors,
    actors: movie.actors,
    averegeGrade,
  }

  return movieDetails;
};
