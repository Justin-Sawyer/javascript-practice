(function block() {
    document.getElementById("block").innerText = `Whenever you have seen code inside one of these, it has been written in a function!`
})();

function button() {
    document.getElementById("button").innerText = `Whenever you have clicked a button, it has called a function!`;
}

(function() {
    document.getElementById("selfDeclareFunction").innerText = `(function nameOfFunction() {
    block of code to be executed;
})();`;
})();

(function selfDeclaredAlert() {
    alert("Are you ready to learn about functions?");
    document.getElementById("selfDeclaredAlert").innerText = `(function selfDeclaredAlert() {
    alert("Are you ready to learn about functions?");
})();`;
})();

function calledFunction() {
    alert(`When you pressed that "Click Me" button, you called this alert via a function.
    
It's going to open the code for you to read, too.`);
    document.getElementById("calledFunction").innerText = `<button onclick="calledFunction()">Click Me</button>
<pre><code><p id="calledFunction"></p></code></pre>

function calledFunction() {
    alert("When you pressed that "Click Me" button, you called this alert via a function.
    
It's going to open the code for you to read, too.");
    document.getElementById("calledFunction").innerText = "This is the code to call the alert";
}`;
}

(function parameters() {
    document.getElementById("parameters").innerText = `function functionName(parameter1, parameter2) {
    code block to be executed;
}`
})();

function multiply(a,b) {
    let multiply = parseInt(a) * parseInt(b);
    if ((a == 6 && b == 7) || (a == 7 && b == 6)) {
        alert(multiply + `
    
You've found the answer. But not the question.
The question to the answer to Life, the Universe and Everything is:
"What is 6 multiplied by 9?"
In base 13, 6x9=42!`);
        document.getElementById("theAnswer").innerHTML = `function multiply(a,b) {
    let multiply = parseInt(a) * parseInt(b);
    if ((a == 6 && b == 7) || (a == 7 && b == 6)) {
        alert(multiply + 

"You've found the answer. But not the question.
The question to the answer to Life, the Universe and Everything is:
"What is 6 multiplied by 9?"
In base 13, 6x9=42!");
    } else {
        alert("Try again!

(Watch out for a clue beneath the button)");
    };`
    document.getElementById("result").innerHTML = `<p>So what is happening here?</p>
<p>The <code>function</code> named <span style="color: blue">multiply()</span> has two parameters within its declaration, these being "a" and "b". Those parameters have been transformed from strings to numbers using the <code>parseInt()</code> method. Then we declare a variable called "multiply" which has been assigned the value of <span style="color: orange">"a*b"</span>. The rest of the code just tells the function what to do <code>if... else</code>.</p>
<p>It is as simple as that!</p>`
    } else {
        alert(`Try again!

(Watch out for a clue beneath the button)`);
        document.getElementById("theAnswer").innerHTML = `Try 6 and 7.`
        document.getElementById("a").value = "";
        document.getElementById("b").value = "";
    };
}

(function defaultValue() {
    document.getElementById("defaultValue").innerText = `function multiple(a, b = 7) {
    return a * b;
}
multiply(2, 2)`;
})();

function returnOutside() {
    document.getElementById("returnOutside").innerText = `function returnOutside() {
    return(6*7);
}
document.getElementById("call1").innerText = callOutside();`;
    return(6*7);
}
document.getElementById("call1").innerText = returnOutside();

function returnInside() {
    document.getElementById("call2").innerText = 6*7;
    document.getElementById("returnInside").innerText = `function returnInside() {
    document.getElementById("call2").innerText = 6*7;
}`;
}

function returnFunction() {
    return(6*7);
    return(6+7);
}
document.getElementById("returnFunction").innerText = `function returnFunction() {
    return(6*7);
    return(6+7);
}`
document.getElementById("returnFunction1").innerText = returnFunction();
document.getElementById("returnFunction2").innerText = returnFunction;

