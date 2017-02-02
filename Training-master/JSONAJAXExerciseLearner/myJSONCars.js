// This is my JS for the luxury car practice

var mySurvey = document.getElementById("survey");

mySurvey.addEventListener("change", loadData, false);

var myManufacturer = document.getElementById("manufacturer");

myManufacturer.addEventListener("change", loadData, false);

function loadData() {
    
    var manufacturerStored = myManufacturer.options[myManufacturer.selectedIndex].value;
    
    //console.log(manufacturerStored);


// XMLHttpRequest is the main object to establish the communication between the server and the browser (AJAX)
    
var myRequest = new XMLHttpRequest;

// The open method receives 3 parameters 
myRequest.open("GET", "https://raw.githubusercontent.com/jesterJohnf/Training/master/JSONAJAXExerciseLearner/expensiveLuxuryCars.json", true);

// We need a condition to check if the data has arrived
    
myRequest.onload = function () {
    
    if (myRequest.readyState == 4 && myRequest.status == 200){
        
    
        // JSON.parse() method is the one that changes the JSON format of the data to a JavaScript object.
        
        var myData = JSON.parse(myRequest.responseText);
        
        //console.log(myData);
        
        if (manufacturerStored === "") {
            
            function clearAll() {
                
                var hideText = document.getElementsByClassName("data");
                for(var i = 0; i < hideText.length; i++) {
                    hideText[i].innerHTML = "";
                    
                }
            }
            
            clearAll();
            
            document.getElementById("messageAlert").innerHTML = "Please choose a car manufacturer to load data";
            
        } else {
            
            document.getElementById("manufacturerC").innerHTML = myData.data[manufacturerStored].manufacturer;
            
            document.getElementById("modelC").innerHTML = myData.data[manufacturerStored].model;
            
            document.getElementById("priceC").innerHTML = "£ " + myData.data[manufacturerStored].price;
            
            document.getElementById("descriptionC").innerHTML = myData.data[manufacturerStored].description;
            
            document.getElementById("videoC").innerHTML = '<iframe width="auto" height="auto" src="'+myData.data[manufacturerStored].video+'" framework="0" allowFullScreen></iframe>';
            
            document.getElementById("overallC").innerHTML = myData.data[manufacturerStored].quality[0].rating;
            
            document.getElementById("mechanicalC").innerHTML = myData.data[manufacturerStored].quality[1].rating;
            
            document.getElementById("powertrainC").innerHTML = myData.data[manufacturerStored].quality[2].rating;
            
            document.getElementById("bodyC").innerHTML = myData.data[manufacturerStored].quality[3].rating;
            
            document.getElementById("interiorC").innerHTML = myData.data[manufacturerStored].quality[4].rating;
            
            document.getElementById("accessoriesC").innerHTML = myData.data[manufacturerStored].quality[5].rating;
            
            document.getElementById("imgC").innerHTML = '<img width="auto" height="auto" src="'+myData.data[manufacturerStored].img+'" alt="Car image">';
            
            document.getElementById("messageAlert").innerHTML = "";
            
            
            // We need to call and set a variable for our chart types
            
            var chartType = document.getElementById("survey").value;
            
            console.log(chartType);
            
            
            
            
            // This is my Canvas JS to display the ratings of the survey
            
            //window.onload = function () {
	        var chart = new CanvasJS.Chart("chartContainer", {
		    theme: "theme1",//theme1
            backgroundColor: "transparent",     
                
                
		   /* title:{
			text: "Quality Survey Score Of Vehicle"              
		    },*/
                
           dataPointMaxWidth: 20,
                axisX: {
                    labelFontColor: "white",
                    gridColor: "white",
                    lineColor: "white"
                    
                },
                axisY:{
                    labelFontColor: "white",
                    gridColor: "white",
                    gridThickness: 1,
                    lineColor: "white"
                
                
            },
                
                
		   animationEnabled: true,   // change to true
		   data: [              
		   {
               
               // The code below is for the doughnut labels color
               indexLabelFontColor: "black",
               indexLabelFontSize: "14",
               indexLabelFontWeight: "bold",
               
               
               
           // Change type to "bar", "doughnut", "line", "pie",etc.
               
           type: chartType,
           dataPoints: [
           { label: "Body",  y: myData.data[manufacturerStored].quality[3].rating  },
           { label: "Accessories", y: myData.data[manufacturerStored].quality[5].rating  },
           { label: "Interior", y: myData.data[manufacturerStored].quality[4].rating  },
           { label: "Powertrain",  y: myData.data[manufacturerStored].quality[2].rating  },
           { label: "Mechanical",  y: myData.data[manufacturerStored].quality[1].rating  },
           { label: "Overall",  y: myData.data[manufacturerStored].quality[0].rating  }
			           ]
		          }
		          ]
              });
	         chart.render();
//}
            
        }
        
    }
    
}
 
myRequest.onerror = function() {
    
    document.getElementById("messageAlert").innerHTML = "Unable to establish connection to the server, soz!";
}


myRequest.send();
    
    
//console.log(myRequest);
    
}