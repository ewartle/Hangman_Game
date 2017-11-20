$(document).ready(function() {

  var wins=0;
  var guessCount=12;
  var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

		// Clear Button
      	//$("#clear").on("click", function() {
        
        //$("#display").empty();



      $(document).keyup(function() {
        
        // Determines which key was pressed.
      var userGuess = event.key;

		if(userGuess==="h" || userGuess==="o" || userGuess==="r" || userGuess==="s" || userGuess==="e") {
          if (userGuess==="h") {
            //letter to appear in the correct place
            alert("Great job!  That letter is in the word.");
            $("#user-text1").html("<h1>h</h1>");
            }
          else if (userGuess==="o") {
            //letter to appear in the correct place
            alert("You go!");
            $("#user-text2").html("<h1>o</h1>");
            }
          else if (userGuess==="r") {
            //letter to appear in the correct place
            alert("Bravo!");
            $("#user-text3").html("<h1>r</h1>");
            }
          else if (userGuess==="s") {
            //letter to appear in the correct place
            alert("You are a genius!");
            $("#user-text4").html("<h1>r</h1>");
            }
          else if (userGuess==="e") {
            //letter to appear in the correct place
            alert("You are on fire!");
            $("#user-text5").html("<h1>e</h1>");
            }
        else {
	        alert("Oops!  That letter is not in the word.  Guess Again."); 
	        //reflects changing guess count 
	        guessCount--;
	        //shows the wrong guesses, but need to code so that it shows every wrong guess
	       	document.getElementById("missed1").innerHTML = userGuess;
	       	//reflects new guess count, but need to code so that does not double count wrong guesses
	       	document.getElementById("numGuess").innerHTML = guessCount;
           }

}
	


















