import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getQuiz: function(quizData) {
        return axios.get(`../api/quiz/${quizData}`);
    },
    submitQuiz: function(score, quizName, id) {
        axios.get(`../api/user/${id}`).then(res => {
            let user = res.data;

            if(user.userScores === undefined) {
                user.userScores = [{
                    "result": score,
                    "quizName": quizName
                }];
            }
            else {
                let scores = user.userScores;
                scores.push({
                    "result": score,
                    "quizName": quizName
                });
                user.userScores = scores;
            }
            
            axios.put(`../api/user/${id}`, user).then(res => {
                return res.data;
            });
        });
    },
    getQuizData: function (id) {
        axios.get(`../api/user/${id}`).then(res => {
            return res.data
        });
    },
    createQuiz: function(data) {
        axios.post(`../api/quiz/`, data).then(res => {});
    }
};