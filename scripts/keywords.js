//LET, VAR & CONST
console.log(`
LET, VAR & CONST
var allows us to REDECLARE a variable, whereas let does not.`)

var apple = "apple";
var apple = "banana";
console.log(apple);

let banana = "banana";
banana = "apple";
console.log(banana);

console.log(`
Try adding the keyword "let" at the start of line 12 to get the code to stop working.
var also allows us to reference the variable before it is declared, while let wil not.`);

function showBanana() {
    banana = "A banana";
    console.log(banana);
    var banana;
}
showBanana();

function showOrange() {
    let orange;
    orange = "An orange";
    console.log(orange);
    //let orange;
}
showOrange();

//CONST
console.log(`
CONST
Once a value has been assigned to a const variable, it cannot be changed. Ever.

const language = "javascript";
language = "ruby";
console.log(language)
// var language = "ruby";
// let language = "ruby";`);

const language = "javascript";
//language = "ruby";
console.log(language)
//var language = "ruby";
//let language = "ruby";

console.log(`
Challenge:
https://repl.it/@JustinSawyer/JavascriptFundamentalsKWConst1#main.js`);

//BLOCK
console.log(`
BLOCK
JS ONLY creates scope with the let and const keywords.
In other words, you can access var inside a block of code while outside of the function.
But, outside of the block of code, you cannet access let or var`);

if (true) {
    var x = "hey";
}
alert(x);
console.log(`
Here, we can access variable x from within the code block, as it is a var`);

let result;
if (true) {
    let x = 100;
    const y = 200;
    var z = 3

    result = x*y*z;
}
alert(result);
alert(z);
//console.log(x);
//console.log(y);

console.log(`
Here, we can access variable result from outside the code block because we declared it outside of the code block.
But, we cannot access variables x or y from outside the code block because they are let and const`)
