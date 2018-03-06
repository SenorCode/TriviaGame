
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
			Questions: "Who is the king of the jungle?",
			answers: ["A Monkey", "A Wolf", "A Lion"],
			correctAnswer: 2
		}];

	var selection = Questions[Math.floor(Math.random()*3)];

	var time = 10;

	
	console.log(Questions);	
	console.log(selection);
	








	function questionDiv() {
	$("<div/>", 
	{
	    'id': 'question',

	 
	}).appendTo(".jumbotron");
	}







});// end of ready function