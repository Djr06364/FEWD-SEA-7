$(document).ready(function(){

	$("#enter").submit(function(event){
		event.preventDefault();

		var todo = $("#newEnter").val();

		$("#todoEntries").append('<li><span><input type="checkbox" class="completechex">' + todo + '</span></li>');

		$("#newEnter").val('');

		

	});
	$('#todoEntries').on("change", "input[type=checkbox]", function(){
		$(this).parents('li').toggleClass("completed");
	});

});
