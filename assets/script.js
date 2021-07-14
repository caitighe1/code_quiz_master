//global variables for keeping track of time and questions

var currentQuestion = 0;
var time = (questions.length) * 15;
var timerID;
var score = 0;

//grabbing all DOM elements
var timerEl = document.getElementById("timer");
var scoresEl = document.getElementById("scores");
var startEl = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var scoreEl = document.getElementById("score");




