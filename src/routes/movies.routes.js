const router = require("express").Router();
const { moviesController } = require("../controllers")
const { isAuthorized, isAdmin } = require("../middlewares")

router.get('/', moviesController.list);
router.post('/addMovie', isAuthorized, isAdmin, moviesController.store);
router.put('/:movieId/avaliate', isAuthorized, moviesController.avaliate);

module.exports.movies = router;