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

  const movieDetails = await moviesRepository.get(query);

  const gradesSum = movieDetails.grades.reduce((sum, grade) => sum + grade.grade, 0);

  averegeGrade = gradesSum / movieDetails.grades.length

  console.log(averegeGrade)

  return {
    movieDetails,
    averegeGrade,
  }
};
