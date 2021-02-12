const router = require("express").Router();
const userController = require("../../controller/userController");

// Matches with "/api/user"

router.route("/")
//   .get(userController.findAll)
  .post(userController.createUser);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(userController.findById)
//   .put(userController.update)
//   .delete(userController.remove);

module.exports = router;
