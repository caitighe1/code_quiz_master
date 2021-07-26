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
var answerEl = document.querySelector("answer");

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

//function to progress the quiz

function questionClick() {
    // if user gets the question wrong
    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 15;

        if (time <= 0) {
            time = 0;
        }

        //display updated time on page
        timerEl.textContent = time;

        answerEl.textContent = "Wrong";
    } else {
        answerEl.textContent = "Correct!";
    }

    //time for results to show right or wrong
    answerEl.setAttribute("class", "answer");
    setTimeout(function() {
        answerEl.setAttribute("class", "answer hide");
    }, 1000);

    //move to next question
    currentQuestionIndex++;

    //make sure there are still questions
    if(currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

//function to end the quiz
function quizEnd() {
    // stop timer
    clearInterval(timerId);

    //show final screen
    var scoreDivEl = document.querySelector("endQuiz");
    scoreDivEl.setAttribute("class", "show");

    //show final score
    


}


//to start quiz
startBtnEl.onclick = startQuiz;


