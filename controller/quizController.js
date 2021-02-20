const db = require("../models/quiz");
const {default : axios} = require("axios");
BASEURL = "https://opentdb.com/api.php?amount=10&category="
BASEURL2 = "&difficulty=easy&type=multiple"

const quizUrl = {
    "science":"17",
    "history":"23",
    "compsci":"18",
    "mythology":"20",
    "sports":"21",
    "geography":"22",
};


module.exports = {
    //finding all quizes
    findQuiz: function (req, res) {
        let quizValue = quizUrl[req.params.search]
        axios.get(BASEURL+ quizValue + BASEURL2).then(data => {
            res.json(data.data.results)
        });
    },
    createQuiz: function (req, res) {
        db.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    findQuizById: function (req, res) {
        db.findById({_id:req.params.id})
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    findAll: function (req, res) {
        db.find()
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    updateQuiz: function(req, res){
        db.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}