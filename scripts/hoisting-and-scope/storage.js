//Session storage
function collectClickCount() {
    let currentCount = sessionStorage.getItem("collectClickCount") || 0;
    sessionStorage.setItem("collectClickCount", ++currentCount);
}

function showClickCount() {
    let currentCount = sessionStorage.getItem("collectClickCount") || 0;
    document.getElementById("resultSessionStorage").innerHTML = `You clicked the button <code>${currentCount}</code> times`;
}

function refreshClickCount() {
    let currentCount = sessionStorage.removeItem("collectClickCount") || 0;
    document.getElementById("resultSessionStorage").innerHTML = `You reset the count. You've now clicked the button <code>${currentCount}</code> times`;  
}

(function showCodeClickCount() {
    document.getElementById("showCodeClickCount").innerText = `function collectClickCount() {
    let currentCount = sessionStorage.getItem("collectClickCount") || 0;
    sessionStorage.setItem("collectClickCount", ++currentCount);
}

function showClickCount() {
    let currentCount = sessionStorage.getItem("collectClickCount") || 0;
    document.getElementById("resultSessionStorage").innerHTML = "You clicked the button <code>{currentCount}</code> times";
}

function refreshClickCount() {
    let currentCount = sessionStorage.removeItem("collectClickCount") || 0;
    document.getElementById("resultSessionStorage").innerHTML = "You reset the count. You've now clicked the button <code>{currentCount}</code> times";  
}`
})();

//Local Storage
function getName() {
    let inputVal = document.getElementById("myName").value;
    localStorage.setItem(name, inputVal);

    if (localStorage.getItem(name) != "") {
        alert(`Hi ${localStorage.getItem(name)}.
Welcome!`);
    }
    document.getElementById("myName").value = "";
}

function setName() {
    let inputVal = document.getElementById("myName").value;
        if (localStorage.getItem(name) == null) {
            break;
        }
        if (localStorage.getItem(name) !== "") {
            alert(`Hi ${localStorage.getItem(name)}, it's good to see you back. 
You've been away too long!`);
        }
}

function resetName() {
    let inputVal = document.getElementById("myName").value;
    localStorage.removeItem(name);
    localStorage.setItem(name, "");
    document.getElementById("myName").innerText = "";
};

(function resultLocalStorage() {
    document.getElementById("resultLocalStorage").innerText = `<p>Enter your name: <input type="text" placeholder="Your name" id="myName"><span> <button onclick="getName()">Enter</button></span></p>
function getName() {
    let inputVal = document.getElementById("myName").value;
    localStorage.setItem(name, inputVal);

    if (localStorage.getItem(name) != "") {
        alert("Hi {localStorage.getItem(name)}.
Welcome!");
    }
    document.getElementById("myName").value = "";
}

function setName() {
    let inputVal = document.getElementById("myName").value;
        if (localStorage.getItem(name) != "" || null) {
            alert("Hi {localStorage.getItem(name)}, it's good to see you back. 
You've been away too long!");
        }
}

function resetName() {
    let inputVal = document.getElementById("myName").value;
    localStorage.removeItem(name);
    localStorage.setItem(name, "");
    document.getElementById("myName").innerText = "";
};`
})();