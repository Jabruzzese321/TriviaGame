$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$(".timer").html("<h3>" + this.time + " seconds remaining</h3>");
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
			if (countdownTimer.time >= 0) {
				$(".timer").html("<h3>" + countdownTimer.time + " seconds remaining</h3>");
			}
			else {
				index++;
				answerIncorrect();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};
var correct = 0;
var Incorrect = 0;
var q1 = {
	question : "To get over Richard, what did Monica start making?",
	possibleAnswers : ["A. Marmalade",
				 "B. Pancakes",
				 "C. Jam",
				 "D. Candy"],
	flags : [false, false, true, false],
	answer : "C. Jam"
};

var q2 = {
	question: "What was Incorrect with the couch Ross returned to the store?",
	possibleAnswers: ["A. The color was Incorrect",
				 "B. It was cut in half",
				 "C. It had a stain",
				 "D. It was torn"],
	flags : [false, true, false, false],
	answer : "B. It was cut in half"
};

var q3 = {
	question : "What was Phoebe in charge of at Rachel's surprise party?",
	possibleAnswers : ["A. Balloons and ice",
				 "B. Cups and ice",
				 "C. Cups and food",
				 "D. Ice and food"],
	flags : [false, true, false, false],
	answer : "B. Cups and ice"
};

var q4 = {
	question : "Who did Phoebe think would have very hairy children?",
	possibleAnswers : ["A. Janice and Ross",
				 "B. Chandler and Janice",
				 "C. Joey and Monica",
				 "D. Chandler and Monica"],
	flags : [true, false, false, false],
	answer : "A. Janice and Ross"
};

var q5 = {
	question : "Which of the girls did Joey mistakenly see in the shower?",
	possibleAnswers : ["A. Rachel",
				 "B. Monica",
				 "C. Phoebe",
				 "D. Carol"],
	flags : [false, true, false, false],
	answer : "B. Monica"
};

var q6 = {
	question : "How many lasagnas did Monica make for her aunt?",
	possibleAnswers : ["A. 12",
				 "B. 10",
				 "C. 14",
				 "D. 11"],
	flags : [true, false, false, false],
	answer : "A. 12"
};

var q7 = {
	question : "What does Rachel tell Ross he should name the cat he was buying with Julie?",
	possibleAnswers : ["A. Mark",
				 "B. Paolo",
				 "C. Michael",
				 "D. Joshua"],
	flags : [false, false, true, false],
	answer : "C. Michael"
};

var q8 = {
	question : "Which company did Joey owe $1,100 to?",
	possibleAnswers : ["A. Lucy's Abode",
				 "B. I Love Lucite",
				 "C. Lucy Loves Me",
				 "D. I love Larite"],
	flags : [false, true, false, false],
	answer : "B. I Love Lucite"
};

var q9 = {
	question : "What did Chandler get drunk on at Joey's birthday party?",
	possibleAnswers : ["A. Punch",
				 "B. Vodka",
				 "C. Wine",
				 "D. Jello shots"],
	flags : [false, false, false, true],
	answer : "D. Jello shots"
};

var q10 = {
	question : "What book did Joey keep in the freezer?",
	possibleAnswers : ["A. Curious George",
				  "B. The Shining",
				  "C. The Bible",
				  "D. Harry Potter"],
	flags : [false, true, false, false],
	answer : "B. The Shining"
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
}
function setup() {
	index = 0;
	$(".question").append("<button id='startButton'>Start</button>");
	$("#startButton").on("click", function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {


	$(".answerchoice").on("click", function() {
	  console.log("alert", index);
		index++;
		console.log("click", index);
		$(".question").text("");
		$("#buttonA").text("");
		$("#buttonB").text("");
		$("#buttonC").text("");
		$("#buttonD").text("");
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	console.log("Correct");
}

function answerIncorrect() {
	Incorrect++;
	console.log("Incorrect");
}

function showScore() {
	$(".question").empty();
	$(".question").append("<h2><p>" + correct + " correct</p></h2>");
	$(".question").append("<h2><p>" + Incorrect + " incorrect</p></h2>");
	countdownTimer.stop();
	$(".timer").empty();

}

setup();
$(".answerchoice").on("click", function() {
 console.log($(this));
 if(this.id == "buttonA") {
 	var answerChosen = "A";
 } else if(this.id == "buttonB") {
 	answerChosen = "B";
 } else if (this.id == "buttonC") {
 	answerChosen = "C";
 } else if (this.id == "buttonD") {
 	answerChosen = "D";
 } 
 if ((answerChosen == "A") && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == "A") {
 	answerIncorrect();
 }
 if ((answerChosen == "B") && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == "B") {
 	answerIncorrect();
 }
if ((answerChosen == "C") && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == "C") {
 	answerIncorrect();
 }
if ((answerChosen == "D") && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == "D") {
 	answerIncorrect();
 }

 $(".question").text("");
 $("#buttonA").text("");
 $("#buttonB").text("");
 $("#buttonC").text("");
 $("#buttonD").text("");
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});
});