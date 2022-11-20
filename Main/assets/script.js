

//Creating the questions with the question, choices, and correct answer / each question is an object
var questions = [
    {
        question: "What is five plus five?",
        options: ["ten", "one hundred", "six"],
        answer: "ten"
    },

    {
        question: "What is six times thirty-six?",
        options: ["seventy-two", "ninty-nine", "two-hundered sixteen"],
        answer: "two-hundred sixteen"
    },

    {
        question: "What is seven plus eight?",
        options: ["twenty", "fifteen", "Oats"],
        answer: "fifteen"
    },

    {
        question: "What goes in coffee?",
        options: ["Eggs", "Salt", "Sugar"],
        answer: "Sugar"
    },

    {
        question: "What is five hundred plus one?",
        options: ["five hundred one", "Oreo", "chocolate"],
        answer: "five hundred one"
    },

    {
        question: "What is ninty-nine minus three?",
        options: ["ninty-six", "seven", "ninty-one"],
        answer: "ninty-six"
    },

    {
        question: "What goes in brownies?",
        options: ["Chocolate", "Strawberry", "Vanilla"],
        answer: "Chocolate"
    },

    {
        question: "If you multiply a number by a zero what happens?",
        options: ["get a zero", "returns the same number", "gets you a negative number"],
        answer: "get a zero"
    },

    {
        question: "Brownies are what color?",
        options: ["Brown", "White", "Pink"],
        answer: "Brown"
    },

    {
        question: "Which is zero plus three hundred?",
        options: ["ninty-nine", "three hundred", "seven"],
        answer: "three hundred"
    },

]



//variable for start button
const startButton = document.querySelector('#startButton');

//variable for the quiz section
const quizContainer = document.querySelector('#quizContainer');

// variable for question section
var questionContainer = document.querySelector('#questionContainer');


// variable for options -- begin with 0 as 1st choice

var option0 = document.querySelector('#option0');
var option0 = document.querySelector('#option1');
var option0 = document.querySelector('#option2');

// setting variable for questions array:
var questionStart = 0;

//Set the time countDown
var countDown = 59; 

//set area for timer 
var timer = document.querySelector('#timer');

//question to be be displayed
var questionView = document.querySelector('#questionView');

//submit button for question
var submitQuestion = document.querySelector('.submitQuestion');

//get a response of write or wrong
var answerResult = document.querySelector('answerResult');

//Once finished with question need a score presented
var score = document.querySelector('#score');

//requirement of initials of quizzed person
var initials = document.querySelector('#initials')




///The first thing is to get the questions to display. The user has started on the home page so they must be sent to the quiz page.

startButton.addEventListener("click", function () {
    quizContainer.style.display = "none";
    questionContainer.removeAttribute("style");

//This function will help you run the questions once 
    beginQuestions();



})