//ALWAYS EVENT LISTENER AT THE TOP    
var event1 = document.getElementById("button1"); 
event1.addEventListener('click',theGuess, false);
var result = "";
//ALWAYS HAVE THE randomNum OUTSIDE the function as the function always makes a new activity and so the number renews every time.
var randomNum = Math.floor((Math.random() * 10) + 1);

//Trying to define a name for the count
var countClicks = 0;

//assuming the guess count needs it's own function
function onClick()
{
    countClicks += 1;
    document.getElementById("showCount").innerHTML = countClicks;
}

//on to the clicking guess function
function theGuess()
{
//USERINPUT1 CONVERT IN JS TO A NUMBER VALUE
var userinput1 = parseInt(document.getElementById("input1").value);
    
//Declaring a variable as a random number, translating the "floor" ensuring a rounded down integar. the formula at the tail of the equation is ((Math.random() a * b) + c) which means the range is a to b and + c to ensure the random number stays within the chosen bounds.



if (userinput1 > randomNum)
{
    document.getElementById("demo").innerHTML = "Go lower"
}
else if (userinput1 < randomNum)
{
    document.getElementById("demo").innerHTML = "Go higher"
}
else if (userinput1 === randomNum)
{
    document.getElementById("demo").innerHTML = "You got it!"    
}
else 
{
    window.alert  ("needs to be a number between 1 and 10, what don't you get?")
}

}