const user = require(user_routes);
const router = require("express").Router();
const userControl = require("../controller/userController");
const quizControl = require("../controller/quizController");

router.route("/api/get/:id").get(userControl.getUser);

