//onEventListener EXTERNAL FUNCTION CALL
(function newTheme(){
    document.addEventListener("keyup", changeTheme);
})();

function changeTheme(event) {
    if (event.key == "w" || event.key == "W") {
               newLightTheme();
           }
           if (event.key == "b" || event.key == "B") {
               newDarkTheme();
           }
}

function newLightTheme() {
    el = document.getElementById("changeTheme");
    el.classList.remove("dark");
    el.classList.add("light");
}

function newDarkTheme() {
    el = document.getElementById("changeTheme");
    el.classList.remove("light");
    el.classList.add("dark");
}

(function explainExternalFunction() {
    document.getElementById("explainExternalFunction").innerText = `(function newTheme(){
    document.addEventListener("keyup", changeTheme);
})();

function changeTheme(event) {
    if (event.key == "w" || event.key == "W") {
               newLightTheme();
           }
           if (event.key == "b" || event.key == "B") {
               newDarkTheme();
           }
}

function newLightTheme() {
    el = document.getElementById("changeTheme");
    el.classList.remove("dark");
    el.classList.add("light");
}

function newDarkTheme() {
    el = document.getElementById("changeTheme");
    el.classList.remove("light");
    el.classList.add("dark");
}`
})();

//Remove Event Listener
document.getElementById("green").addEventListener("mousemove", myFunction);

function myFunction() {
    document.getElementById("random").innerHTML = Math.random();
}

function removeListener() {
    document.getElementById("green").removeEventListener("mousemove", myFunction);
}


(function explainRemoveListener() {
    document.getElementById("explainRemoveListener").innerText = `document.getElementById("green").addEventListener("mousemove", myFunction);

function myFunction() {
    document.getElementById("random").innerHTML = Math.random();
}

function removeListener() {
    document.getElementById("green").removeEventListener("mousemove", myFunction);
}`
})();

//DOMContentLoaded
(function contentLoaded() {
    document.getElementById("contentLoaded").innerText = `<head>
    
<script src="afterPageLoads.js"></script>

</head>

<body>
<p id="afterPageLoadsResult"></p>
</body>

//The script itself
document.addEventListener("DOMContentLoaded", function() {
    displayTime();
});

function displayTime() {
    let el = document.getElementById("time");
    let now = new Date();
    el.innerText = now;
}`
})();

//Rectify page loading after alert on functions page:
(function rectified() {
    document.getElementById("rectified").innerText = `document.addEventListener("DOMContentLoaded", function() {
    selfDeclaredAlert();
});

function selfDeclaredAlert() {
    //alert("Are you ready to learn about functions?");
    document.getElementById("selfDeclaredAlert").innerText = "(function selfDeclaredAlert() {
    alert("Are you ready to learn about functions?");
})();";
    setTimeout(function(){ alert("Are you ready to learn about functions?"); }, 1000);
}`
})();

