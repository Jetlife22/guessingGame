//ALWAYS EVENT LISTENER AT THE TOP    
var event1 = document.getElementById("button1"); 
event1.addEventListener('click',myfirst, false);
var result = "";
function myfirst()
{
//USERINPUT1 CONVERT IN JS TO A NUMBER VALUE
var userinput1 = parseInt(document.getElementById("input1").value);

//Declaring a variable as a random number, translating the "floor" ensuring a rounded down integar. the formula at the tail of the equation is ((Math.random() a * b) + c) which means the range is a to b and + c to ensure the random number stays within the chosen bounds.
var randomNum = Math.floor((Math.random() * 10) + 1);

if (userinput1 > randomNum)
{
    result = "too high!";
}
else if (userinput1 < randomNum)
{
    result = "too low!";
}
else if (userinput1 === randomNum)
{
    result = "just right, well done! You guessed  "  + randomNum;    
}
else (){
    result = "what are you doing"
}
document.getElementById("demo").innerHTML = result();
}