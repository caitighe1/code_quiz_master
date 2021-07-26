//global variables for keeping track of time and questions

var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerID;


//grabbing all DOM elements
var timerEl = document.querySelector("#time");
var highScore = document.querySelector("#high-score");
var startBtn = document.querySelector("#startBtn");

var header = document.querySelector("#header");

var questionsEl = document.querySelector("#questionsDiv");
var questionTitle = document.querySelector("#question-title");
var choicesEl = document.querySelector("choices");

var answerDiv = document.querySelector("#answerDiv")

var feedbackEl = document.querySelector("#feedback");

//var scoreDivEl = document.querySelector("#scoreDiv");
//var finalScoreEl = document.querySelector("#final-score");
var finalSubmit = document.querySelector("final-submit")



//function to start quiz
function startQuiz() {
    //hide main div
    header.setAttribute("class", "hidden");
    startBtn.setAttribute("class", "hidden");
    //call for questions
    questionsDiv.setAttribute("class", "show");
    
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
    //var questionTitle = document.getElementById("questionTitle"); 
    questionTitle.textContent = currentQuestion.title;

    //clears old choices
    //choicesEl.innerHTML = "";

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
    if (this.value !== questions[currentQuestionIndex].answerEl) {
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
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAttribute("class", "hide");
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
    var scoreDivEl = document.querySelector("#scoreDiv");
    scoreDivEl.setAttribute("class", "show");

    //show final score
    var finalScoreEl = document.querySelector("#final-score");
    finalScoreEl.textContent = time;

    //hide questions
    questionsDiv.setAttribute("class", "hide");



}


//to start quiz
startBtn.onclick = startQuiz;


