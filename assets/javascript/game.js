    function myFunction() {
  		alert("Thank you for playing the farm edition of hangman.  All words relate to things you may see or do on a farm.  To get started, pick a letter that you think may be in the word below.  Good luck and enjoy the Game!");
  	}

    
    var wins=0;
	var guessCount=12;
   
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) { 

      // Determines which key was pressed.
      var userGuess = event.key;

         
        if(userGuess==="h" || userGuess==="o" || userGuess==="r" || userGuess==="s" || userGuess==="e") {
          if (userGuess==="h") {
            //letter to appear in the correct place
            alert("Great job!  That letter is in the word.");
            document.getElementById("user-text1").innerHTML = userGuess;
            }
          else if (userGuess==="o") {
            //letter to appear in the correct place
            alert("You go!");
            document.getElementById("user-text2").innerHTML = userGuess;
            }
          else if (userGuess==="r") {
            //letter to appear in the correct place
            alert("Bravo!");
            document.getElementById("user-text3").innerHTML = userGuess;
            }
          else if (userGuess==="s") {
            //letter to appear in the correct place
            alert("You are a genius!");
            document.getElementById("user-text4").innerHTML = userGuess;
            }
          else if (userGuess==="e") {
            //letter to appear in the correct place
            alert("You are on fire!");
            document.getElementById("user-text5").innerHTML = userGuess;
            }

          //else if(userGuess==="p" ){
     		//wins++;
       		//document.getElementById("wins").innerHTML = wins;
       		//document.getElementById("word").innerHTML = "Horse";
        	//};
       }
           
        else {
	        alert("Oops!  That letter is not in the word.  Guess Again."); 
	        //reflects changing guess count 
	        guessCount--;
	        //shows the wrong guesses, but need to code so that it shows every wrong guess
	       	document.getElementById("missed1").innerHTML = userGuess;
	       	//reflects new guess count, but need to code so that does not double count wrong guesses
	       	document.getElementById("numGuess").innerHTML = guessCount;
            };
    }

    function myFunction2() {
  		console.log("click");
  		guessCount = 12;
  		document.getElementById("numGuess").innerHTML = guessCount;
  		document.getElementById("user-text1").innerHTML = " _ ";
  		document.getElementById("user-text2").innerHTML = " _ ";
  		document.getElementById("user-text3").innerHTML = " _ ";
  		document.getElementById("user-text4").innerHTML = " _ ";
  		document.getElementById("user-text5").innerHTML = " _ ";
  		document.getElementById("missed1").innerHTML = " ";
  		//document.getElementById("farm").innerHTML = src= "assets/images/farm.png" class="img-rounded" alt="image of farm" width=300 height=600>
  	} 



    // This function is run whenever the word is finished.