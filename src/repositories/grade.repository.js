const { Grade } = require("../models");

module.exports = {
  list: (query) => Grade.findAndCountAll(query),
  findAll: (query) => Grade.findAll(query),
  getById: (id) => Grade.findByPk(id),
  get: (params) => Grade.findOne(params),
  create: (params) => Grade.create(params),
  update: (grade) => grade.save(),
  destroy: (id) => Grade.destroy({ where: { id } }),
  findOrCreate: (grade) => Grade.findOrCreate({ where: { name: grade } })
};
