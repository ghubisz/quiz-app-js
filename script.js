const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", coorect: false},
            { text: "Blue whale", coorect:true},
            { text: "Elephant", coorect: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", corect: false},
            { text: "Blue whale", corect:true},
            { text: "Elephant", corect: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", corect: false},
            { text: "Gobi", corect:true},
            { text: "Sahara", corect: false},
            { text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", corect: false},
            { text: "Australia", corect:true},
            { text: "Arctic", corect: false},
            { text: "Africa", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}