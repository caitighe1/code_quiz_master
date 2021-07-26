//global variables for keeping track of time and questions

var currentQuestion = 0;
var time = (questions.length) * 15;
var timerID;
var score = 0;

//grabbing all DOM elements
var navbarEl = document.getElementById("navbar");
var highScoresEl = document.getElementById("highScores");
var timerEl = document.getElementById("timer");
var mainEl = document.querySelector("main");
var headerEl = document.getElementById("title")
var rulesEl = document.getElementById("rules");
var startBtnEl = document.getElementById("startBtn");
var questiondivEl = document.querySelector("quiz");
var questionTitleEl = document.getElementById("questionTitle");
var choicesEl = document.getElementById("choices");
var answerDiv = document.getElementById("answerDiv");
var answerEl = document.getElementById("result");
var scoreDivEl = document.getElementById("scoreDiv");
var finalResultEl = document.getElementById("finalResult");
var finalScoreEl = document.getElementById("finalScore");
var enterInfoEl = document.getElementById("enterInfo");
var finalSubmit = document.getElementById("finalSubmit");


//function to start quiz
function startQuiz() {
    //hide main div
    mainEl.setAttribute("class", "hide");
    
    //call for questions
    startQuiz.setAttribute("class", "show");
    
    //start timer
    timerId = setInterval(timer, 1000);

    //show start time
    timerEl.textContent = time;

    getQuestions();
}


//to start quiz
startBtnEl.onclick = startQuiz;


