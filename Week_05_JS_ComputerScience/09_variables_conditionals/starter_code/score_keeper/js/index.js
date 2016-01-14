$(document).ready(function(){
	var score= 0 ;
	var add5 = function(){
		score +=5
	$("#result").html(score);
	}
	var add10 = function(){
		score +=10
	$("#result").html(score);
	}
	var sub1 = function(){
		score -=1
	$("#result").html(score);
	}
	var zero = function(){
		score = 0
	$("#result").html(score);
	}

	$("#add5").click(add5);
	$("#add10").click(add10);
	$("#sub1").click(sub1);
	$("#zero").click(zero);
});