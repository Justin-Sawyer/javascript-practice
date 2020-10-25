//SCOPE
console.log(`
SCOPE

Allows or prevents code from being run from within other scripts.

Imagine a garage with a lightswitch inside the garage, and another inside the house.
The lightswitch inside the garage has LOCAL scope, as it is inside the garage
The lightswitch inside the house has GLOBAL scope as it can access the lights from outside of the garage.

With a good understanding of scope, you can predict better what your code will do
It also allows us to better care for our code , as it protects our greater environment.

Invoking a variable from without its scope gives us a reference error:

function hey() {
    let hi = "hello";
}
hi;

The reference error tells us that the variable has not been defined. It has, but not ouside of the function. 
Thus variable hi has local scope

Global Scope:
when we declare a variable or create a function outside of another function, we are creating it in the global scope.
It is thus accessible all the time and to no matter what.

An exaple of global scope:`)

let x = "hi";
function displayX() {
    console.log(x);
}
displayX();

console.log(`
Here, we declared variable x outside of the function, and because of this, when we called the function it was logged to the console.
Remember, this variable can be corrupted by outside influences, other pieces of code.

An example of local scope:`);
//let hello = "beef";
function displayHello() {
    let hello = "beef";
    console.log(hello);
}
displayHello()

console.log(`
More about scope here:
https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript`);

//LET, AND VAR SCOPE
console.log(`
LET, VAR AND SCOPE
Let and Var act differently within scope.
Var is scoped to the enclosing function (and any sub-blocks of code).
Let is scoped to the enclosing block of code and (any sub-blocks)`);

function varScope() {
    var theAnswer = 42;
    if (true) {
        var theAnswer = "Life, the universe and everything";
        console.log(theAnswer);
    } 
    console.log(theAnswer);
}
varScope();
console.log(`
We have declared the variable as "theAnswer = 42" within the function varScope(). It is scoped to this function.
As it is scoped to this function, when we redeclare it inside the if block of code, we change the value of the
original variable (42) to "Life, the universe and everything"
Thus, with each console.log, they both give the answer as the new, reassigned variable.`);

function letScope() {
    let thisAnswer = 42;
    if (true) {
        let thisAnswer = "Life, the universe and everything";
        console.log(thisAnswer);
    }
    console.log(thisAnswer);
}
letScope();
console.log(`
We have declared the variable using let as "thisAnswer = 42" within the function letScope().
The vairable is now scoped to this block of code. So, when we reassign it as "Life etc" inside the sub-block, the new assignation 
only carries across when it is called WITHIN that sub-block.
Hence, depending on where the command to console.log is situated, the logged results will differ.`);


console.log(`Challenge global scope
https://repl.it/@JustinSawyer/JavascriptFundamentalsFSGlobalScope1#main.js
https://repl.it/@JustinSawyer/JavascriptFundamentalsFSLocalScope2#main.js`);