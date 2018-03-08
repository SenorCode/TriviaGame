
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
	var correctAnswer = 0;
	var incorrectAnswer = 0;
	var unansweredQuestions;
	var correctAnswerIndex = randomQuestion.correctAnswer;
	

	$("#startButton").on('click', function(){

		$(this).hide()
		$("#title").hide();
		quizStart();
	});
		console.log(randomQuestion);

		//console.log(randomQuestion.question);
		//console.log(typeof randomQuestion.question);
		//console.log(randomQuestion.answers);
		//console.log(typeof randomQuestion.answers);
		//console.log(randomQuestion.answers[correctAnswerIndex]);
		//console.log(typeof randomQuestion.answers[correctAnswerIndex]);



	function quizStart() {
		buttontext = randomQuestion.answers;
		$("#question").html("<h2>" + randomQuestion.question + "</h2>");
		for(var i = 0; i < Questions.length; i++){
			var answerButtons = $("<button>" + buttontext[i] +"</button>").attr(
												{
													class: "btn btn-default btn-lg",
													type: "button",

											
												}).css("width", "350px");
				
			answerButtons.appendTo("#answers");
		}//end of for loop
		
		$(".btn").click( function() {
			
				var x= $(this).text();

				console.log(x);

				if(x === randomQuestion.answers[correctAnswerIndex]){
					correctAnswer++;
					newQuestion()


				}else {
					incorrectAnswer++;
					newQuestion()
				}

				
			
		})
			
	}// end of quizStart()

	function newQuestion(){}











});// end of ready function