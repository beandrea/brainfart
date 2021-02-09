const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

// creating table for quiz
const QuizSchema = new Schema({
title: {
    type: String,
    required: true,
    trim: true
},
question: {
    type: String,
    required: true,
    trim: true
},
answers: {
    type: Array,
    required: true,
    trim: true
}
});

const quiz = mongoose.model("quiz", QuizSchema);

module.exports = quiz;