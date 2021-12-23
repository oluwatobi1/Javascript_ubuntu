var Question = function(question, options, answer) {
    this.question = question;
    this.options = options;
    this.answer = answer;
};

var firstQuestion = new Question("Who is the minister of education", {
        1: "Layiwola Lai Mohammed",
        2: "Mallam Adamu Adamu",
        3: "Babatunde Raji Fashola"
    },
    2)
var secondQuestion = new Question("Who is the minister of Agriculture", {
        1: "Layiwola Lai Mohammed",
        2: "Mallam Adamu Adamu",
        3: "Babatunde Raji Fashola"
    },
    2)
var thirdQuestion = new Question("Who is the minister of power", {
        1: "Layiwola Lai Mohammed",
        2: "Mallam Adamu Adamu",
        3: "Babatunde Raji Fashola"
    },
    3)

var questionList = [firstQuestion, secondQuestion, thirdQuestion]
var score = 0;




function game() {
    var questionNumber = Math.floor(Math.random() * 3);
    var currentQuestion = questionList[questionNumber];
    console.log(currentQuestion.question);
    console.log(currentQuestion.options);
    console.log("Your Score is ", score);
    var answer = prompt(currentQuestion.question);

    function increaseScore() {
        score = score++
    };
    if (answer === "exit") {
        return
    } else if (answer == currentQuestion.answer) {
        increaseScore()
        console.log("Your Score is ", score);
        console.log("|----------------|");
        game();
    } else {
        console.log("Wrong!");
        console.log("|----------------|");
        game();

    }
};
game();