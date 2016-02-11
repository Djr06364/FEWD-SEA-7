$(document).ready(function() {

$("#city-type").on('change',function() {
	var City = $(this).val();
	$("body").removeClass().addClass(City);
	// if (City === "LA"){
	// 	$("body").addClass("la");
	});
});






// });