//when doc ready
$(document).ready(function() {
	var a;
	var b;
	var compareHandler = function() {
		a = parseInt($("#a").val());
		b = parseInt($("#b").val());
		if (a > b) {
			console.log("a wins")
		} else if (b > a) {
			console.log("b wins")
		} else{
			console.log("equal")
		}
	};
	// compareHandler()
	$("#submit").click(compareHandler);


console.log("ready")
});

//when button is clicked

//is a less than b