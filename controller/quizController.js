const db = require("../models/quiz");
const {default : axios} = require("axios");

module.exports = {
    //finding all quizes
    findAll: function (req, res) {
        axios.get(`https://opentdb.com/api.php?amount=10&category=${req.params}&difficulty=easy&type=multiple`).then(data => {console.log(data.data)});
    },
    //finding specific quiz
    findById: function (req, res) {
        db.Quiz
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    //creating duh?
    create: function (req, res) {
        db.Quiz
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //updating the quiz
    update: function (req, res) {
        db.Quiz
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //freedom to remove quiz
    remove: function (req, res) {
        db.Quiz
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}