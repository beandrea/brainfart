import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getQuiz: function (quizData){
        return axios.get(`api/quiz/${quizData}`);
    }
};