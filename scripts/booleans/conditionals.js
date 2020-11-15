//If... else
(function example() {
    let x = document.getElementsByClassName("example");
    let i;
    for (i = 0; i < x.length; i++) {
    x[i].innerText = `let answer = 42
    if (answer == 42) {
        alert("Yes!
Got your towel, hitchhiker?");
    } else {
        alert("What was the question?")
    }`;
  }
})();

(function example2() {
    document.getElementById("example2").innerText = `let answer = 42
    if (answer == 42 || answer == "ask the mice") {
        alert("Yes!
Got your towel, hitchhiker?");
    } else {
        alert("What was the question?")
    }`;
})();

//42(1)
function theAnswer() {
    let y, text;
    y = document.getElementById("answer").value;
    if (y == 42) {
        text = `Yes!
Got your towel, hitchhiker?`;
    } else {
        text = `What was the question?`;
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
        text = "Yes!
Got your towel, hitchhiker?";
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
    if (y == 42 || y == "mice") {
        text = `Yes!
Got your towel, hitchhiker?`;
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
    if (y == 42 || y == "mice") {
        text = "Yes!
Got your towel, hitchhiker?";
    } else {
        text = "What was the question?";
    }
    alert(text);
</script>`;
}

//42&Mice
function theAnswer2() {
    let x, y, text;
    x = document.getElementById("answer42").value;
    y = document.getElementById("answerMice").value;
    if (x == 42 && y == "mice") {
        text = `Yes!
Got your towel, hitchhiker?`;
    } else {
        text = "What was the question?";
    }
    alert(text);
    document.getElementById("answerCode2").innerText = `<p>What is the answer to Life, the Universe and Everything?</p>
<input id="answer42">
<p>Who should I ask for the answer?</p>
<input id="answerMice">
<button type="button" onclick="theAnswer2()">Submit</button>
                
<script>
let x, y, text;
    x = document.getElementById("answer42").value;
    y = document.getElementById("answerMice").value;
    if (x == 42 && y == "mice") {
        text = "Yes!
Got your towel, hitchhiker?";
    } else {
        text = "What was the question?";
    }
    alert(text);
</script>`;
}

//Else...if
(function theAnswer2() {
    document.getElementById("answer2").innerText = `let y, text;
y = document.getElementById("answer").value;
    if (y == 42 || y == "ask the mice") {
        text = "Yes!
Got your towel, hitchhiker?";
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
        text = `Yes!
Got your towel, hitchhiker?`;
    } else if (y == "Zaphod knows!") {
        text = "So does Slarty Bartfast!"
    } else {
        text = "What was the question?";
    }
    alert(text);
    document.getElementById("answer3").innerText = `let y, text;
y = document.getElementById("answer").value;
    if (y == 42 || y == "ask the mice") {
        text = "Yes!
Got your towel, hitchhiker?";
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

(function ternary() {
    document.getElementById("ternary").innerText = `let y = 42;
(y == 42) ? alert("Yes! Got your towel, hitchiker?") : alert("What was the question?");`
})();

function theAnswer4() {
    let y, text;
    y = document.getElementById("answer4").value;
    (y == 42) ? alert("Yes! Got your towel, hitchiker?") : alert("What was the question?");
}

//nested consitions
(function nested() {
    document.getElementById("nested").innerText = `if (2 > 1) {
	alert("If condition is executed");
	    if (1 > 0) {
		alert("Nested if condition is executed");
	}
}`
})();

function tryMe() {
    if (2 > 1) {
	alert("If condition is executed");
	    if (1 > 0) {
		alert("Nested if condition is executed");
	}
}
}

(function nested2(){
    document.getElementById("nested2").innerText = `if (1 > 3) {
    alert("if statement is executed");
	    if (1 > 0) {
		    alert("Nested if statement is executed");
	    }
    } else {
	alert("Else statement is executed");
}`
})();

function tryMe2(){
    if (1 > 3) {
	alert("if statement is executed");
	if (1 > 0) {
		alert("Nested if statement is executed");
	}
} else {
	alert("Else statement is executed");
}
}

(function nested3() {
    document.getElementById("nested3").innerText = `if (5 > 2) {
	alert("If statement here!");
	    if(1 > 3) {
		    alert("Nested if statement!");
	    } else {
		    alert("Nested else statement");
	    }
    } else {
	    alert("Regular else statement");
}`
})();

function tryMe3() {
    if (5 > 2) {
	alert("If statement here!");
	if(1 > 3) {
		alert("Nested if statement!");
	} else {
		alert("Nested else statement");
	}
} else {
	alert("Regular else statement");
}
}

//Quiz attempt
function hitchhikerQuiz() {
    let q1 = document.getElementById("q1").value;
    let q2 = document.getElementById("q2").value;
    let q3 = document.getElementById("q3").value;
    let q4 = document.getElementById("q4").value;
    if (q1 == 42) {
        document.getElementById("q1r").innerText = `Q1 correct!
Got your towel, hitchhiker?`;
        document.getElementById("q1r").style.color = "#047afb";
        if (q1 == 42 && q2 == "mice") {
            document.getElementById("q2r").innerText = `Q1 & Q2 correct!
The Babel fish is helping, I think!`;
            document.getElementById("q2r").style.color = "#047afb";
            if (q1 == 42 && q2 == "mice" && q3 == "Don't Panic!") {
                document.getElementById("q3r").innerText = `Q1, Q2 & Q3 correct!
Start up the Infinity Drive!`;
                document.getElementById("q3r").style.color = "#047afb";
                if (q1 == 42 && q2 == "mice" && q3 == "Don't Panic!" && q4 == "Slarty Bartfast") {
                    document.getElementById("q4r").innerText = `100%!
Is your name Arthur Dent? Or maybe even Ford Prefect?
Whichever, you're a true Hitchhiker!`;
                    document.getElementById("q4r").style.color = "#047afb";
                } else {
                    document.getElementById("q4r").innerText = "Q4 incorrect. Try again!";
                    document.getElementById("q4").value = "";
                    document.getElementById("q4r").style.color = "#c13e70";
                }
            } else {
                document.getElementById("q3r").innerText = "Q3 incorrect. Try again!";
                document.getElementById("q3").value = "";
                document.getElementById("q3r").style.color = "#c13e70";
            }
        } else {
            document.getElementById("q2r").innerText = "Q2 incorrect. Try again!";
            document.getElementById("q2").value = "";
            document.getElementById("q2r").style.color = "#c13e70";
        } 
    }   else {
        document.getElementById("q1r").innerText = `Incorrect. Start again!`;
        document.getElementById("q1r").style.color = "#c13e70";
        document.getElementById("q1").value = "";
        document.getElementById("q2").value = "";
        document.getElementById("q3").value = "";
        document.getElementById("q4").value = "";
    }
}

(function quiz() {
    document.getElementById("quiz").innerText = `<p>Q1: What is the answer to Life, the Universe and Everything?</p>
<input id="q1">
<p id="q1r"></p>
<p>Q2: Who should I ask for the answer?</p>
<input id="q2">
<p id="q2r"></p>
<p>Q3: What is written in reassuring letters on the cover of the guide?</p>
<input id="q3">
<p id="q3r"></p>
<p>Q4: Who designed the Norwegian fjords?</p>
<input id="q4">
<p id="q4r"></p>
<button type="button" onclick="hitchhikerQuiz()">Submit</button>

<script>
function hitchhikerQuiz() {
    let q1 = document.getElementById("q1").value;
    let q2 = document.getElementById("q2").value;
    let q3 = document.getElementById("q3").value;
    let q4 = document.getElementById("q4").value;
    if (q1 == 42) {
        document.getElementById("q1r").innerText = "Q1 correct!
Got your towel, hitchhiker?";
        document.getElementById("q1r").style.color = "#047afb";
        if (q1 == 42 && q2 == "mice") {
            document.getElementById("q2r").innerText = "Q1 & Q2 correct!
The Babel fish is helping, I think!";
            document.getElementById("q2r").style.color = "#047afb";
            if (q1 == 42 && q2 == "mice" && q3 == "Don't Panic!") {
                document.getElementById("q3r").innerText = "Q1, Q2 & Q3 correct!
Start up the Infinity Drive!";
                document.getElementById("q3r").style.color = "#047afb";
                if (q1 == 42 && q2 == "mice" && q3 == "Don't Panic!" && q4 == "Slarty Bartfast") {
                    document.getElementById("q4r").innerText = "100%!
Is your name Arthur Dent? Or maybe even Ford Prefect?
Whichever, you're a true Hitchhiker!";
                    document.getElementById("q4r").style.color = "#047afb";
                } else {
                    document.getElementById("q4r").innerText = "Q4 incorrect. Try again!";
                    document.getElementById("q4").value = "";
                    document.getElementById("q4r").style.color = "#c13e70";
                }
            } else {
                document.getElementById("q3r").innerText = "Q3 incorrect. Try again!";
                document.getElementById("q3").value = "";
                document.getElementById("q3r").style.color = "#c13e70";
            }
        } else {
            document.getElementById("q2r").innerText = "Q2 incorrect. Try again!";
            document.getElementById("q2").value = "";
            document.getElementById("q2r").style.color = "#c13e70";
        } 
    }   else {
        document.getElementById("q1r").innerText = "Incorrect. Start again!";
        document.getElementById("q1r").style.color = "#c13e70";
        document.getElementById("q1").value = "";
        document.getElementById("q2").value = "";
        document.getElementById("q3").value = "";
        document.getElementById("q4").value = "";
    }
}
</script>`
})();
