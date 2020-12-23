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

