$(document).ready(function(){
//Put in price and hit enter//
var total = 0;

var formatCurrency = function(value){
	var returnValue = value.toFixed(2);
	return '$' + returnValue;
};

$("#entry").submit(function(event){
		event.preventDefault();

	var price = $("#newEntry").val();
		price= parseFloat(price);

	$("#entries").append('<tr><td></td><td>' + formatCurrency(price) + '</td></tr>');

		total += price;


$("#total").html(formatCurrency(total));
$("#newEntry").val('');

// }
		});

//Add price to receipt//

//total prices//
});