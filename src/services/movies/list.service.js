const { moviesRepository } = require("../../repositories");

module.exports.list = async (options) => {
  const query = {};
  query.where = [];
  query.include = [];
  console.log(options.director)

  console.log(options.gender)
  if (options.title && options.title !== "") {
    query.where.push({ title: options.title });
  }

  if (options.gender && options.gender !== "") {
    query.where.push({ gender: options.gender });
  }

  if (options.director && options.director !== "") {
    query.include.push({
      association: 'directors',
      where: { name: options.director }
    }
    )
  }

  if (options.actor && options.actor !== "") {
    query.include.push({
      association: 'actors',
      where: { name: options.actor }
    })
  }

  query.attributes = ['title', 'synopsis', 'gender']

  const { count, rows } = await moviesRepository.list(query);

  return {
    metadata: {
      total: count,
    },
    data: rows,
  };
};
