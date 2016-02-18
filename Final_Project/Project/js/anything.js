 $(document).ready(function(){


$("#submitbutton").click(function(){

var ApricotCrushScore = 0
var TwapScore = 0
var FightScore = 0
var BrokenRecordScore = 0
var ManifestDestinyScore = 0
var ParisOfTheWestScore = 0
var IvanTheTerribleScore = 0
var SkunkApeScore = 0
var BoysenImpPorterScore = 0
var UrbanFarmhouseScore = 0
var SplitShotScore = 0
var DBAscore = 0
var SimtraScore = 0
var AgedPaleAleScore = 0
var NitroWakeUpDeadScore = 0
var CitraIpaScore = 0
var ImpBreakfastPorterScore = 0
var RhubabrianScore = 0
var ApricotCiderScore = 0
var JackRoseScore = 0

 		var afterThreeValue = $("#afterthree").val();
 		var appealValue = $("#appeal").val();
 		var locationValue = $("#location").val();
 			if (afterThreeValue === "buzz"){
 				 ApricotCrushScore += 1
 				 CitraIpaScore += 1
 				 BrokenRecordScore += 1
 				 ManifestDestinyScore += 1
 				 RhubabrianScore += 1
 				 DBAscore += 1
 			}
 			else if (afterThreeValue === "drunk"){
 				FightScore += 1
 				TwapScore += 1
 				SkunkApeScore += 1
 				UrbanFarmhouseScore += 1
 				SplitShotScore += 1
 				AgedPaleAleScore += 1
 				ApricotCiderScore += 1
 			}
 			else{
 				ParisOfTheWestScore += 1
 				IvanTheTerribleScore += 1
 				BoysenImpPorterScore += 1
 				NitroWakeUpDeadScore += 1
 				ImpBreakfastPorterScore += 1
 				JackRoseScore += 1
 				SimtraScore += 1
 			}
 			if (locationValue === "seattle"){
 				 ApricotCrushScore += 1
 				 CitraIpaScore += 1
 				 SplitShotScore += 1
 				 ApricotCiderScore += 1
 			}
 			else if (locationValue === "pnw"){
 				BrokenRecordScore += 1
 				ManifestDestinyScore += 1
 				RhubabrianScore += 1
 				FightScore += 1
 				TwapScore += 1
 				SkunkApeScore += 1
 				ImpBreakfastPorterScore += 1
 				UrbanFarmhouseScore += 1
 				BoysenImpPorterScore += 1
 			}
 			else{
 				DBAscore += 1
 				AgedPaleAleScore += 1
 				ParisOfTheWestScore += 1
 				IvanTheTerribleScore += 1
 				NitroWakeUpDeadScore += 1
 				JackRoseScore += 1
 				SimtraScore += 1
 			}
 			if (appealValue === "hops"){
 				BrokenRecordScore += 1
 				CitraIpaScore += 1
 				SimtraScore += 1
 				ManifestDestinyScore += 1
 				SkunkApeScore += 1
 				TwapScore += 1
 			}
 			else if (appealValue === "fruit"){
 				JackRoseScore += 1
 				ApricotCrushScore += 1
 				ApricotCiderScore += 1
 				ParisOfTheWestScore += 1
 				RhubabrianScore += 1
 				FightScore += 1
 				UrbanFarmhouseScore += 1
 				AgedPaleAleScore += 1
 			}
 			else{
 				ImpBreakfastPorterScore += 1
 				BoysenImpPorterScore += 1
 				SplitShotScore += 1
 				DBAscore += 1
 				IvanTheTerribleScore += 1
 				NitroWakeUpDeadScore += 1
 			}
			
 			


var beerArray = [
 		{ name: "Citra", value: CitraIpaScore},
 		{ name: "DBA", value: DBAscore}
 		];

 	function custom_compare (a,b) {
  return a.value - b.value;
}
beerArray.sort(custom_compare).reverse();

for (var i=0;i<beerArray.length;i++) {
  console.log(beerArray[0].name);
}

 	
});

});


	// });
// (function(a, b){return b-a});  
