items = ["about", "work", "resume", "contact"]
document.getElementById("aboutbutton").addEventListener("click", about);
document.getElementById("workbutton").addEventListener("click", work);
document.getElementById("resumebutton").addEventListener("click", resume);
document.getElementById("contactbutton").addEventListener("click", contact);
let previousItem;

function about(){
    document.getElementById("about").style.display="block";
    let newItems = items.filter(function(i) {
        return i != "about"
    });
    for(i = 0; i< newItems.length; i++){
        document.getElementById(newItems[i]).style.display="none";
    }
}

function work(){
    document.getElementById("work").style.display="block";
    let newItems = items.filter(function(i) {
        return i != "work"
    });
    for(i = 0; i< newItems.length; i++){
        document.getElementById(newItems[i]).style.display="none";
    }
}

function resume(){
    document.getElementById("resume").style.display="block";
    let newItems = items.filter(function(i) {
        return i != "resume"
    });
    for(i = 0; i< newItems.length; i++){
        document.getElementById(newItems[i]).style.display="none";
    }
}

function contact(){
    document.getElementById("contact").style.display="block";
    let newItems = items.filter(function(i) {
        return i != "contact"
    });
    for(i = 0; i< newItems.length; i++){
        document.getElementById(newItems[i]).style.display="none";
    }
}
