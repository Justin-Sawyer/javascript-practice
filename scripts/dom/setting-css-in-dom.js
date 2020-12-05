//Inline CSS from DOM
(function inlineCSS() {
    document.getElementById("inlineCSS").innerText = `document.getElementById("element").style.color = "#c13e70";`
})();

function switchToPhoto() {
    document.getElementById("img").src = "../assets/images/pictures/dogs1.png";
    document.getElementById("img").style.border = "2px solid gray";
    explain();
}

function switchToPainting() {
    document.getElementById("img").src = "../assets/images/pictures/dogs2.jpg";
    document.getElementById("img").style.border = "2px solid pink";
    explain();
}

function explain() {
    document.getElementById("explain").innerText = `<div class="img"><img id="img" width="80%"></div>

function switchToPhoto() {
    document.getElementById("img").src = "../assets/images/pictures/dogs1.png";
    document.getElementById("img").style.border = "2px solid gray";
    explain();
}

function switchToPainting() {
    document.getElementById("img").src = "../assets/images/pictures/dogs2.jpg";
    document.getElementById("img").style.border = "2px solid pink";
    explain();
}`;
}

//ClassList
(function timeDarkTheme() {
    let time = new Date().getHours();
    console.log(time);
    if (time > 18 || time < 4) {
    darkTheme();
    } else {
    lightTheme();
    }
})();

function lightTheme() {
    el = document.getElementById("changeTheme");
    el.classList.remove("dark");
    el.classList.add("light");
}

function darkTheme() {
    el = document.getElementById("changeTheme");
    el.classList.remove("light");
    el.classList.add("dark");
}

(function classListCSS() {
    document.getElementById("classListCSS").innerText = `<body class="light" id="changeTheme">
    
(function timeDarkTheme() {
    let time = new Date().getHours();
    console.log(time);
    if (time > 18 || time < 4) {
    darkTheme();
    } else {
    lightTheme();
    }
})();

function lightTheme() {
    el = document.getElementById("changeTheme");
    el.classList.remove("dark");
    el.classList.add("light");
}

function darkTheme() {
    el = document.getElementById("changeTheme");
    el.classList.remove("light");
    el.classList.add("dark");
}`;
})();