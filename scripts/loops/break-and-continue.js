/*//BREAK AND CONTINUE
console.log(`
BREAK AND CONTINUE

Break
Stops the iteration.`);


//For loop
let aa;
for (i=0; i<5; i++) {
    if (i===3) {
        break;
    }
    console.log(`i is ${i} of the for loop`);
}

//This works but shows no i=0
//For... in loop
let bb = [0, 1, 2, 3, 4, 5];
for (let i in bb) {
    //i++;
    if (i==3) {
        break;
    }
    console.log(`i is ${i} of the for... in loop`);
}
//becasue I've not told where the loop should start, the i=0 is implied?

//This works
//For... of loop
for(let b of bb) {
    if (b===3) {
        break;
    }
    console.log(`b is ${b} of the for... of loop`);
}

//-------------------------------------------------------
let i=0;
while (i<bb.length) {
  if (i===3) {
    break;
  }
  console.log(`i is ${i} of the while loop`);
  i++;
}

//--------------------------------------------------------

//Continue
console.log("
Continue
Skips and moves on. Good for alternatives or odd/evens etc

For loop: do not include 3`);


for (i=0; i<10; i++) {
    if (i===3) {
        continue;
    } console.log(i);
}

console.log(`
For... in loop: do not include 3`);
let a = [0, 1, 2, 3, 4, 5];
for (let i in a) {
    i++;
    if (i==3) {
        continue;
    } console.log(`i is ${i}`);
}

console.log(`
For... of loop: do not include 3`);
for (let b in a) {
    if (b == 3) {
        continue;
    } console.log (`b is ${b}`);
}

console.log(`
For loop: skip even numbers`);
for (i=0; i<10; i++) {
    if (i%2!==1) {
        continue;
    } console.log(i);
}

console.log(`
For... in loop: skip even numbers`);
for (let i in a) {
    i++;
    if (i%2!=1) {
        continue;
    } console.log(i);
}

console.log(`
For... of loop: skip even numbers`);
for (let b of a) {
    if (b%2!=1) {
        continue;
    } console.log(`b is ${b}`);
}

console.log(`Break and continue challenges:
https://repl.it/@JustinSawyer/JavascriptFundamentalsBCContinue1-1#main.js

Great repl.its for reference:
https://repl.it/@JustinSawyer/break2
https://repl.it/@JustinSawyer/break3-with-igors-answers
https://repl.it/@JustinSawyer/break-solutions#index.html`);*/

//----------------------------------------------------------------------------   Break and continue
//For loop
(function forLoop() {
    document.getElementById("forLoop").innerText = `for (let statement 1; statement 2; statement 3) {
    code block to be executed {
        break;
    };
    alert/log etc;
}`;
})();

(function dogsAlbums() {
    document.getElementById("dogsAlbums").innerText = `let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    for (i=0; i<dogsAlbums.length; i++) {
        if (i === 3) {
            break;
        };
        document.getElementById("result").innerText = "The loop has broken at index #3, thus the album at index #" + i + "," + "(" + dogsAlbums[i] =") is the last album listed before the loop stops!";
    };`
})();

function tryMe() {
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    for (i=0; i<dogsAlbums.length; i++) {
        if (i === 3) {
            break;
        };
        document.getElementById("result").innerText = `The loop has broken at index #3, thus the album at index # ${i}, (${dogsAlbums[i]}) is the last album listed before the loop stops!`;
        document.getElementById("result").style.color = "#c13e70";
        console.log(dogsAlbums[i]);
    };
    console.log(`
The albums are listed in console until the break point

`)
}

function tryMe2() {
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    for (i=0; i<dogsAlbums.length; i++) {
        if (i === "Errol Flynn") {
            break;
        };
        document.getElementById("result").innerText = dogsAlbums[i] + ` is NOT the correct answer: the loop has not stopped!`;
        document.getElementById("result").style.color = "#c13e70";
        console.log(dogsAlbums[i])
    };
    console.log(`
Not the correct answer: ALL the albums have been listed!
    
`)
}

//For in loop
(function ForInLoop() {
    document.getElementById("forInLoop").innerText = `for (let i in array) {
    if (code block to be executed) {
    break; 
    }
    alert/log etc;
}`
})();

(function dogsAlbums1 () {
    document.getElementById("dogsAlbums1").innerText = `let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    for (let i in dogsAlbums) {
        if (i == 3) {
            break;
        }
        document.getElementById("result").innerText = "The loop has broken at index #3, thus the album at index #" + i + "," + "(" + dogsAlbums[i] =") is the last album listed before the loop stops!";
    }`
})();

function tryMe3() {
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    for (let i in dogsAlbums) {
        if (i == 3) {
            break;
        }
        document.getElementById("result1").innerText = `The loop has broken at index #3, thus the album at index # ${i}, (${dogsAlbums[i]}) is the last album listed before the loop stops!`;
        document.getElementById("result1").style.color = "#c13e70";
        console.log(dogsAlbums[i]);
    }
    console.log(`
The albums are listed in console until the break point

`)
}

function tryMe4() {
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    for (let i in dogsAlbums) {
        if (i == "Errol Flynn") {
            break;
        }
        document.getElementById("result1").innerText = dogsAlbums[i] + ` is NOT the correct answer: the loop has not stopped!`;
        document.getElementById("result1").style.color = "#c13e70";
        console.log(dogsAlbums[i]);
    }
    console.log(`
Not the correct answer: ALL the albums have been listed!
    
`)
}

function tryMe5() {
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    for (let i in dogsAlbums) {
        if (i === 3) {
            break;
        }
        document.getElementById("result2").innerText = dogsAlbums[i] + ` is NOT the correct answer: the loop has not stopped!`;
        document.getElementById("result2").style.color = "#c13e70";
        console.log(dogsAlbums[i]);
    }
    console.log(`
Not the correct answer: ALL the albums have been listed!
    
`)
}

//For.. of loop with break
(function forOfLoop() {
    document.getElementById("forOfLoop").innerText = `for (let i of [array]) {
    if (code block to be executed) {
        break;
    };
    alert.log etc;
}`
})();

(function dogsAlbums2 () {
    document.getElementById("dogsAlbums2").innerText = `let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    for (let album of dogsAlbums) {
        if (album === "Straight") {
            break;
        }
        document.getElementById("result3").innerText = "The loop has broken at index #3, thus the album " + album + " is the last album listed before the loop stops!";
        }`
})();

function tryMe6() {
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    for (let album of dogsAlbums) {
        if (album === "Straight") {
            break;
        }
        document.getElementById("result3").innerText = `The loop has broken at index #3, thus the album ${album} is the last album listed before the loop stops!`;
        document.getElementById("result3").style.color = "#c13e70";
        console.log(album);
    }
    console.log(`
The albums are listed in console until the break point

`)
}

function tryMe7() {
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    for (let album of dogsAlbums) {
        if (album === 3) {
            break;
        }
        document.getElementById("result3").innerText = album + ` is NOT the correct answer: the loop has not stopped!`;
        document.getElementById("result3").style.color = "#c13e70";
        console.log(album);
    }
    console.log(`
Not the correct answer: ALL the albums have been listed!
    
`)
}

//While loop
(function whileLoop() {
    document.getElementById("whileLoop").innerText = `let i = 0;
while (i < [array].length) {
    if (code block to be executed) {
        break;
    }
    alert/log etc;
    i++;
}`
})();

(function dogsAlbum3() {
    document.getElementById("dogsAlbums3").innerText = `let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
let i = 0;
while (i < dogsAlbums.length) {
    if (i == 3) {
        break;
    }
    document.getElementById("result4").innerText = "The loop has broken at index #3, thus the album at index #" + i + "," + "(" + dogsAlbums[i] =") is the last album listed before the loop stops!";
    i++;
}`
})();

function tryMe8() {
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    let i = 0;
    while (i < dogsAlbums.length) {
        if (i == 3) {
            break;
        }
        document.getElementById("result4").innerText = `The loop has broken at index #3, thus the album at index # ${i}, (${dogsAlbums[i]}) is the last album listed before the loop stops!`;
        document.getElementById("result4").style.color = "#c13e70";
        console.log(dogsAlbums[i]);
        i++;
    }
    console.log(`
The albums are listed in console until the break point

`)
}

function tryMe9() {
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    let i = 0;
    while (i < dogsAlbums.length) {
        if (i === "Straight") {
            break;
        }
        document.getElementById("result4").innerText = dogsAlbums[i] + ` is NOT the correct answer: the loop has not stopped!`;
        document.getElementById("result4").style.color = "#c13e70";
        console.log(dogsAlbums[i]);
        i++;
    };
    console.log(`
Not the correct answer: ALL the albums have been listed!

`);
}

//Do... while loop
(function doWhileLoop() {
    document.getElementById("doWhileLoop").innerText = `let i = 0;
    do {
        alert/log etc;
        i++;
        if (code block to be executed) {
            break;
        }
    }
    while (i < [array].length);`
})();

(function dogsAlbums4() {
    document.getElementById("dogsAlbums4").innerText = `let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
let i = 0;
    do {
        document.getElementById("result5").innerText = "The loop has broken at index #3, thus the album at index #" + i + "," + "(" + dogsAlbums[i] =") is the last album listed before the loop stops!";
        i++;
        if (i === 3) {
            break;
        }
    }
    while (i < dogsAlbums.length);`
})();

function tryMe10() {
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    let i = 0;
    do {
        document.getElementById("result5").innerText = `The loop has broken at index #3, thus the album at index # ${i}, (${dogsAlbums[i]}) is the last album listed before the loop stops!`;
        document.getElementById("result5").style.color = "#c13e70";
        console.log(dogsAlbums[i]);
        i++;
        if (i == 3) {
            break;
        }
    }
    while (i < dogsAlbums.length);
    console.log(`
The albums are listed in console until the break point

`);
}

function tryMe11() {
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    let i = 0;
    do {
        document.getElementById("result5").innerText = dogsAlbums[i] + ` is NOT the correct answer: the loop has not stopped!`;
        document.getElementById("result5").style.color = "#c13e70";
        console.log(dogsAlbums[i]);
        i++;
        if (i === "Straight") {
            break;
        }
    }
    while (i < dogsAlbums.length);
    console.log(`
Not the correct answer: ALL the albums have been listed!

`);
}

//------------------------------------------------------------- Continue
//For loop using continue
(function forLoopContinue() {
    document.getElementById("forLoop").innerText = `for (let statement 1; statement 2; statement 3) {
    code block to be executed {
        continue;
    };
    alert/log etc;
}`;
})();

(function exampleForLoopContinue() {
    document.getElementById("exampleForLoopContinue").innerText = `let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (i = 0; i < numArray.length; i++) {
        if (i % 2 == 0) {
            continue;
        };
        alert(numArray[i]);
    }`
})();

function tryMe12() {
    let text = "";
    let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (i = 0; i < numArray.length; i++) {
        if (i % 2 === 0) {
            continue;
        };
        text += "The number is " + i + "<br>";
    }
    document.getElementById("result6").innerHTML = text;
    document.getElementById("result6").style.color = "#c13e70";
    document.getElementById("expandedResult").innerHTML = `
<br>
<p>We have added some code for all the numbers not divisible by 2 to be shown here:</p>
    <pre><code>let text = "";
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (i = 0; i < numArray.length; i++) {
        if (i % 2 === 0) {
            continue;
        };
        text += "The number is " + i + "&ltbr&gt";
    }
    document.getElementById("result6").innerHTML = text;</code></pre>

<p>So, what is happening here?</p>
<p>We are telling the code simply to skip all numbers that are divisible by 2, using the follwing block of code:</p>
<pre><code>if (i % 2 === 0) {
    continue;
};</code></pre>
<p>Remember, we are also getting a false result, here. Because we are looking for the index # and not its <code>"string"</code> value, we do not need the <code>[array]</code> to contain numbers. It could contain anything.</p>                   
`
}

(function dogsForContinue() {
    document.getElementById("dogsForContinue").innerText = `let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
let text = "";
    for (i = 0; i < dogsAlbums.length; i++) {
        if (i % 2 === 0) {
            continue;
        };
        text += "There is an album at index #" + i + " called " + dogsAlbums[i] + "<br>";
    };
    document.getElementById("result7").innerHTML = text;`
})();

function tryMe13() {
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
let text = "";
    for (i = 0; i < dogsAlbums.length; i++) {
        if (i % 2 === 0) {
            continue;
        };
        text += "There is an album at index #" + i + " called " + dogsAlbums[i] + "<br>";
    };
    document.getElementById("result7").innerHTML = text;
    document.getElementById("result7").style.color = "#c13e70";
}

//For... in loop with continue
(function forInLoopContinue() {
    document.getElementById("forInLoopContinue").innerHTML = `let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
slet text = "";
    for (let i in dogsAlbums) {
        if (i % 2 === 0) {
            continue;
        }
        text += "There is an album at index #" + i + " called " + dogsAlbums[i] + "&ltbr&gt";
    };
    document.getElementById("result8").innerHTML = text;`
})();

function tryMe14() {
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    let text = "";
    for (let i in dogsAlbums) {
        if (i % 2 === 0) {
            continue;
        }
        text += "There is an album at index #" + i + " called " + dogsAlbums[i] + "<br>";
    };
    document.getElementById("result8").innerHTML = text;
    document.getElementById("result8").style.color = "#c13e70";
}

//For... of loop with continue
(function forOfLoopContinue() {
    document.getElementById("forOfLoopContinue").innerHTML = `let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
let text = "";
    for (let album of dogsAlbums) {
        if (album === "Straight") {
            continue;
        }
        text += "The Dogs d'Amour released an album called " + album + "&ltbr&gt";
    }`
})();

function tryMe15() {
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    let text = "";
    for (let album of dogsAlbums) {
        if (album === "Straight") {
            continue;
        }
        text += "The Dogs d'Amour released an album called " + album + "<br>"
    };
    document.getElementById("result9").innerHTML = text;
    document.getElementById("result9").style.color = "#c13e70";
    document.getElementById("expandedResult2").innerHTML = `
<br>
<p>Remember, the <code>for... of</code> loop looks for the <code>"string"</code> value instead of the index #.</p>`
}

//While loop with contine
(function whileLoopContinue() {
    document.getElementById("whileLoopContinue").innerText = `let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
let text = "";
let i = 0;
while (i < dogsAlbums.length) {
    i++;
    if (i % 2 === 0) {
        continue;
    }
    text += "There is an album at index # " + i + " called '" + dogsAlbums[i] +  "'" + "<br>";
}
alert(text);`
})();

function tryMe16() {
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    let text = "";
    let i = 0;
        while (i < dogsAlbums.length) {
            i++;
            if (i % 2 == 0) {
                continue;
            }
            text += "There is an album at index # " + i + " called '" + dogsAlbums[i] +  "'" + "<br>";
        }
        console.log(text);
        document.getElementById("result10").innerHTML = text;
        document.getElementById("result10").style.color = "#c13e70";
        document.getElementById("expandedResult3").innerHTML = `
<br>
<p>We have a strange result here - the code is saying that there is an album at index #5, when in actual fact, there is not. 
There are 5 albums in the <code>[array]</code>, and <code>JavaScript</code> uses zero indexing, so index #5 is empty. </p>
<br>
<p>So what is happening?</p>
<br>
<p>The <code>continue</code> statement is effectively acting as <code>goto</code> does: the code runs, and skips the relevant entries. 
But it includes the first false element it finds before stopping. 
Thus, it finds that it should skip the entry at index #4, but then returns to (goes to) the code block and runs it, 
thus including the first falsehood.</p>
<br>
<p>(In a <code>while</code> loop, the condition is tested, and if it is true, the loop is executed again, whereas in a <code>for</code> loop, 
the increment expression (e.g. i++) is first evaluated, and then the condition is tested to find out if another iteration should be done.)</p>
<br>
<p>So how can we resolve this "anomaly?</p>
<p>Effectively, we would need to know the length ot the <code>[array]</code> (use the <code>array.length</code> command), 
and then include it within the condition using an <code>or</code> statement (<code>||</code>):</p>
<pre><code><p>if (i % 2 == 0 || i === 5) {
    continue;
};</p></code></pre>
<button onclick="TryMeWhileContinueIEquals5()">Try Me</button>
`;
}

function TryMeWhileContinueIEquals5() {
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
    let text = "";
    let i = 0;
        while (i < dogsAlbums.length) {
            i++;
            if (i % 2 == 0 || i === 5) {
                continue;
            }
            text += "There is an album at index # " + i + "<br>"
;
        }
        console.log(text);
        document.getElementById("result11").innerHTML = text;
        document.getElementById("result11").style.color = "#c13e70";
        document.getElementById("expandedResult4").innerHTML = `It is perhaps for this reason that using <code>continue</code> in a 
        <code>while</code> loop is discouraged.`;
}

//Do... while loop with continue
(function doWhileLoopContinue() {
    document.getElementById("doWhileLoopContinue").innerText = `let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
let text = "";
let i = 0;
    do {
        //alert(dogsAlbums[i]);
        i++;
        if (i % 2 == 0 || i === 5) {
            continue;
        } 
        text += "There is an album at index #" + i + " called '" + dogsAlbums[i] + "'" + "<br>";
    }
    while (i < dogsAlbums.length);`
})();

function tryMe17() {
    let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
let text = "";
let i = 0;
    do {
        //alert(dogsAlbums[i]);
        i++;
        if (i % 2 == 0 || i === 5) {
            continue;
        }
        text += "There is an album at index #" + i + " called '" + dogsAlbums[i] + "'" + "<br>";
        document.getElementById("result12").innerHTML = text;
        document.getElementById("result12").style.color = "#c13e70";
    }
    while (i < dogsAlbums.length);
}



//--------------------------------------------------------------Alternative placement for returned results
/*(function dogsForContinueWithAlts() {
    document.getElementById("dogsForContinue").innerText = `let dogsAlbums = ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"];
let text = "";
    for (i = 0; i < dogsAlbums.length; i++) {
        if (i % 2 === 0) {
            continue;
        };
        text += "There is an album at index #" + i + "<br>";
        console.log(dogsAlbums[i]);
        alert(dogsAlbums[i]);
    };
    document.getElementById("result7").innerHTML = text;
    alert(text);
    console.log(text);`
})();*/






