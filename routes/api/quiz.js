const router = require("express").Router();
const quizController = require("../../controllers/quizController");

router.route("/:search").get(quizController.findAll);

//router.route(:/id)