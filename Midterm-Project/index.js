days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
document.getElementById("sundaybutton").addEventListener("click", sunday);
document.getElementById("mondaybutton").addEventListener("click", monday);
document.getElementById("tuesdaybutton").addEventListener("click", tuesday);
document.getElementById("wednesdaybutton").addEventListener("click", wednesday);
document.getElementById("thursdaybutton").addEventListener("click", thursday);
document.getElementById("fridaybutton").addEventListener("click", friday);
document.getElementById("saturdaybutton").addEventListener("click", saturday);
let previousDay;

function sunday(){
    document.getElementById("sunday").style.display="block";
    // document.getElementById("monday").style.display="none";
    // document.getElementById("tuesday").style.display="none";
    // document.getElementById("wednesday").style.display="none";
    // document.getElementById("thursday").style.display="none";
    // document.getElementById("friday").style.display="none";
    // document.getElementById("saturday").style.display="none";
    let newDays = days.filter(function(i) {
        return i != "sunday"
    });  // https://davidwalsh.name/remove-item-array-javascript
    for(i = 0; i< newDays.length; i++){
        document.getElementById(newDays[i]).style.display="none";
    }
}
function monday(){
    document.getElementById("monday").style.display="block";
    let newDays = days.filter(function(i) {
        return i != "monday"
    });
    for(i = 0; i< newDays.length; i++){
        document.getElementById(newDays[i]).style.display="none";
    }
}
function tuesday(){
    document.getElementById("tuesday").style.display="block";
    let newDays = days.filter(function(i) {
        return i != "tuesday"
    });
    for(i = 0; i< newDays.length; i++){
        document.getElementById(newDays[i]).style.display="none";
    }
}
function wednesday(){
    document.getElementById("wednesday").style.display="block";
    let newDays = days.filter(function(i) {
        return i != "wednesday"
    });
    for(i = 0; i< newDays.length; i++){
        document.getElementById(newDays[i]).style.display="none";
    }
}
function thursday(){
    document.getElementById("thursday").style.display="block";
    let newDays = days.filter(function(i) {
        return i != "thursday"
    });
    for(i = 0; i< newDays.length; i++){
        document.getElementById(newDays[i]).style.display="none";
    }
}
function friday(){
    document.getElementById("friday").style.display="block";
    let newDays = days.filter(function(i) {
        return i != "friday"
    });
    for(i = 0; i< newDays.length; i++){
        document.getElementById(newDays[i]).style.display="none";
    }
}
function saturday(){
    document.getElementById("saturday").style.display="block";
    let newDays = days.filter(function(i) {
        return i != "saturday"
    });
    for(i = 0; i< newDays.length; i++){
        document.getElementById(newDays[i]).style.display="none";
    }
}
