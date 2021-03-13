//Questions for the quiz

var questions = [
    {
        questionText: "Commonly used data types DO NOT include:",
        choices: ["Booleans", "Strings", "Alerts", "Numbers"],
        correctAnswer: "Booleans"
    },
    {
        questionText: "Inside which HTML element do we put JavaScript?",
        choices: ["<p>", "<href>", "<link>", "<script>"],
        correctAnswer: "<script>"
    },
    {
        questionText: "Where do you insert the JavaScript in the HTML document?",
        choices: ["Top of the head", "Top of the body", "Bottom of the head", "Bottom of the body"],
        correctAnswer: "Bottom of the body"
    },
    {
        questionText: "How do you comment out code in JavaScript",
        choices: ["cc", ",,", "//", "??"],
        correctAnswer: "//"
    },
    {
        questionText: "True or false, Java and JavaScript are the same thing.",
        choices: ["True", "Super true", "Always true", "False"],
        correctAnswer: "False"
    },
];

//Variables

var startBtn = document.querySelector(".btn-primary");
var startCard = document.getElementById("start-card");
var quizCard = document.getElementById("quiz-card");
var timeCard = document.getElementById("time-card");
var quizQuestion = document.getElementById("quiz-question");
var index = 0;
var timeEl = document.querySelector(".time");
var secondsLeft = 20;

//Code for hitting start button and starting the quiz

startBtn.addEventListener("click", function () {
    startCard.setAttribute("class", "hide");
    quizCard.removeAttribute("class", "hide");
    timeCard.removeAttribute("class", "hide");

    buildQuestionCard();
});

//Code for building the questions

function buildQuestionCard() {
    var choicesEl = document.querySelector(".choices")
    quizQuestion.textContent = questions[index].questionText;
    questions[index].choices.forEach(function (choice) {
        var button = document.createElement("button");
        button.textContent = choice;
        button.setAttribute("value", choice);
        button.onclick = evaluateAnswer;
        choicesEl.appendChild(button);
    });
}

function evaluateAnswer() {
    var parent = document.querySelector(".choices");
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    console.log(this.value);
       index++;
    buildQuestionCard();
}

//Code controling the time

startBtn.addEventListener("click", function setTime() {
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = secondsLeft + " Seconds left until quiz ends.";

        if(secondsLeft === 0){
            clearInterval(timerInterval);
        }
    }, 1000);
});

setTime();