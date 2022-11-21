

//Creating the questions with the question, choices, and correct answer / each question is an object
var questions = [
    {
        question: "What is psudeocode?",
        options: ["notes", "one hundred", "six"],
        answer: "notes"
    },

    {
        question: "What is # related to in html?",
        options: ["id tag", "class", "two-hundered sixteen"],
        answer: "id tag"
    },

    {
        question: "Where can you do all the colorful addition to your site?",
        options: ["script.js", "css", "Oats"],
        answer: "css"
    },

    {
        question: "How do you do a NPM INSTALL?",
        options: ["npm i", "node npm start", "npm go"],
        answer: "npm i"
    },

    {
        question: "How many html pages can you have?",
        options: ["2", "As many as you like", "Just 1"],
        answer: "As many as you like"
    },

    {
        question: "What is localstorage meant for?",
        options: ["save stuff", "delete stuff", "join stuff"],
        answer: "save stuff"
    },

    {
        question: "What happens withought a README?",
        options: ["You fail", "Your code creates another page", "Vanilla"],
        answer: "You fail"
    },

    {
        question: "You should be adding a lot of ...?",
        options: ["comments", "commas", "css"],
        answer: "comments"
    },

    {
        question: "What is the first step to doing a git push?",
        options: ["git add .", "git commit -m ", "git push"],
        answer: "git add ."
    },

    {
        question: "What does !== mean?",
        options: ["equal to", "greater than", "not equal to"],
        answer: "not equal to"
    },

]



//variable for start button
const startButton = document.querySelector('#startButton');

//variable for the quiz section
const quizContainer = document.querySelector('#quizBox');

// variable for question section
var questionContainer = document.querySelector('#questionBox');

// variable for options -- begin with 0 as 1st choice
var option0 = document.querySelector('#option0');
var option1 = document.querySelector('#option1');
var option2 = document.querySelector('#option2');

// setting variable for questions array:
var questionStart = 0;

//Set the time countDown
var countDown = 59; 

//set area for timer 
var count = document.querySelector('#timer');

//question to be be displayed
var questionView = document.querySelector('#questionView');

//submit button for question
var submitQuestion = document.querySelector('.submitQuestion');

//get a response of write or wrong
var answerResult = document.querySelector('#answerResult');

//finishing box to appear
var finished = document.querySelector('#finished')

//Once finished with question need a score presented
var score = document.querySelector('#score');

//requirement of initials of quizzed person
var initials = document.querySelector('#initials')




// we need to set the questions to run with a specific function 
//Reference Day 3 Activity 25
function beginQuestions() {
    questionView.innerHTML = questions[questionStart].question;
    option0.textContent = questions[questionStart].options[0];
    option1.textContent = questions[questionStart].options[1];
    option2.textContent = questions[questionStart].options[2];

}


///The first thing is to get the questions to display. The user has started on the home page so they must be sent to the quiz page.

startButton.addEventListener("click", function () {
    quizContainer.style.display = "none";
    questionContainer.removeAttribute="block";
    questionContainer.style.display="block"
//This function will help you run the questions once 
    beginQuestions();

//REFERENCE UNIT 4 Activ. 10 Solved
var timeInterval = setInterval(function(){
//time left greater than one second
    if(countDown > 1) {
//labels to seconds remaining
        count.textContent = countDown + ' seconds remaining';
// decreasing the time by 1 second
        countDown--;
//if the time is == to 1 second it will label it second remaining
    } else if (countDown === 1) {
        count.textContent = countDown + ' second remaining';
        countDown--;
//One time is up it will present time over
    } else {
        count.textContent = 'Time Over!';
        clearInterval(timeInterval);
        endQuestions();
    }
}, 1000);

});


//create a function for ending game which is ending the questions from populating and taking to next page

function endQuestions (event) {
//ends the countdown
    var stop = countDown;
//with the end there will be no more questions
    questionContainer.style.display = "No Questions";
    finished.style.display = "block";
//presents with score
    score.textContent = "You got a " + countDown + "!";
//clears the time
    clearInterval(timeInterval);
//stops the timer from running
    countDown = stop;
//this is the portion where the score should be presnented and the initials should be taken of player.

}

//this function is taking the name and score and putting it into Score()
function Score() {
    var Name = {
        name: initials,
        score: countDown
    };


    console.log(Name);
}

//next step is to add a local storage where I am getting the information, setting the information, and then doing a post.

// if (nextTag === true) {
//     var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
//     if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
//       alert("please enter a valid tag");
//     } else {
//       var secondTag = document.createElement(secondTagName);
//       secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName + ".";
//       document.body.appendChild(secondTag);
//     }
//   }

//refer to day 1 activity 7  (use above as example)
//getting into the question array and comparing the options to the correct answer
function gradeQuestion (answer) {
    answerResult.style.display = "block";
//if the option selected is equal to the answer and there is still time remaining then display a message.
if ((questions[questionStart].answer === questions[questionStart].options[answer]) && (countDown >=0)) {answerResult.textContent = "Correct Response";
//this function will take the answer and options and compare. When it is not equal to each other and there is time left, then the message of incorrect response will display

}else if ((questions[questionStart].answer !== questions[questionStart].options[answer]) && (countDown >=10)){answerResult.textContent = "Incorrect Response";
countDown -=10;

//this function is to respond when the answer is incorrect and there is no time left.
}else if ((questions[questionStart].answer !== questions[questionStart].options[answer]) && (countDown <=10)){answerResult.textContent = "Incorrect Response";
countDown = 0;
}
//increment the question
questionStart++;

// if the question start is less than the number of questions in the array then go to next quetion otherwise end the game
//Unit 4 day 1 activ. 10
if(questionStart >= questions.length) {
    endQuestions();
    clearInterval(timeInterval);
}else {
    beginQuestions();
}


}


//setting the check function to run through each option and selection to grade it which means each option runs through and matches if its right or wrong
function check0() {gradeQuestion(0);}
option0.addEventListener("click", check0)

function check1() {gradeQuestion(1);}
option1.addEventListener("click", check1)

function check2() {gradeQuestion(2);}
option2.addEventListener("click", check2)

submitButton.addEventListener("click", Score);