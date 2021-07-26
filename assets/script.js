//global variables for keeping track of time and questions

var currentQuestionIndex = 0;
var time = (questions.length) * 15;
var timerID;
var score = 0;

//grabbing all DOM elements
var highScoresEl = document.getElementById("highScores");
var timerEl = document.getElementById("timer");
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("startBtn");
var questionDiv = document.getElementById("questionDiv");
var choicesEl = document.getElementById("choices");
var answerDiv = document.getElementById("answerDiv");
var finalResultEl = document.getElementById("finalResult");
var enterInfoEl = document.getElementById("enterInfo");
var finalSubmit = document.getElementById("finalSubmit");


//function to start quiz
function startQuiz() {
    //hide main div
    mainEl.setAttribute("class", "hide");
    
    //call for questions
    questionDiv.setAttribute("class", "show");
    
    //start timer
    timerId = setInterval(tick, 1000);

    //show start time
    timerEl.textContent = time;

    getQuestion();
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
    answerDiv.setAttribute("class", "answer");
    setTimeout(function() {
        answerDiv.setAttribute("class", "answer hide");
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
    var scoreDivEl = document.getElementById("scoreDiv");
    scoreDivEl.setAttribute("class", "show");

    //show final score
    var finalScoreEl = document.getElementById("finalScore");
    finalScoreEl.textContent = time;

    //hide questions
    quiz.setAttribute("class", "hide");



}


//to start quiz
startBtn.onclick = startQuiz;


