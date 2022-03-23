//Create variables for ID elements in html doc
var questionEl = document.getElementById('question');
var answerAEl = document.getElementById('answerA');
var answerBEl = document.getElementById('answerB');
var answerCEl = document.getElementById('answerC');
var answerDEl = document.getElementById('answerD');
var answerInput = document.getElementById('userInitials').value;
var score = 0;
var storedHighScore = localStorage.getItem('highScore', score);
var storedInitials = localStorage.getItem('userInitials', answerInput.value);

var questions = [

    {
        question: "JavaScript is a ___ -side programming language.",
        answerA: "Both",
        answerB: "Client",
        answerC: "Server",
        answerD: "None",
        correctAnswer: "A"
    },

    {
        question: "How do you find the minimum of x and y using JavaScript?",
        answerA: "min(x,y);",   
        answerB: " Math.min(xy)",
        answerC: "Math.min(x,y)",
        answerD: "min(xy);",
        correctAnswer: "C"
    },

    {
        question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
        answerA: "if(x = 2)",
        answerB: "if(x == 2)",
        answerC: " if(x != 2 )", 
        answerD: "if(x 2)",
        correctAnswer: "B"
    },
];


function startQuiz() {
    document.getElementById("start").setAttribute("class", "hide")
    document.getElementById("quizContainer")
    showNextQuestion();
    startTimer();   
}
    document.getElementById("start")
        .addEventListener("click", startQuiz)

function quizOver() {
    document.getElementById("inputSection").removeAttribute("class","hide");
    alert ("Quiz is Over!");
    if(score > storedHighScore) {
     localStorage.setItem('highScore', score);
     
     showHighScore();
     getInitials();
    }

}

var questionIndex = 0;
function showNextQuestion() {
    if(questionIndex >= questions.length) {
        quizOver();
    } else {
    
    questionEl.textContent = questions[questionIndex].question;
    answerAEl.textContent = questions[questionIndex].answerA;
    answerBEl.textContent = questions[questionIndex].answerB; 
    answerCEl.textContent = questions[questionIndex].answerC;
    answerDEl.textContent = questions[questionIndex].answerD;
    }
}

answerAEl.addEventListener("click", function (event) {
    event.preventDefault();

    if(questions[questionIndex].correctAnswer === "A") {
        alert("Correct!");
        calculateScore();
    } else {
        alert("Incorrect");
        timeRemaining -=10
    }

    questionIndex++;
    showNextQuestion();
})

answerBEl.addEventListener("click", function(event) {
    event.preventDefault();

    if(questions[questionIndex].correctAnswer === "B") {
        alert("Correct!");
        calculateScore();
    } else {
        alert("Incorrect");
        timeRemaining -=10
    }

    questionIndex++;
    showNextQuestion();
})

answerCEl.addEventListener("click", function(event){
    event.preventDefault();

    if(questions[questionIndex].correctAnswer === "C") {
        alert("Correct!");
        calculateScore();
    } else {
        alert("Incorrect");
        timeRemaining -=10
    }

    questionIndex++;
    showNextQuestion();
})

answerDEl.addEventListener("click", function(event){
    event.preventDefault();

    if(questions[questionIndex].correctAnswer === "D") {
        alert("Correct!");
        calculateScore();
    } else {
        alert("Incorrect");
        timeRemaining -=10;
    }
    console.log("Correct", score);

    questionIndex++;
    showNextQuestion();
})


var timeRemaining = 45;
function startTimer() {
    var timerInterval = setInterval(function () {
        timeRemaining--;

        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            quizOver();
        }

        document.getElementById('timer').textContent = timeRemaining;
    } ,1000);
}


function calculateScore() {
    score++;
    document.getElementById("scoreTotal").textContent = score;
}


function showHighScore() {
    var storedHighScore = localStorage.getItem('highScore');
    console.log(storedHighScore);
    document.getElementById('highScore').textContent = storedHighScore;
}

showHighScore();


function getInitials() {
    var answerInput = document.getElementById('userInitials').value;
    console.log(answerInput);
}

submitBtn.addEventListener("click", function(event) {
    event.preventDefault(); 
        getInitials();
        alert('Your initials have been submitted')
});
