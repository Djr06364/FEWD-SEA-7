// hint: You will need to look at the jQuery docs
// ready() https://api.jquery.com/ready/
// click() https://api.jquery.com/click/
// html() https://api.jquery.com/html/
// String concatenation used the plus symbol (+)
// You can mix variables with strings (text wrapped in quotes)

// add your functions here
$(document).ready(function(){

var i = 1
var u = 1

	$("#rock").click(function(){
		
		if (getComputerPlay() === "rock"){
		$("#winner").html("TIE GAME");
		$("#body").css("background-color","white");
		}

		else if (getComputerPlay() === "scissors"){
			$("#winner").html("HUMAN WINS");
			$("#humanScore").html(i++);
			$("#body").css("background-color","green");
		}

		else {	$("#computerScore").html(u++);
		$("#winner").html("COMPUTER WINS");
		$("#body").css("background-color","red");
		}

	});
	$("#scissors").click(function(){
		

	if (getComputerPlay() === "scissors"){
		$("#winner").html("TIE GAME");
		}

		else if (getComputerPlay() === "rock"){
			$("#winner").html("HUMAN WINS");
			$("#humanScore").html(i++);
		}

		else {	$("#computerScore").html(u++);
		$("#winner").html("COMPUTER WINS");
		}



	});
	$("#paper").click(function(){
		
	if (getComputerPlay() === "paper"){
		$("#winner").html("TIE GAME");
		}

		else if (getComputerPlay() === "rock"){
			$("#winner").html("HUMAN WINS");
			$("#humanScore").html(i++);
		}

		else {	$("#computerScore").html(u++);
		$("#winner").html("COMPUTER WINS");
		}


	});

function getComputerPlay() {

  var plays = ["rock", "paper", "scissors"];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;

}
console.log(getComputerPlay());


});


