// This is my JS for password exercise

var access = "Jester";

var i = 0;

var correctPassword = [];


document.getElementById("myButton").addEventListener("click", checkPassword, false);

function checkPassword() {
    
    var userPassword = document.getElementById("userP").value;
  
    if (userPassword === access && userPassword !== "") {
        
    alert("At least input something!");    
        
     } else if (userPassword === "") {
        
    alert("Good job, you have access");    
        
    }else {
        
        alert("That is incorrect");
        
        
        
    }
    
    
    
    //document.getElementById("myMessages").innerHTML = "Hooray, good job!";
       
       
       
       
       
       
       
       
       
       
       

console.log(userPassword);
    
//  alert("I am connected when you click me!!");
}

checkPassword();

