//ClassList
(function timeDarkTheme() {
    let time = new Date().getHours();
    console.log(time);
    if (time > 18 || time < 4) {
        darkTheme();
        } else {
            lightTheme();
        }
    document.addEventListener("keyup", function(event) {
    if (event.key == "l" || event.key == "L") {
            lightTheme();
        }
        if (event.key == "d" || event.key == "D") {
            darkTheme();
        }
    })
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
    document.getElementById("setEventListener").innerText = `<body class="light" id="changeTheme">
    
(function timeDarkTheme() {
    let time = new Date().getHours();
    console.log(time);
    if (time > 18 || time < 4) {
        darkTheme();
        } else {
            lightTheme();
        }
    document.addEventListener("keyup", function(event) {
    if (event.key == "l" || event.key == "L") {
            lightTheme();
        }
        if (event.key == "d" || event.key == "D") {
            darkTheme();
        }
    })
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