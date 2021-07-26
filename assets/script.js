//global variables for keeping track of time and questions

var currentQuestionIndex = 0;
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
    quiz.setAttribute("class", "show");
    
    //start timer
    timerId = setInterval(tick, 1000);

    //show start time
    timerEl.textContent = time;

    getQuestions();
}

//timer function
function tick() {
    //update time
    time--;
    timerEl.textContent = time;

    //if user runs out of time
    if (time <=0) {
        quizEnd();
    }
}

//grab questions from array
function getQuestion() {
    //grab current question
    var currentQuestion = questions[currentQuestionIndex];

    //update title with current question
    var questionTitleEl = document.getElementById("questionTitle"); 
    questionTitleEl.textContent = currentQuestion.title;

    //clears old choices
    choicesEl.innerHTML = "";

    //loop over choices
    currentQuestion.choices.forEach(function(choice, i) {
        //create button for new choices
        var choiceBtns = document.createElement("button");
        choiceBtns.setAttribute("class", "choices");
        choiceBtns.setAttribute("value", choice);

        choiceBtns.textContent = i + 1 + "." + choice;

        //add event listener to buttons
        choiceBtns.onclick = questionClick;

        //display on page
        choicesEl.appendChild(choiceBtns);
    });
}


//to start quiz
startBtnEl.onclick = startQuiz;


