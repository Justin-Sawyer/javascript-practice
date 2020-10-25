function insertClassCodeBlock() {
    
    let redText = document.getElementById("color-text-div");
    redText.getElementsByClassName("color-text")[2].style.color = "#c13e70";

    document.getElementById("call-object-by-class").innerText = `<div class="tab" id="color-text-div">
    <p class="tab color-text">Am I black?</p>
    <p class="tab color-text" style="color:#047afb;">Am I blue?</p>
    <p class="tab color-text">Am I red?</p>
</div>

<button onclick="insertClassCodeBlock(); insertNewClassCodeBlock()">Click Me!</button>
<pre><code id="call-object-by-class"></code></pre>

function insertClassCodeBlock() {
    
    let redText = document.getElementById("color-text-div");
    redText.getElementsByClassName("color-text")[2].style.color = "#c13e70";
    
};`;

    document.getElementById("reset-me").innerText = "Reset Me!";
    console.clear();
    
};

function resetToOriginalClass() {
    let y = document.getElementById("call-object-by-class");
    let z = document.getElementsByClassName("color-text")[2];
  if ((y.style.display === "block") || (z.style.color == "#c13e70")) {
    y.style.display = "none";
    z.style.color = "black";
    document.getElementById("reset-me").textContent = "Click Me!";
    console.clear();
  } else {
    y.style.display = "block";
    z.style.color == "#c13e70";
  };
};