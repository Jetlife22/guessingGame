//ALWAYS EVENT LISTENER AT THE TOP    
var event1 = document.getElementById("button1") 
event1.addEventListener('click',myfirst, false);

function myfirst(){
    //USERINPUT1 CONVERT IN JS TO A NUMBER VALUE
var userinput1 = parseInt(document.getElementById("input1").value);

if (userinput1 > userinput2) {
    document.getElementById("demo").innerHTML = userinput1;
}
else if (userinput1 === userinput2){
    window.alert("It's the same number!")
}
else {
    document.getElementById("demo").innerHTML = userinput2;
}
}