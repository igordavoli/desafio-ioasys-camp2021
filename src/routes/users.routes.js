const router = require("express").Router();
const { usersController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.get("/", isAuthorized, usersController.list);


module.exports.users = router;
