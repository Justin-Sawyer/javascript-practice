//Mouse over
(function onMouseOverEvent() {
    document.getElementById("onMouseOverEvent").innerText = `<button onmouseover="onMouseOverButton()">Mouse over me</button>
<div id="text-mouse-in"></div>

function onMouseOverButton() {
    document.getElementById("text-mouse-in").innerHTML = "You moused over the button and this alert appeared!";
}`
})();

function onMouseOverButton() {
    document.getElementById("text-mouse-in").innerHTML = "You moused over the button and this alert appeared!";
}

//Mouse out
(function onMouseOutEvent() {
    document.getElementById("onMouseOutEvent").innerText = `<button onmouseover="secondOnMouseOverButton()" onmouseout="onMouseOutButton()">Mouse over me</button>
<div id="text-mouse-out"></div>

function secondOnMouseOverButton() {
    document.getElementById("text-mouse-out").innerHTML = "<p>You moused over the button and this alert appeared.</p>
<p>Watch what happens when you move away:</p>";
    
}

function onMouseOutButton() {
    document.getElementById("text-mouse-out").innerHTML = "<code>Now you moused out and <strong>this</strong> text appeared!</code>";
}`
})();

function secondOnMouseOverButton() {
    document.getElementById("text-mouse-out").innerHTML = `<p>You moused over the button and this alert appeared.</p>
<p>Watch what happens when you move away:</p>`;
    
}

function onMouseOutButton() {
    document.getElementById("text-mouse-out").innerHTML = "<code>Now you moused out and <strong>this</strong> text appeared!</code>";
}

//On Key Down
(function onKeyDownEvent() {
    document.getElementById("onKeyDownEvent").innerText = `<p>Write something: <input type="text" onkeydown="onKeyDownInput()"></p>
<div id="text-key-down"></div>

function onKeyDownInput() {
    document.getElementById("text-key-down").innerHTML = "<code>You wrote something!</code>";
}`
})();

function onKeyDownInput() {
    document.getElementById("text-key-down").innerHTML = `<code>You wrote something!</code>`;
}

//On Key Press
(function onKeyPressEvent() {
    document.getElementById("onKeyPressEvent").innerText = `<button id="keyPressButton" onclick="keyPressButton()">Double click me</button>
<p id="keyPress"></p>

function keyPressButton() {
    document.getElementById("keyPressButton").addEventListener("click", onKeyPressEvent);   
};

function onKeyPressEvent() {
    document.getElementById("keyPress").innerHTML = "<p>Write something: <input type="text" id="onKeyPress" tabindex="0" onkeypress="onKeyPressEvent()"></p>
<p id="text-key-press"></p>"
    document.getElementById("onKeyPress").onkeypress = function(event) {
        document.getElementById("text-key-press").innerHTML += String.fromCharCode(event.keyCode);
        document.getElementById("text-key-press").style.color = "#c13e70"
    }
}`
})();

function keyPressButton() {
    document.getElementById("keyPressButton").addEventListener("click", onKeyPressEvent);   
};

function onKeyPressEvent() {
    let text = String.fromCharCode(event.keyCode);
    //let newText = text;
    //let newTextArray = Array.from(newText);

    document.getElementById("keyPress").innerHTML = `<p>Write something: <input type="text" id="onKeyPress" tabindex="0" onkeypress="onKeyPressEvent()"></p>
<p id="text-key-press"></p>`

    document.getElementById("onKeyPress").onkeypress = function(event) {
        document.getElementById("text-key-press").innerHTML += String.fromCharCode(event.keyCode);
        document.getElementById("text-key-press").style.color = "#c13e70"
            
            if (event.key == "y" || event.key == "Y") {
               yellowTheme();
           }
           if (event.key == "w" || event.key == "W") {
               whiteTheme();
           }

        document.addEventListener("keyup", function(event) {
        if (event.key == "Backspace") {
               whiteTheme();
               console.log('DELETE was pressed');
               document.getElementById("text-key-press").innerHTML = ""; //newTextArray[0].pop(); /*length/*.length;*//*.substring(0, newText.length - 1);*/
           }
        }
    );
    }
}

function yellowTheme() {
    document.getElementsByTagName("main")[0].style.backgroundColor = "yellow";
    document.getElementById("easterEgg").innerText = `You found the easter egg! Below is what we did, but can you work out how to make the page white again?`
    document.getElementById("easterEggCode").innerText = `if (event.key == "y" || event.key == "Y") {
    yellowTheme();
}
if (event.key == "w" || event.key == "W") {
    whiteTheme();
}
        
function yellowTheme() {
    document.getElementsByTagName("main")[0].style.backgroundColor = "yellow";
}

function whiteTheme() {
document.getElementsByTagName("main")[0].style.backgroundColor = "";
}`
    document.getElementById("explainer").innerHTML = `<p>Above, we have used the DOM to both listen for an <code>Event</code> (that is, to listen for a double click on the button), and to write the text you insert into the input box out to the browser.</p>
<p></p>The <code>event listener</code> function calls the second function, which is a <code>callback function</code> - it has been called from the first function.</p>
<br>
<p>For our Easter Egg, this is also a <code>call back function</code> - the <code>if</code> statement contains the call for what to do if certain keys are pressed.</p>`;
    //explainerCode();    
}

function explainerCode() {
    document.getElementById("explainerCode").innerText = `document.addEventListener("keyup", function(event) {
    if (event.key == "Backspace") {
            whiteTheme();
            console.log('DELETE was pressed');
            document.getElementById("text-key-press").innerHTML = "" + "<br>";
        }
    }
);`
}

function whiteTheme() {
    document.getElementsByTagName("main")[0].style.backgroundColor = "";
    
}

console.log(`function keyPressButton() {
    document.getElementById("keyPressButton").addEventListener("click", onKeyPressEvent);   
};

function onKeyPressEvent() {
    let text = String.fromCharCode(event.keyCode);
    let newText = text;

    document.getElementById("keyPress").innerHTML = "<p>Write something: <input type="text" id="onKeyPress" tabindex="0" onkeypress="onKeyPressEvent()"></p>
<p id="text-key-press"></p>"

    document.getElementById("onKeyPress").onkeypress = function(event) {
        document.getElementById("text-key-press").innerHTML += String.fromCharCode(event.keyCode);
        document.getElementById("text-key-press").style.color = "#c13e70"
            
            if (event.key == "y" || event.key == "Y") {
               yellowTheme();
           }
           if (event.key == "w" || event.key == "W") {
               whiteTheme();
           }

        document.addEventListener("keyup", function(event) {
        if (event.key == "Backspace") {
               whiteTheme();
               console.log('DELETE was pressed');
               document.getElementById("text-key-press").innerHTML = newText.length;/*substring(0, newText.length - 1)*/;
           }
        }
    );
    //alert(text);
    }
}

function yellowTheme() {
    document.getElementsByTagName("main")[0].style.backgroundColor = "yellow";
    document.getElementById("easterEgg").innerText = "You found the easter egg! Below is what we did, but can you work out how to make the page white again?"
    document.getElementById("easterEggCode").innerText = "if (event.key == "y" || event.key == "Y") {
    yellowTheme();
}
if (event.key == "w" || event.key == "W") {
    whiteTheme();
}
        
function yellowTheme() {
    document.getElementsByTagName("main")[0].style.backgroundColor = "yellow";
}

function whiteTheme() {
document.getElementsByTagName("main")[0].style.backgroundColor = "";
}"
    document.getElementById("explainer").innerHTML = "<p>Above, we have used the DOM to both listen for an <code>Event</code> (that is, to listen for a double click on the button), and to write the text you insert into the input box out to the browser.</p>
<p></p>The <code>event listener</code> function calls the second function, which is a <code>callback function</code> - it has been called from the first function.</p>
<br>
<p>For our Easter Egg, this is also a <code>call back function</code> - the <code>if</code> statement contains the call for what to do if certain keys are pressed.</p>";
    /*document.addEventListener("keyup", function(event) {
        if (event.key == "Backspace") {
               whiteTheme();
               console.log('DELETE was pressed');
               document.getElementById("text-key-press").innerHTML = "" + "<br>";
           }
        }
    );*/
}

function whiteTheme() {
    document.getElementsByTagName("main")[0].style.backgroundColor = "";
    
}`)
