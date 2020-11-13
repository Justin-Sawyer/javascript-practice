//If... else
(function example() {
    let x = document.getElementsByClassName("example");
    let i;
    for (i = 0; i < x.length; i++) {
    x[i].innerText = `let answer = 42
    if (answer == 42) {
        alert("Got your towel, hitchhiker?");
    } else {
        alert("What was the question?")
    }`;
  }
})();

(function example2() {
    document.getElementById("example2").innerText = `let answer = 42
    if (answer == 42 || answer == "ask the mice") {
        alert("Got your towel, hitchhiker?");
    } else {
        alert("What was the question?")
    }`;
})();

//42(1)
function theAnswer() {
    let y, text;
    y = document.getElementById("answer").value;
    if (y == 42) {
        text = "Got your towel, hitchhiker?";
    } else {
        text = "What was the question?";
    }
    alert(text);
    document.getElementById("answerCode").innerText = `<p>What is the answer to Life, the Universe and Everything?</p>
<input id="answer">
<button type="button" onclick="theAnswer()">Submit</button>
<pre><code><p id="answerCode"></p></code></pre>

<script>
let y, text;
y = document.getElementById("answer").value;
    if (y == 42) {
        text = "Got your towel, hitchhiker?";
    } else {
        text = "What was the question?";
    }
    alert(text);
</script>`;
}

//42(2)
function theAnswer1() {
    let y, text;
    y = document.getElementById("answer1").value;
    if (y == 42 || y == "ask the mice") {
        text = "Got your towel, hitchhiker?";
    } else {
        text = "What was the question?";
    }
    alert(text);
    document.getElementById("answerCode1").innerText = `<p>What is the answer to Life, the Universe and Everything?</p>
<input id="answer">
<button type="button" onclick="theAnswer()">Submit</button>
<pre><code><p id="answerCode"></p></code></pre>
                
<script>
let y, text;
y = document.getElementById("answer").value;
    if (y == 42 || y == "ask the mice") {
        text = "Got your towel, hitchhiker?";
    } else {
        text = "What was the question?";
    }
    alert(text);
</script>`;
}

//Else...if
(function theAnswer2() {
    /*let y, text;
    y = document.getElementById("answer2").value;
    if (y == 42 || y == "ask the mice") {
        text = "Got your towel, hitchhiker?";
    } else if (y == "Zaphod knows!") {
        text = "So does Slarty Bartfast!"
    } else {
        text = "What was the question?";
    }
    alert(text);*/
    document.getElementById("answer2").innerText = `let y, text;
y = document.getElementById("answer").value;
    if (y == 42 || y == "ask the mice") {
        text = "Got your towel, hitchhiker?";
    } else if (y == "Zaphod knows!") {
        text = "So does Slarty Bartfast!"
    } else {
        text = "What was the question?";
    }
    alert(text);`;
})();

function theAnswer3() {
    let y, text;
    y = document.getElementById("answer3").value;
    if (y == 42 || y == "ask the mice") {
        text = "Got your towel, hitchhiker?";
    } else if (y == "Zaphod knows!") {
        text = "So does Slarty Bartfast!"
    } else {
        text = "What was the question?";
    }
    alert(text);
    document.getElementById("answer3").innerText = `let y, text;
y = document.getElementById("answer").value;
    if (y == 42 || y == "ask the mice") {
        text = "Got your towel, hitchhiker?";
    } else if (y == "Zaphod knows!") {
        text = "So does Slarty Bartfast!"
    } else {
        text = "What was the question?";
    }
    alert(text);`;
}

//Else...if 2
(function lessThan1(){
    document.getElementById("lessThan1").innerText = `if (2>5) {
        alert("Statement 1");
    } else if (2>1) {
        alert("Statement 2");
    } else {
        alert("Statement 3");
    }`;
})();

function lessThanAlert1() {
    if (2>5) {
        alert("Statement 1");
    } else if (2>1) {
        alert("Statement 2");
    } else {
        alert("Statement 3");
    }
}

(function lessThan2(){
    document.getElementById("lessThan2").innerText = `if (2<5) {
        alert("Statement 1");
    } else if (2>1) {
        alert("Statement 2");
    } else {
        alert("Statement 3");
    }`;
})();

function lessThanAlert2() {
    if (2<5) {
        alert("Statement 1");
    } else if (2>1) {
        alert("Statement 2");
    } else {
        alert("Statement 3");
    }
}