const { Movie } = require("../models");

module.exports = {
  list: (query) => Movie.findAndCountAll(
    // query,
    {
      include: [{
        association: 'actors',
        attributes: ['name'],
        through: { attributes: [] }
      },
      {
        association: 'directors',
        attributes: ['name'],
        through: { attributes: [] }
      }
      ],
    }
  ),
  getById: (id) => Movie.findByPk(id),
  get: (params) => Movie.findOne({ where: params }),
  create: (params) => Movie.create(params),
  update: (movie) => movie.save(),
  destroy: (id) => Movie.destroy({ where: { id } }),
  addActors: (actor) => Movie.addActors(actor),
  addDirector: (director) => Movie.addDirectors(director),
};
