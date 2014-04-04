/*====================================

Name: Duane Walters
Date: 04.03.2014
Assignment: Goal 1: Assignment: Duel 1

=====================================*/

//Self-executing function
(function(){



//console log start
console.log("FIGHT");
console.log("Spiderman & Batman");

//Player variables
var player1Name = "Spiderman";
var player2Name = "Batman";

//Damage variables

var player1Damage = 20;
var player2Damage = 20;

//Player health

var player1Health = 100;
var player2Health = 100;

//Start rounds
var round = 0;

//On "OK" button click main functionality is started in a loop
function fight(){
	if (player1Health == player2Health){
	console.log("Game Begins... Battle!", player1Health, player2Health)
	}
	
	//Pop-up display
	alert(player1Name+":"+player1Health+" *BEGIN* "+player2Name+":"+player2Health);
	
	//Loop for 10 rounds
	for (var i = 0; i < 10; i++)
	{
	
		//Randomizing damage
		var minDamage1 = player1Damage * .5;
		var minDamage2 = player2Damage * .5;
		var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
		var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);
		
		//Inflicted damage on players
		player1Health-=f1;
		player2Health-=f2;
		
		//Player health progress
		console.log(player1Name+":"+player1Health+" "+player2Name+":"+player2Health);
		
		//Check winner
		var result = winnerCheck();
		console.log(result);
		
		//Winner from "winnerCheck"? Increment rounds.
		if (result === "no winner")
		{
			round++;
			alert(player1Name+":"+player1Health+" *ROUND "+round+" OVER"+" * "+player2Name+":"+player2Health);
			
		} else{
			alert(result); //shows winner
		}
	}

}

// "winnerCheck is checking for winner
// Health for both players < 1, they both die
// Player with healt > 1 wins.

function winnerCheck(){
	var result = "no winner";
	if (player1Health < 1 && player2Health < 1)
	{
		result = "YOU BOTH DIE!";
	} else if(player1Health < 1){
		result = player2Name+ " IS THE VICTOR!!"
	}else if (player2Health < 1)
	{
		result = player1Name+ " IS THE VICTOR!!"
	};
	return result;
};

	//Invocation
	fight();
	
	
})();