const router = require("express").Router();
const { moviesController } = require("../controllers")
const { isAuthorized } = require("../middlewares")

router.get('/', moviesController.list)

module.exports.movies = router;