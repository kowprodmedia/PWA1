/*====================================

Name: Duane Walters
Date: 04.03.2014
Assignment: Goal 2: Assignment: Duel 2

=====================================*/

//Self-executing function
(function(){



//console log start
console.log("FIGHT");
console.log("Spiderman & Batman");

//Player variables
		//var player1Name = "Spiderman"; //OLD CODING <----------
		//var player2Name = "Batman"; //OLD CODING <----------

var fighterOne = ["Spiderman", "20", "100"];
var fighterTwo = ["Batman", "20", "100"];

	//Damage variables

		//var player1Damage = 20; //OLD CODING <----------
		//var player2Damage = 20; //OLD CODING <----------

	//Player health

		//var player1Health = 100; //OLD CODING <----------
		//var player2Health = 100; //OLD CODING <----------

//Start rounds
var round = 0;

//On "OK" button click main functionality is started in a loop
function fight(){
	if (fighterOne[2] == fighterTwo[2]){
	console.log("Game Begins... Battle!", fighterOne[2], fighterTwo[2])
	}
	
	//Pop-up display
	alert(fighterOne[0]+":"+fighterOne[2]+" *BEGIN* "+fighterTwo[0]+":"+fighterTwo[2]);
	
	//Loop for 10 rounds
	for (var i = 0; i < 10; i++)
	{
	
		//Randomizing damage
		var minDamage1 = fighterOne[1] * .5;
		var minDamage2 = fighterTwo[1] * .5;
		var f1 = Math.floor(Math.random()*(fighterOne[1]-minDamage1)+minDamage1);
		var f2 = Math.floor(Math.random()*(fighterTwo[1]-minDamage2)+minDamage2);
		
		//Inflicted damage on players
		fighterOne[2]-=f1;
		fighterTwo[2]-=f2;
		
		//Player health progress
		console.log(fighterOne[0]+":"+fighterOne[2]+" "+fighterTwo[0]+":"+fighterTwo[2]);
		
		//Check winner
		var result = winnerCheck();
		console.log(result);
		
		//Winner from "winnerCheck"? Increment rounds.
		if (result === "no winner")
		{
			round++;
			alert(fighterOne[0]+":"+fighterOne[2]+" *ROUND "+round+" OVER"+" * "+fighterTwo[0]+":"+fighterTwo[2]);
			
		} else{
			alert(result); //shows winner
		}
	}

}

// "winnerCheck is checking for winner
		// Health for both players < 1, they both die //OLD CODING <----------
		// Player with healt > 1 wins. //OLD CODING <----------

function winnerCheck(){
console.log("in winnerCheck FN");
	var result = "no winner";
	if (fighterOne[2] < 1 && fighterTwo[2] < 1)
	{
		result = "YOU BOTH DIE!";
	} else if(fighterOne[2] < 1){
		result = fighterTwo[0]+ " IS THE VICTOR!!"
	}else if (fighterTwo[2] < 1)
	{
		result = fighterOne[0]+ " IS THE VICTOR!!"
	};
	return result;
};

	//Invocation
	fight();
	
	
})();