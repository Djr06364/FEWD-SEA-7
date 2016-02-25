$(document).ready(function(){

	$("#enter").submit(function(event){
		event.preventDefault();

		var todo = $("#newEnter").val();

		$("#todoEntries").append('<li><span><div class="remove">x</div><input type="checkbox" class="completechex">' + todo + '</span></li>');

		$("#newEnter").val('');

		

	});
	$('#todoEntries').on("change", "input[type=checkbox]", function(){
		$(this).parents('li').toggleClass("completed");
	});

	var divs = document.getElementsByClassName('remove');
for(var i=0; i<divs.length; i++) { 
  divs[i].addEventListener('click', function() {      
      var li =  this.parentNode;
      this.parentNode.parentNode.removeChild(li)});
}
	


});
