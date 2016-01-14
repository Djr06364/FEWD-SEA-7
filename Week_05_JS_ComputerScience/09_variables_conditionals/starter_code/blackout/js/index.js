$(document).ready(function(){
		var lightsOn = true;
$("#light_switch").click(function() {
		if (lightsOn){
		$("body").removeClass("light");
		$("body").addClass("dark");
		lightsOn= false
	} else {
		$("body").removeClass("dark");
		$("body").addClass("light");
		lightsOn= true
	}
});

});

//if you click button

//turn off the light

