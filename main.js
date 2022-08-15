// Must have start button initiate the test
//  Timer must begin when start button is pressed

// A series of questions are asked
//  Incorrect answers reduce time remaining
//  Answers are stored and scored for later

// Test ends when all questions are answered OR time runs out

// Score is presented at the end of the game
//  Initials can be entered to accompany new score


let currentQuestion = 0;
const start = document.getElementById("startBtn");
start.addEventListener("click", beginTest);
start.addEventListener("click", setTime);

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining.";

        if (secondsLeft <= 0) {
            // clearInterval(timerInterval);

            highScore();
        }
    }, 1000);
}

function beginTest() {

    start.style.display = "none";
    testContent.style.display = "block";
    renderQuestion();

    function setTime() {
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timeEl.textContent = secondsLeft + " seconds remaining.";

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                
                highScore();
            }
        }, 1000);
    }
}

var timeEl = document.querySelector("h2");
var secondsLeft = 15
const test = document.getElementById("testContent");
const question = document.getElementById("testQuestion");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
score = 0;

function renderQuestion() {
    let q = questions[currentQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

function checkAnswer(answer) {
    console.log(answer)
    console.log(questions[currentQuestion].correctChoice === answer)
    if (questions[currentQuestion].correctChoice === answer) {
        score++;
        currentQuestion++;
        
    }
    else {
        secondsLeft--;
        secondsLeft--;
        secondsLeft--;
        secondsLeft--;
        secondsLeft--;
        currentQuestion++;
    }

    if (currentQuestion <= lastQuestion) {
        renderQuestion();
    }
    else {
        scoreRender();
        highScore();
        
    }
}

function scoreRender() {
    userScore.style.display = "block";
    testContent.style.display = "none";
    timer.style.display = "none";
    let scorePercent = Math.round(100 * score / questions.length);
    userScore.innerHTML = "You scored: " + scorePercent + "%"
}

let questions = [

    {
        question: "What year was JavaScript first created?",
        choiceA: "1990",
        choiceB: "1995",
        choiceC: "2000",
        correctChoice: "B",
    },

    {
        question: "What extension is given to JavaScript files?",
        choiceA: ".css",
        choiceB: ".html",
        choiceC: ".js",
        correctChoice: "C",
    },

    {
        question: "A JavaScript function is invoked when it is _____ .",
        choiceA: "called",
        choiceB: "fetched",
        choiceC: "promoted",
        correctChoice: "A",
    },

    {
        question: "In JavaScript, \"const\" is shorthand for: ",
        choiceA: "conscript",
        choiceB: "consistency",
        choiceC: "constant",
        correctChoice: "C",
    },

    {
        question: "JavaScript typically uses ____ when declaring an array.",
        choiceA: "square brackets",
        choiceB: "curly brackets",
        choiceC: "parenthesis",
        correctChoice: "A",
    },

];


function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining.";

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            timer.style.display = "none";
            scoreRender();
            highScore();
            form.style.display= "block";
        }
    }, 1000);
}




let lastQuestion = questions.length - 1;

currentQuestion = 0;

renderQuestion()

form.style.display= "none";



