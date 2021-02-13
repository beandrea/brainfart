const db = require("../models/quiz");
const {default : axios} = require("axios");
BASEURL = "https://opentdb.com/api.php?amount=10&category="
BASEURL2 = "&difficulty=easy&type=multiple"

module.exports = {
    //finding all quizes
    findQuiz: function (req, res) {
        let quizValue = req.params.search
        axios.get(BASEURL+ quizValue + BASEURL2).then(data => {
            res.json(data.data.results)
        });
    }
    // //finding specific quiz
    // findById: function (req, res) {
    //     db.Quiz
    //         .findById(req.params.id)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err))
    // },
    // //creating duh?
    // create: function (req, res) {
    //     db.Quiz
    //         .create(req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    // //updating the quiz
    // update: function (req, res) {
    //     db.Quiz
    //         .findOneAndUpdate({ _id: req.params.id }, req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    // //freedom to remove quiz
    // remove: function (req, res) {
    //     db.Quiz
    //         .findById({ _id: req.params.id })
    //         .then(dbModel => dbModel.remove())
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // }
}