const { Actor } = require("../models");

module.exports = {
  list: (query) => Actor.findAndCountAll(query),
  getById: (id) => Actor.findByPk(id),
  get: (params) => Actor.findOne({ where: params }),
  create: (params) => Actor.create(params),
  update: (actor) => actor.save(),
  destroy: (id) => Actor.destroy({ where: { id } }),
  findOrCreate: (actor) => Actor.findOrCreate({ where: { name: actor } })
};
