// Get the container element
var btnContainer = document.getElementById("navbar");

//Get buttons
var btns = btnContainer.getElementsByTagName("a");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        console.log(current[0])
        current[0].className = "";
        this.className = "active";
    }
    );
}