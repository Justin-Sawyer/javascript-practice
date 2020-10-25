function callByTagCodeBlock() {
    
    let text = document.getElementsByTagName("P");
    let i;
    for (i = 0; i < text.length; i++) {
        text[i].style.color = "purple";
    } 
    document.getElementById("call-object-by-tag").innerText = `<p></p>

<button onclick="callByTagCodeBlock(); insertTagCodeBlock()">Click Me!</button><button onclick="resetColor()">Click Me!</button>
<pre><code id="call-object-by-class"></code></pre>

function callByTagCodeBlock() {
    
    let text = document.getElementsByTagName("P");
    let i;
    for (i = 0; i < text.length; i++) {
        text[i].style.color = "purple";
    } 
};`;
    console.clear();
};

function resetColor() {
    let colorPurple = document.getElementsByTagName("P");
    let colorBlue = document.getElementById("blue");
    let i;
    for (i = 0; i < colorPurple.length; i++) {
        colorPurple[i].style.color = "";
        colorBlue.style.color = "#047afb";
    }
    
    console.clear();
};


