const { moviesRepository } = require("../../repositories");

module.exports.list = async (options) => {
  console.log(options);
  const query = {};

  if (options.title && options.title !== "") {
    query.where = { title: options.title };
  }

  const { count, rows } = await moviesRepository.list(query);

  return {
    metadata: {
      total: count,
    },
    data: rows,
  };
};
