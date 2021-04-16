const { Director } = require("../models");

module.exports = {
  list: (query) => Director.findAndCountAll(query),
  getById: (id) => Director.findByPk(id),
  get: (params) => Director.findOne({ where: params }),
  create: (params) => Director.create(params),
  update: (director) => director.save(),
  destroy: (id) => Director.destroy({ where: { id } }),
  findOrCreate: (director) => Director.findOrCreate({ where: { name: director } })
};
