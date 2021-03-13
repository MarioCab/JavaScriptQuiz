const startButton = document.getElementById('start-btn')
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-buttons')
var timeEl = document.querySelector(".time")
var secondsLeft = 20
var timeCard = document.getElementById("time-card")


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)


var welcomeMessage = document.getElementById('welcomeStart')

function startGame(){
    console.log('started')
    startButton.classList.add('hide')
    welcomeMessage.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetstate()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}

function resetstate(){
    while(answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild
        (answerButtonsEl.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}




function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}




const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: "Booleans", correct: true}, 
            { text: "Strings",correct: false}, 
            { text: "Alerts", correct: false},
            { text: "Numbers", correct: false},
        ]
    },
    
    {
        question: "Inside which HTML element do we put JavaScript?",
        answers: [
            { text: "<p>", correct: false},
            { text: "<h1>", correct: false},
            { text: "<script>", correct: true},
            { text: "<div>", correct: false}, 
            
        ]
    },
    
    {
        question: "Where do you insert the JavaScript in the HTML document?",
        answers: [
            { text: "Top of the head", correct: false},
            { text: "Bottom of the Head", correct: false},
            { text: "Top of the body", correct: false},
            { text: "bottom of the body", correct: true}, 
            
        ]
    },
    
    {
        question: "How do you comment out code in JavaScript?",
        answers: [
            { text: "??", correct: false},
            { text: "::", correct: false},
            { text: "//", correct: true},
            { text: "cc", correct: false}, 
            
        ]
    },
    
    {
        question: "True or false, Java and JavaScript are the same thing.",
        answers: [
            { text: "Yeah", correct: false},
            { text: "Oh yea", correct: false},
            { text: "Totally", correct: false},
            { text: "False", correct: true}, 
            
        ]
    },
]

startButton.addEventListener("click", function setTime() {
    timeEl.classList.remove('hide');
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = secondsLeft + " Seconds left until quiz ends.";

        if(secondsLeft === 0){
            clearInterval(timerInterval);
        }
    }, 1000);
});

setTime();