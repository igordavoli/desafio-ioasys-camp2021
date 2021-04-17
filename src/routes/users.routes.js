const router = require("express").Router();
const { usersController } = require("../controllers");
const { isAuthorized, isAdmin } = require("../middlewares");

router.get("/",
  isAuthorized,
  isAdmin,
  usersController.list
);


module.exports.users = router;
