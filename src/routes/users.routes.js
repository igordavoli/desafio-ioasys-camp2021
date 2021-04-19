const router = require("express").Router();
const { usersController } = require("../controllers");
const { isAuthorized, isAdmin } = require("../middlewares");

router.get("/", isAuthorized, isAdmin, usersController.list);
router.get("/:id", isAuthorized, usersController.account);
router.put("/:id", isAuthorized, usersController.update);
router.put("/:id/manage", isAuthorized, isAdmin, usersController.toAdmin);

module.exports.users = router;
