//CONCATENATION
/*let firstString = "I am";
let secondString = " in love with JavaScript"
let newString = firstString + secondString;
console.log(newString, `"This is console.log(firstString + secondString)"`);
console.log(newString.concat(firstString, secondString), `"This is console.log(newString.concat(firstString, secondString)"`);
    //concatenation using template leterals (` `)
console.log(`${firstString + secondString}, "This is using template literals.`);

//STRING INTERPOLATION
    //old method
console.log(("It's me and " + firstString + secondString) + ". This is firstString + secondString");
    //ES6 method (new method)
console.log(`It's me and ${firstString}${secondString} This is ${firstString}${secondString}. Notice the spaces in the text vs in the code!`);
*/
let firstString = `I am`;
let secondString = `in love with JavaScript`;
let thirdString = `even though I am finding it challenging!`;

function join() {
    let newString = firstString + secondString + thirdString;
    document.getElementById("join1").innerText = `let newString = firstString + secondString + thirdString;
newString;

` + newString;
}

function concat() {
    let newString = firstString.concat(secondString, thirdString);
    document.getElementById("concat1").innerText = `let newString = firstString.concat(secondString, thirdString);
newString;

` + newString;
    document.getElementById("concat2").innerText = `These methods are old, and require great examination of strings to ensure the outcome will be correct.
A careless mistake and the string makes no sense!
A better approach is this method:

`;
}

function concatTemLit() {
    let newString = `${firstString + secondString + thirdString}`;
    document.getElementById("concatTemLit1").innerHTML = "<p>let newString = `${firstString + secondString + thirdString}`;</p><p>newString;</p><br>"
+ newString;
    document.getElementById("concatTemLit2").innerHTML = `<p>But this looks no different!</p>
    <p>Why is it better?</p><button onclick="concatTemLitRevised()">Find out!</button>`;
}

function concatTemLitRevised() {
    let newString = `${firstString + " " + secondString + ", " + thirdString}`
    document.getElementById("concatTemLit3").innerHTML = "<p>let newString = `${firstString + ' ' + secondString + ', ' + thirdString}`;</p><br>"
+ newString;
}

function interpo() {
    let newString = '"What do you think of Javascript?", he asked. \nI answered, "' + firstString + ' ' + secondString + ', ' + thirdString + '"';
    document.getElementById("interpo1").innerText = `let newString = '"What do you think of Javascript?", he asked. \\nI answered, "' + firstString + ' ' + secondString + ', ' + thirdString + '"';

newString;

` + newString;
    document.getElementById("interpo2").innerText = `This soon becomes very complicated, and thus made writing code much harder than it should be.
Thus, with ES6, things were simplified:

`;
}

function interpoTemLit() {
    let newString = `"What do you think of Javascript?", he asked. 
I answered, "${firstString} ${secondString}, ${thirdString}"`;
    document.getElementById("interpoTemLit1").innerHTML = '<p>let newString = `"What do you think of Javascript?", he asked.</p><p>I answered, "${firstString} ${secondString}, ${thirdString}"`;</p><br><p>newString;</p><br>'

+ newString;
}

/*`"What do you think of Javascript?", he asked. 
I answered, "${firstString} ${secondString}, ${thirdString}"`;*/