function helloWorldInConsole() {
    console.clear();
    console.log(`Hello World!`);

console.log(`
"Hello World!" in the console:
This is the code:

In the HTML editor:

    <button onclick="helloWorldInConsole()">Write "Hello World!" in the console</button>

The JS script:

    function helloWorldInConsole() {
        console.log("Hello World!");
    };`);
}

function helloWorldAlert() {
    console.clear();
    alert(`Hello World!`);
    console.log(`
"Hello World!" alert
This is the code:

In the HTML editor:

    <button onclick="helloWorldAlert()">Alert"Hello World!"</button>

The JS script:

    function helloWorldAlert() {
        alert("Hello World!");
    };`);
}

function helloWorldBrowserWrite() {
    console.clear();
  document.getElementById("write-text").innerText = `Hello World!`;
  document.getElementById("write-text").style = "color: green;";
  console.log(`
"Hello World!" inserted in the text of the browser
This is the code:

In the HTML editor:

    <button onclick="helloWorldBrowserWrite()">Insert "Hello World!" in the browser</button>
    <p id="write-text"></p></div>

The JS script:

    function helloWorldBrowserWrite() {
        document.getElementById("write-text").innerText = "Hello World!";
        document.getElementById("write-text").style = "color: green;";
    };`);
}

function helloWorldBrowserWriteTextReplace() {
    console.clear();
  document.getElementById("replace-text").innerText = `Hello World!`;
  document.getElementById("replace-text").style = "color: green;";

  console.log(`
"Hello World!" replacing text in the browser
This is the code:

In the HTML editor:

    <button onclick="helloWorldBrowserWriteTextReplace()">Replace text with "Hello World!" in the browser</button>
    <p id="replace-text">This text will be replaced</p></div>  
    
The JS script:

    function helloWorldBrowserWriteTextReplace() {
        document.getElementById("replace-text").innerText = "Hello World!";
        document.getElementById("replace-text").style = "color: green;";
    }`);
}

function resetToOriginal() {
    console.clear();
    if 
    (document.getElementById("replace-text").innerText = "Hello World!") {
        document.getElementById("replace-text").innerText = "This text will be replaced";
        document.getElementById("replace-text").style.color = "black";
    };
    console.log(`function resetToOriginal() {
    if 
    (document.getElementById("replace-text").innerText = "Hello World!") {
        document.getElementById("replace-text").innerText = "This text will be replaced";
        document.getElementById("replace-text").style.color = "black";
    };`);
}


