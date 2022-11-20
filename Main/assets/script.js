

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

//Set the time countDown
var countDown = 59;

//variable for start button
const startButton = document.querySelector('#startButton');

//variable for the quiz section
const quizContainer = document.querySelector('#quizContainer');

// variable for question section
var questionContainer = document.querySelector('#questionContainer');


// variable for options -- begin with 0 as 1st choice

