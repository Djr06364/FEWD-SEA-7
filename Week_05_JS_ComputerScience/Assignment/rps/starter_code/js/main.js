$(document).ready(function(){

var i = 1

function getComputerPlay() {

  var plays = ["rock", "paper", "scissors"];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;

}
	$("#rock, #paper, #scissors").click(function(){
		var humanChoice = $(this).attr("id");
		var computerP = getComputerPlay();
		if (computerP === humanChoice){
			$("#winner").html("TIE GAME");
		}
		else if (computerP === "scissors" && humanChoice === "paper" || computerP === "paper" && humanChoice === "rock" || computerP === "rock" && humanChoice === "scissors"){
			$("#winner").html("COMPUTER WINS");
			$("#computerScore").html(i++);
		}
		else {
			$("#humanScore").html(i++);
		$("#winner").html("YOU WIN");
		}

	});


console.log(getComputerPlay());
console.log(humanChoice);


});


