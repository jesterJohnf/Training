//This is my JS File

//alert("We are happy to to be linked");

//1. Variables and Data Types

//Number 
//String 
//Boolean
//Array
//Object



//var pass = true;
/*var cityName = "London"; //string

var busNumber = 16; // number

var shoppingList = ["Milk", "Sugar", 2, true]; //Array

var living = {
    cityName: "London",
    country: "UK" //Object
    }*/

/*var firN = 25;
var secN = "15";

console.log(secN + 2 + firN);*/

/*var myCar; //camel case
var MyCar; // partial
var my_Car; // underscore*/

// 2. Arrays

/*var jsF = []; // Array literal
var jsF = new Array(); // Array constructor

//JavaScript Arrays are number index based starting from zero

//JavaScript Objects are name index based

var jsF = ["jQuery", "nodeJs", "reactJS"];

//jsF[0] = "Java";

jsF.pop();*/

//console.log(jsF[7]);



// 3. Loops - for, while and foreach loops


/*for (var i = 0; i < 10; i++)
{

console.log(i);
}
/*var i - 0;

while (i <= 10) {

console.log(i);

i++;
}*/

// Do while loop

/*var i = 0;
do {
    
    
    console.log(i)
    
    i++;
    
    
}while(i <=10);*/


/*var myN = [23,75,2,9];
myN.reverse();
for (var i = 0; i < myN.length; i++)
    {
        console.log(myN[i]);
    }




if ( 6 == 6 || 4 != 3) {
    
    console.log("This is true);
                } else {
                
                console.log("This is false");
                
    
}*/



/*var car = "Ferrari"

switch(car) {
    
    case "Mercedes":
            alert("I hate this car");
            break;
            
        case "Ferrari":
            alert("I love this car");
            break;
            
        default:
            alert("None of above");
            break;

}*/

// 10. Functions 
// JavaScript function is a block of code designed to perform a particular task


/*var height = 5;
var width = 9;
// var total;

function area() {
    
    total = height * width;
    
    //console.log(total);
    
    return total; 
    

}

area();


console.log(total);*/



// alert("OK I am here now!")


// Anonymous functions are the one's without a name.


/*
window.onload = function() {
    
    
    alert("I have arrived");
    
}
*/


/*setTimeout(function() {
    
    alert("Why am I waiting!!!");
    
}, 1000);*/


// Assigning a function to a variable

/*var height = 5;
var width = 9;
var total;


var myArea = (function() {
    
      total = height * width;
    
      console.log(total);
    
      //return total; 

}());*/

//myArea();
//console.log(myArea());


// Parameters amd Arguments

/*function calcVolume(height, width, length) {
    
    
    return height * width * length;
}


var livingRoom = calcVolume(3, 7, 2);

var kitchen = calcVolume(4, 5, 6);

console.log(livingRoom);
console.log(kitchen);*/


// 11. Objects - An object is an unordered collection of key value pairs.

// Not good practice 


/*var student = new Object();

student.firstName = "Jester";
student.lastName = "Facunla";

//console.log(student.firstName);

var ages = new Array(23);

console.log(ages);*/


// Good Practice

/*var student = {
    
    firstName: "Jester",
    lastName: "Facunla",

    getFullName: function() {
        
        return this.firstName + " " + this.lastName;
        
    },
    
    address: {
    
        doorN: 115,
        street: "Saxon Road",
        postCode: "E3 5HJ"
            
}
    
    
};
    
console.log(student.address.doorN);*/


// JavaScript Object Oriented Programming

/*function Fruit (name, color, shape) {
    
    this.name = name;
    this.color = color;
    this.shape = shape;
    
    this.describe = function () {
        
        return "A " + this.name + " is the color " + this.color + " and the shape is " + this.shape;
    };
}

// Instance of the Class Fruit

var apple = new Fruit("Apple", "Red", "Round");
var melon = new Fruit("Melon", "Green", "Round");

console.log(melon.describe());*/


var Person = function(firstName, lastName) {
    
    this.firstName = firstName;
    this.lastName = lastName;
    
/*    this.getName = function(){
        
        return this.firstName + " " + this.lastName;
    };*/
}

Person.prototype.getName = function() {
        
        return this.firstName + " " + this.lastName;
    };

var thierry = new Person("Thierry", "Henry");
var dennis = new Person("Dennis", "Bergkamp");

//console.log(thierry.getName());

//console.log(Person.prototype);            
            
    

// Let's have a look at inheritance with OOP

var Employee = function(firstName, lastName, employeeId) {
     
    //this.firstName = firstName; // <--- This is not OOP
    //this.lastName = lastName;
    
    Person.call(this, firstName, lastName);
    
    this.employeeId = employeeId;
    
}

// By assigning a Employee prototype to the Person prototype we are overriding the EMPLOYEE CONSTRUCTOR with the PERSON CONSTRUCTOR 

Employee.prototype = Object.create(Person.prototype);

// What's the constructor all about then?

Employee.prototype.constructor = Employee;

var robert = new Employee("Robert", "Pires", 7);
var fredrik = new Employee("Fredrik", "Ljungberg", 8);
var patrick = new Employee("Patrick", "Vieira", 4);
var gilberto = new Employee("Gilberto", "Silva", 19);

console.log(gilberto.getName());






























