/*====================================

 Name: Duane Walters
 Date: 04.03.2014
 Assignment: Goal 4: Assignment: Duel 3

 =====================================*/


//Self executing function
(function(){


//Button Events
    function disableButton(){
        document.querySelector(".buttonblue").disabled = true;
    }

    document.querySelector(".buttonblue").onclick = function(){
        fight();

    };

//Fighter arrays
    var fighters = [

        {name: "Good Guy",
            health: 100,
            damage: 20
        },

        {name: "Bad Guy",
            health: 100,
            damage: 20
        }
    ];
    var rounds = 1;


//DOM innerHTML for header section
    var topF1 = document.getElementById("kabal");
    topF1.innerHTML = fighters[0].name + " : " + fighters[0].health;

    var topF2 = document.getElementById("kratos");
    topF2.innerHTML = fighters[1].name + " : " + fighters[1].health;


//Fight Function
    function fight(){


        document.getElementById("round").innerHTML = "Round " + rounds + " is over";

//Determining Damage
        var minDamageP1 = fighters[0].damage * .5;
        var minDamageP2 = fighters[1].damage * .5;
        var f1 = Math.floor(Math.random() * (fighters[0].damage-minDamageP1)+minDamageP1);
        var f2 = Math.floor(Math.random() * (fighters[1].damage-minDamageP2)+minDamageP2);

//Inflicted Damage
        fighters[0].health -= f1;
        fighters[1].health -= f2;

        var topF1 = document.getElementById("kabal");
        topF1.innerHTML = fighters[0].name + " " + fighters[0].health;

        var topF2 = document.getElementById("kratos");
        topF2.innerHTML = fighters[1].name + " " + fighters[1].health;

//Check for Winner
        var results = winnerCheck();


        //console.log(results);
        if(results === "No winner"){
            rounds++;

        } else {

            document.querySelector("#round").innerHTML = "Game Over!";
            document.querySelector("#kabal").innerHTML = results;
            document.querySelector("#kratos").innerHTML = "";
            document.querySelector(".buttonblue").onclick = disableButton();
        }

    }

    function winnerCheck(){
        //console.log("In winner check function");

        var result="No winner";

        if(fighters[0].health < 0 && fighters[1].health < 0){
            result = "GAME OVER! YOU BOTH DIED";

        } else if(fighters[0].health < 1){
            result = "GAME OVER! " + fighters[1].name + " WINS!"

        }else if(fighters[1].health < 1){
            result = "GAME OVER! " + fighters[0].name + " WINS!"
        }

        return result;
    }
})();