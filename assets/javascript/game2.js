

$(document).ready(function() {
      
    
  var wins=0;
  var correctGuess=0;
  var guessCount=8;
  var usedWordsList =[];
  var usedGuess = [];
  
  var wordList = [ ["h", "o", "r", "s", "e"], ["p", "i", "g", "s"], ["g", "o", "a", "t", "s"], ["b", "a", "r", "n"], ["d", "o", "n", "k", "e", "y"], ["c", "o", "w", "s"], ["f", "i", "e", "l", "d"], ["t", "r", "u", "c", "k"], ["c", "r", "o", "p", "s"], ["g", "a", "r", "d", "e", "n"], ["p", "l", "o", "w"],
  ];

      
  var wordBlank = [
             " _ ",
             " _ ",
             " _ ",
             " _ ",
             " _ ",
             " _ ",
           ];
    

    var random = Math.floor((Math.random()*(wordList.length))); 
    var wordCurrent = wordList[random];
    function pushWords(){
      usedWordsList.push(wordCurrent);
      console.log(usedWordsList);
    };
    pushWords();
    
    
    var blank = function(){
    
      if (wordCurrent.length===6){
        $("#wordBlanks").html("<span id='blank1'>" + wordBlank[0] + "</span>" + "<span id='blank2'>" +wordBlank[1] + "</span>" + "<span id='blank3'>" +wordBlank[2] + "</span>" + "<span id='blank4'>" +wordBlank[3] + "</span>" + "<span id='blank5'>" +wordBlank[4] + "</span>" + "<span id='blank6'>" +wordBlank[5] + "</span>");
      }
      else if (wordCurrent.length===5){
        $("#wordBlanks").html("<span id='blank1'>" + wordBlank[0] + "</span>" + "<span id='blank2'>" +wordBlank[1] + "</span>" + "<span id='blank3'>" +wordBlank[2] + "</span>" + "<span id='blank4'>" +wordBlank[3] + "</span>" + "<span id='blank5'>" +wordBlank[4] + "</span>");
        
      }
      else if (wordCurrent.length===4){
        $("#wordBlanks").html("<span id='blank1'>" + wordBlank[0] + "</span>" + "<span id='blank2'>" +wordBlank[1] + "</span>" + "<span id='blank3'>" +wordBlank[2] + "</span>" + "<span id='blank4'>" +wordBlank[3] + "</span>");
      }
    }
        
    
  $("#click-me").on("click", function() {
        
        alert("Thank you for playing the farm edition of hangman.  All words relate to things you may see on a farm.  To get started, click ok and pick a letter you think may be in the word.  Good luck and enjoy the Game!");
            
    console.log(wordCurrent);

    //blank ();
    
    });

    //this is the function that matches userguess to letters in the word and determines what happens in html.
  var match = function(){

    var userGuess = $(document).keyup(function(){
     
      var userGuess = event.key; 
      console.log(userGuess);
      userGuess=userGuess.toLowerCase();

      
      //this function allows me to track how many letters are left to be guessed and helps to trigger the win.
      if(correctGuess<wordCurrent.length-1){
        var gameOn = true;
        }
      


      //This function allows me to capture guesses that have already happened.  Will call function later.
     
      
     

      //this function helps determine whether the user guess is in the word.
      for (var i = 0; i < wordCurrent.length; i++){
        if(wordCurrent[i]===userGuess){
        var placeholder = true;
        }
      }
      //This function helps determine the number of blanks.
     // for (vari=0; i<wordCurrent.length; i++){ 
       // wordCurrent[i]=wordBlank[i];
        //console.log(wordBlank[i]);
      //$("#wordBlanks").append(wordBlank[i]);
     //}   

  

  
 

     //these if/else statements handles the treatment if the user guess is in the word.
      if(placeholder){

          if (userGuess===wordCurrent[0]){
            $("#blank1").html(userGuess);
            correctGuess++;
            function pushGuess(){
            usedGuess.push(userGuess);
            console.log(usedGuess);
            }
            pushGuess();
            if (gameOn){
            console.log(correctGuess);
            alert("Awesome!  You guessed a correct letter. Keep guessing!")
            }
            else {
              $("#word").html("YOU WIN!!  Hit Refresh.");
              wins++;
              $("#wins").html(wins);
            }
            
          } 
          else if (userGuess===wordCurrent[1]){
            $("#blank2").html(userGuess);
            correctGuess++;
            if (gameOn){
            console.log(correctGuess);
            alert("Awesome!  You guessed a correct letter. Keep guessing!")
            }
            else {
              $("#word").html("YOU WIN!!  Hit Refresh.");
              wins++;
              $("#wins").html(wins);
              
            }
            
          }
          else if (userGuess===wordCurrent[2]){
            $("#blank3").html(userGuess);
            correctGuess++;
            if (gameOn){
            console.log(correctGuess);
            alert("Awesome!  You guessed a correct letter. Keep guessing!")
            }
            else {
              $("#word").html("YOU WIN!!  Hit Refresh.");
              wins++;
              $("#wins").html(wins);
              
            }
            
          }
          else if (userGuess===wordCurrent[3]){
            $("#blank4").html(userGuess);
            correctGuess++;
            if (gameOn){
            console.log(correctGuess);
            alert("Awesome!  You guessed a correct letter. Keep guessing!");
            }
            else {
              $("#word").html("YOU WIN!!  Hit Refresh.");
              wins++;
              $("#wins").html(wins);
      
            }
            
          }
          else if (userGuess===wordCurrent[4]){
            $("#blank5").html(userGuess);
            correctGuess++;
            if (gameOn){
            console.log(correctGuess);
            alert("Awesome!  You guessed a correct letter. Keep guessing!")
            }
            else {
              $("#word").html("YOU WIN!!  Hit Refresh.");
              wins++;
              $("#wins").html(wins);
              
            }
            
          }
          
          else if (userGuess===wordCurrent[5]){
            $("#blank6").html(userGuess);
            correctGuess++;
            if (gameOn){
            console.log(correctGuess);
            alert("Awesome!  You guessed a correct letter. Keep guessing!")
            }
            else {
              $("#word").html("YOU WIN!! Hit Refresh.");
              wins++;
              $("#wins").html(wins);
              
            }
            
          }
      
      }
    
    //This statement dictates what happens when user guess is not in the word.  
        if (!placeholder){
          
          if(guessCount > 0) {
             
              alert("Oops!  That letter is not in the word.  Guess Again."); 
              guessCount--;
              $("#numGuess").html(guessCount);
              $("#wrong").append(userGuess + " ");
          }     
        //This code alerts when the guessCount is down to zero.                  
           else{
            alert("Sorry, you lose. Please hit your browser's refresh button and then click on 'Click Me'."); 
            $("#noPlace").append(userGuess);
            $("#noPlace").hide();
           }
        } 
    });
}

    
  
  //**The code below is me trying to come up with a reset.  I was not successful in this effort.  

  //$("#clear").on("click", function() {
                     
   // var guessCount=8;
   // $("#display2").empty();
   // $("#numGuess").html(guessCount);
   // $("#wins").html(wins);
    //$("#currentWord").empty();
    //usedWordsList.push(wordCurrent);
    //newWord();
    
  //}); 

  //var newWord = function(){
    //var generateNew = function(){
      //var random = Math.floor((Math.random()*(wordList.length)));
      //wordCurrent=wordList[random];
    //}
    //generateNew();
    //console.log(wordCurrent);
    //blank();    
    //match();
  //}
  match();

}); 
    












