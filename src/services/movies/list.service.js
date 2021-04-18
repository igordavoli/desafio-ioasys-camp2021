const { moviesRepository } = require("../../repositories");

module.exports.list = async (options) => {
  const query = {};

  if (options.title && options.title !== "") {
    query.where = { title: options.title }
  }

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
      association: 'user',
      attributes: ['name'],
    },
    {
      association: 'grades',
      attributes: ['grade'],
    }
  ]

  const { count, rows } = await moviesRepository.list(query);

  const _rows = rows.map(movie => {
    const totalAvaiations = movie.grades.length;

    if (!totalAvaiations) {
      movie.averegeGrade = null
      return movie;
    }

    const gradesSum = movie.grades.reduce((sum, grade) => sum + grade.grade, 0);

    movie.averegeGrade = gradesSum / totalAvaiations;

    return movie;
  });

  return {
    metadata: {
      total: count,
    },
    data: _rows[0].averegeGrade,
  };
};
