//global variables for keeping track of time and questions

var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerID;


//grabbing all DOM elements
var timeEl = document.querySelector("#time");
var startBtn = document.querySelector("#startButton");
var submitBtn = document.querySelector("#submit-button");
var titleScreen = document.querySelector("#title-section");
var quizScreen = document.querySelector("#quiz-section");
var highScoreScreen = document.querySelector("#highscore-section");
var highScoreDisplay = document.querySelector("#highscore-display-section");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");

var questionsEl = document.querySelector("question");
var choicesEl = document.querySelector("#choices");



//function to start quiz
function startQuiz() {
    //hide main div
    titleScreen.setAttribute("class", "hide");

   //call for questions
    quizScreen.setAttribute("class", "show");

    
    //start timer
    timerId = setInterval(tick, 1000);

    //show start time
    timeEl.textContent = time;

    getQuestion();
}

//timer function
function tick() {
    //update time
    time--;
    timeEl.textContent = time;

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
    var titleEl = document.getElementById("question-title");


    titleEl.textContent = currentQuestion.title;

    //clears old choices
    choicesEl.innerHTML = "";

    //loop over choices
    currentQuestion.choices.forEach(function(choice, i) {
        //create button for new choices
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);

        choiceNode.textContent = i + 1 + "." + choice;

        //add event listener to buttons
        choiceNode.onclick = questionClick;

        //display on page
        choicesEl.appendChild(choiceNode);
    });
}

//function to progress the quiz

function questionClick() {
    // if user gets the question wrong
    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 15;

        if (time < 0) {
            time = 0;
        }

        //display updated time on page
        timeEl.textContent = time;

        feedbackEl.textContent = "Wrong";
    } else {
        feedbackEl.textContent = "Correct!";
    }

    //time for results to show right or wrong
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide");
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
    var highScoreSectionEl = document.querySelector("#highscore-section");
    highScoreSectionEl.setAttribute("class", "show");

    //show final score
    var finalScoreEl = document.querySelector("#final-score");
    finalScoreEl.textContent = time;

    //hide questions
    quizScreen.setAttribute("class", "hide");

}

//save highscores
function saveHighscore() {
    //value of input
    var initials = initialsEl.value.trim();

    if(initials !== "") {
        var highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];

        //new score for new user
        var newScore = {
            score: time,
            intials: initials
        };

        //save to local storage
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        //redirect to new page
        window.location.href = "highScore.html";
    }
}

function checkForEnter(event) {
    if (event.key === "Enter") {
        saveHighscore();
    }
}



//event listeners
startBtn.onclick = startQuiz;
submitBtn.onclick = saveHighscore;

initialsEl.onkeyup = checkForEnter;


