//Create variables for ID elements in html doc

var questions = [

    {
        question: "What is my name?",
        answerA: "Ashley",
        answerB: "Krystle",
        answerC: "Ashallan",
        answerD: "Cynthia",
    },

    {
        question: "What is my son's name?",
        answerA: "Cole",   
        answerB: "Kyle",
        answerC: "Brody",
        answerD: "Mason",
    },

    {
        question: "what kind of dog do I want?",
        answerA: "Husky",
        answerB: "Australian Shepherd",
        answerC: "German Shepherd", 
        answerD: "Poodle",
    },
];

var questionIndex = 0;
var questionEl = document.getElementById('question');
var answerAEl = document.getElementById('answerA');

function showQuestion() {
    document.getElementById('question').textContent = questions[0].question;
    document.getElementById('answerA').textContent = questions[0].answerA;
    document.getElementById('answerB').textContent = questions[0].answerB; 
    document.getElementById('answerC').textContent = questions[0].answerC;
    document.getElementById('answerD').textContent = questions[0].answerD;
}
showQuestion();



