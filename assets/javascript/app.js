
$(document).ready(function () {	

	var Questions= [
		{
			question: "What is 2 + 2?",
			answers: ["4", "6", "8"],
			correctAnswer: 0

		},
		{
			question: " What is a fruit that monkeys typically eat?",
			answers : ["Bananas", "Oranges", "Apples"],
			correctAnswer: 0
		},
		{
			question: "Who is king of the jungle?",
			answers: ["A Monkey", "A Wolf", "A Lion"],
			correctAnswer: 2
		}];

	var randomQuestion = Questions[Math.floor(Math.random()*3)];
	var count = 0;
	var time = 10;
	var correctAnswer;
	var incorrectAnswer;
	var unansweredQuestions;
	console.log(randomQuestion);
$("#startButton").on('click', function(){

	$(this).hide()
		quizStart();
});
	

	function quizStart() {

	$("#question").html("<h2>" + randomQuestion.question + "</h2>").pop();

	
	
		
	}













});// end of ready function