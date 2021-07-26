//global variables for keeping track of time and questions

var currentQuestion = 0;
var time = (questions.length) * 15;
var timerID;
var score = 0;

//grabbing all DOM elements
var navbarEl = document.getElementById("navbar");
var highScoresEl = document.getElementById("highScores");
var timerEl = document.getElementById("timer");
var mainEl = document.getElementById("main");
var headerEl = document.getElementById("title")
var rulesEl = document.getElementById("rules");
var startEl = document.getElementById("start");
var questiondivEl = document.getElementById("questionDiv");
var questionTitleEl = document.getElementById("questionTitle");
var choicesEl = document.getElementById("choices");
var answerDiv = document.getElementById("answerDiv");
var answerEl = document.getElementById("result");
var scoreDivEl = document.getElementById("scoreDiv");
var finalResultEl = document.getElementById("finalResult");
var finalScoreEl = document.getElementById("finalScore");
var enterInfoEl = document.getElementById("enterInfo");
var finalSubmit = document.getElementById("finalSubmit");








