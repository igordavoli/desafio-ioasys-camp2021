const router = require("express").Router();
const { moviesController } = require("../controllers")
const { isAuthorized } = require("../middlewares")

router.get('/', moviesController.list)
router.post('/addMovie', isAuthorized, moviesController.store)

module.exports.movies = router;