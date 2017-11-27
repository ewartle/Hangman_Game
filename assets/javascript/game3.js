$(document).ready(function() {
      
  var wins=0;
  var correctGuess=0;
  var guessCount=8;
  var usedWordsList =[];
  var usedGuess = [];
  
  var wordList = [ ["h", "o", "r", "s", "e"], ["p", "i", "g", "s"], ["g", "o", "a", "t", "s"], ["b", "a", "r", "n"], ["d", "o", "n", "k", "e", "y"], ["c", "o", "w", "s"], ["f", "i", "e", "l", "d"], ["t", "r", "u", "c", "k"], ["c", "r", "o", "p", "s"], ["g", "a", "r", "d", "e", "n"], ["p", "l", "o", "w"],
  ];

  var wordBlank = [ " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", ];
    
  var random = Math.floor((Math.random()*(wordList.length))); 
  var wordCurrent = wordList[random];
  console.log (wordCurrent);
  function remove(){
    var itemtoRemove = wordCurrent;
    wordList.splice($.inArray(itemtoRemove, wordList),1);
  };
 

    
  


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

  blank();

$("#click-me").on("click", function() {

  	remove();
    console.log(wordList);
    correctGuess=0;
    guessCount=8;
    $("#numGuess").html(guessCount);
    usedGuess = [];	
    $("#wrong").html(usedGuess);
    $("#word").html("???????");
    console.log(usedGuess);
	 random = Math.floor((Math.random()*(wordList.length)));

	wordCurrent = wordList[random];
	console.log(wordCurrent);
	blank();
	    
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
      
        for (var i = 0; i < wordCurrent.length; i++){
          if (userGuess===wordCurrent[i]){
            var yes = true; 
           } 
        }
        if (guessCount>0) {
          var count=true
        }

        for (var i=0; i<usedGuess.length; i++){
          if (userGuess===usedGuess[i]){
          var alreadyGuess = true
          }
        }

        if (yes&&!gameOn&&!alreadyGuess){
          $("#word").html("YOU WIN!!  Click on 'New Word'.");
          wins++;
          $("#wins").html(wins);
          
        }

        if(yes){
          if (!alreadyGuess&&count){
              correctGuess++;
              var pushGuess = function(){
              usedGuess.push(userGuess);
              }
              pushGuess();
              
             
              if (userGuess===wordCurrent[0]){
                $("#blank1").html(userGuess);
               }
             if (userGuess===wordCurrent[1]){
                $("#blank2").html(userGuess);
               }
             if (userGuess===wordCurrent[2]){
                $("#blank3").html(userGuess);
              }    
             if (userGuess===wordCurrent[3]){
                $("#blank4").html(userGuess);
              }  
             if (userGuess===wordCurrent[4]){
                $("#blank5").html(userGuess);
              }    
             if (userGuess===wordCurrent[5]){
                $("#blank6").html(userGuess);
              }   
            }
        }
          
        
        if (!yes&&!alreadyGuess&&count){
            guessCount--;
            var pushGuess = function(){
            usedGuess.push(userGuess);
            }
            pushGuess();
            $("#numGuess").html(guessCount);
            $("#wrong").append(userGuess + " ");
            }
       
        if (!yes&&!count&&!alreadyGuess){
            alert("Sorry, you lose. Please click on 'New Word'."); 
            $("#noPlace").append(userGuess);
            $("#noPlace").hide(); 
            guessCount=0;
            $("#numGuess").html(guessCount);
            }



        if (alreadyGuess){
                alert("You have already selected that letter, pick again.")
              }      
              
    });
  }
 
  match();

}); 


//what I need to fix:
	
	//figure out how to be able to add words with a letter that repeats itself and then make sure that the "win" function works
	












