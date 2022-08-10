// Must have start button initiate the test
//  Timer must begin when start button is pressed

// A series of questions are asked
//  Incorrect answers reduce time remaining
//  Answers are stored and scored for later

// Test ends when all questions are answered OR time runs out

// Score is presented at the end of the game
//  Initials can be entered to accompany new score


let currentQuestion= 0;



const start= document.getElementById("startBtn");
start.addEventListener("click", beginTest);
// TIMER function goes here ***
function beginTest(){
    start.style.display = "none";
    renderQuestion();
    test.style.display= "block";
}

const test= document.getElementById("testContent");
const question= document.getElementById("testQuestion");
const choiceA= document.getElementById("A");
const choiceB= document.getElementById("B");
const choiceC= document.getElementById("C");
const score= document.getElementById("userScore");
const lastQuestion = question.length -1;



function renderQuestion(){
    let q = questions[currentQuestion];
    question.innerHTML = "<p>" +q.question+ "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;


}

function checkAnswer(answer){
    if(questions[currentQuestion].correct === answer){
        score++;
  }
  else {
    wrongAnswer();
  }
  if(currentQuestion < lastQuestion){
    count = 0;
    currentQuestion++;
    questionRender();
  }
  else {
    scoreRender(); //show score to user
  }
}



function scoreRender(){
    scoreContainer.style.display = "block";
    let scorePercent = Math.round(100 * score /questions.length);
    scoreContainer.innerHTML = "You scored " + scorePercent + "%."
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

let lasQuestion = questions.length - 1;

currentQuestion = 0;
renderQuestion()

currentQuestion++
renderQuestion()



