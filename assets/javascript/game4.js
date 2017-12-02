$(document).ready(function() {
  //variables

  var wordList = ["horse", "pigs", "sheep", "barn", "tractor", "crops", "farmer", "field", "garden", "goats", "donkey", "fence", "cows", "dogs", "plows", "truck",];
  var wordCurrent = "";
  var lettersInWord = [];
  var usedGuess=[];
  var blanksAndSuccesses = [];
  var numBlanks = 0;
 

  //counters
  var wins=0;
  var losses=0;
  var guessCount=8;

  function startGame () {
    wordCurrent = wordList[Math.floor(Math.random()*wordList.length)];
    lettersInWord = wordCurrent.split("");
    numBlanks = lettersInWord.length;
   
    guessCount = 8
    usedGuess = [];
    blanksAndSuccesses = [];
    $("#word").html("??????");


    for(var i=0; i<numBlanks; i++){
      blanksAndSuccesses.push(" _ ");
    }

    $("#wordBlanks").html(blanksAndSuccesses);
    $("#numGuess").html(guessCount);
    $("#display2").empty();
  }


function checkLetters(letter){
    var isLetterInWord = false;
    

    for (var i=0; i<usedGuess.length; i++){
      if (letter===usedGuess[i]){
        var alreadyGuess=true;
        alert ("You have already guessed that letter.  Guess again.")
         $("#hidden").append(letter);
         $("#hidden").hide(); 
      }
    }
    for (var i=0; i<numBlanks; i++){
      if(wordCurrent[i]===letter) {
        isLetterInWord=true;
        
      }
    }


    if(isLetterInWord&&!alreadyGuess) {
        for (var i=0; i<numBlanks; i++){
          if(wordCurrent[i]===letter){
            blanksAndSuccesses[i]=letter;
          }
        }
    }

    if(!isLetterInWord&&!alreadyGuess) {
      usedGuess.push(letter);
      guessCount--;
      $("#numGuess").html(guessCount);
      $("#display2").append(letter);

    }

  }

  function roundComplete(){

    $("#wordBlanks").html(blanksAndSuccesses);

  
    if (lettersInWord.toString()==blanksAndSuccesses.toString()){
      wins++;
      $("#word").html(blanksAndSuccesses);
      $("#wins").html(wins);
      alert("YOU WON!  Click below for a new word.");
      
    }
 
    else if (guessCount===0) {
      alert("You lost!  Click below for a new word.");
     
    }
    else if(guessCount===1){
      alert("This is your last guess.  Choose wisely!")
    }
  }  

 
 $(document).keyup(function(){
    var userGuess = event.key; 
    console.log(userGuess);
    userGuess=userGuess.toLowerCase();
    checkLetters(userGuess);
    roundComplete();
          
  });

 $ ("#click-me") .on("click", function (){

   startGame();

 }); 

 startGame();  

});










