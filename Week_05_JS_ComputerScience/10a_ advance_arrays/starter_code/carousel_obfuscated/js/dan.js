$(document).ready(function(){

	var allImages=["images/food2.jpg","images/food3.jpg","images/food4.jpg","images/food5.jpg","images/food6.jpg","images/food7.jpg"];
	i=0;

	var votes = [];
	$("#your-vote").change(function(){

		votes.push($("#your-vote").val());
		console.log(votes);

	  	if(i < allImages.length){
		  	$("#image-to-vote-on").attr("src", allImages[i++]);
		  	$("#your-vote").prop('selectedIndex',0);

		  	var sum = 0;
				for(i = 0 ; i < votes.length; i++ ){
    			sum += parseInt( votes[i], 10 ); //don't forget to add the base
		}

			var avg = sum/votes.length;
			$("#answer").text("Your score is: " + avg);

		}


			
	});



});