const router = require("express").Router();
const quizController = require("../../controller/quizController");

router.route("/")
    .get(quizController.findAll)
    .post(quizController.createQuiz)

router.route("/:search")
    .get(quizController.findQuiz);

router.route("/find/:id")
    .get(quizController.findQuizById)
    .put(quizController.updateQuiz);


module.exports = router;