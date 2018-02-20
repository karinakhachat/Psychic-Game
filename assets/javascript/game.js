var LetterArr = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var Guess = 10;
var losses = 0;
var wins = 0;

//computer chooses random letter from the LetterArr array
var randomgen = LetterArr[Math.floor(Math.random()
     * LetterArr.length)];
//returns randomgen to the console
     console.log (randomgen)

     document.onkeyup = function() {
         var Guess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(Guess)

         if( Guess === randomgen){
             wins++;      
             document.getElementById("Wins").innerHTML = "Wins: " + wins;} 
         else { Guess--;
            document.getElementById("GuessLeft").innerHTML = "Guesses left: " + Guess;}

        if (guess = 0){
            losses++;
        document.getElementById("loss").innerHTML = "loss: " + losses;}
     
    
    
    
}