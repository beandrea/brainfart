const router = require("express").Router();
const userController = require("../../controller/userController");

// Matches with "/api/user"

router.route("/")
  .post(userController.createUser);

router.route("/:id").put(userController.createResult);

module.exports = router;
