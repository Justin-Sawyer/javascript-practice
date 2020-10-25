function addition() {
    
    document.getElementById("addition-result").innerText = `Hello World!`;
    document.getElementById("addition-result").style = "color: green;";
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
};

console.log(10**5);