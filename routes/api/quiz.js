const router = require("express").Router();
const quizController = require("../../controller/quizController");

router.route("/:search")
    .get(quizController.findQuiz);

//router.route(:/id)

module.exports = router;