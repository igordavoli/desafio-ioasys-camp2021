const { Movie } = require("../models");

module.exports = {
  list: (query) => Movie.findAndCountAll(query),
  getById: (id) => Movie.findByPk(id),
  get: (query) => Movie.findOne(query),
  create: (params) => Movie.create(params),
  update: (movie) => movie.save(),
  destroy: (id) => Movie.destroy({ where: { id } }),
  addActors: (actor) => Movie.addActors(actor),
  addDirector: (director) => Movie.addDirectors(director),

};
