// This is my JS for the TFL journey planner


// My variables

var getDepPC;
var getArrPC;

//This is to use for my switch conditional 

var choiceOption; 


// End Of Varaibles



// User Experience to better help them navigate and use the app

document.getElementById("depPC").focus();

document.getElementById("googleMap").style.display = "none";

// Event Listeners

var getJourneyData = document.getElementById("mySubmit").addEventListener("click", loadMyData, false);

function loadMyData () {
    
    // I will go and get the values of the postcodes from the users
    
    getDepPC = document.getElementById("depPC").value;
    getArrPC = document.getElementById("arrPC").value;
    
    //console.log(getArrPC);
    //console.log(getDepPC);
    
    if(getDepPC === "") {
        
        document.getElementById("depPC").focus();
        document.getElementById("messageD").innerHTML = "Please enter a valid postcode";
        
        
    } else if (getArrPC ==="") {
        
        document.getElementById("arrPC").focus();
        document.getElementById("messageA").innerHTML = "Please enter a valid postcode";
    
    } else {
        
        var myRequest = new XMLHttpRequest;
        
        myRequest.open("GET", "https://api.tfl.gov.uk/journey/journeyresults/"+getDepPC+"/to/"+getArrPC, true);
        
        myRequest.onload = function() {
            
            if(myRequest.readyState == 4 && myRequest.status == 200) {
                
                var myData = JSON.parse(myRequest.responseText);
                
                switch (choiceOption) {
                        
                        case(1): 
                        
                        // JS notation to get the data
                    
                        
                        break;
                        
                        case(2);
                        
                        
                        break;
                        
                        
                        default:
                        
                        
                        break;
                        
                }
                
                
                //console.log(myData);
            }
        }
        
        myRequest.send();
    }
    
}
    
