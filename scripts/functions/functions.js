//FUNCTIONS
console.log(`
FUNCTIONS
Allow you to cycle to the shops without having to build a bicycle each time you go.
Write the code once, turn it into a function and then reuse the function whenever needed

Remember, there is a difference between "let x = function()" and "function x()".
See here: https://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname

function muliply(a, b) {
    return a*b;
}

Here, we have a function called multiply with two arguments, a and b.
Inside the function, we tell it to execute (return) "a muliplid by b"
Now we close the function.

We choose our variables for the arguments, say 10 and 2, and we insert them thus:

multiply(10, 2);`);

function multiply(a, b) {
    return a*b;
}
console.log(multiply(10, 2));

function volumeCube(a, b, c) {
    return a*b*c;
}
console.log(volumeCube(2, 3, 6));

function volumeCircle(r) {
    return (r*r)*3.14;
}
console.log(volumeCircle(2));

//Function declarations
console.log(`
Funcion declarations:
function functionName(parameter(s)) { code to be executed }

In the following example, notice how the code returns hi in the console just by being called. This is because we
console.logged it WITHIN the code.`)

function hello(){
	console.log("hi!");
}
hello();

console.log(`and note how in the following example, the code runs 'hi!' within the function but when we call it outside of the function, 
it returns "undefined"`)
function hello(){
	console.log("hi!");
}
console.log(hello());

console.log(`and in this example, the result is NaN, because we're not declaring the arguments. 
Instead, we're declaring variables within the function.`)
function timesBy() {
    let a;
    let b;
    return a*b;
}
console.log(timesBy(2, 3));

console.log(`
Naming functions:
name them descriptively and sensibly.`);

//PARAMETERS
console.log(`
PARAMETERS
The parameters what allow us to pass arguments into the function.
In the first exampke above, multiply(a, b) where a and b are the parameters.
When we exectute the function, we pass in arguments in the place of these parameters:
"console.log(multiply(10, 2);"
Within the function itself, these parameters act as variables.

Lets write this out to the console:
function multiply(a, b) {
    console.log("value a outside the function is called a parameter, while within it, it is the declared variable.
    The values we use when we call the function are its arguments, and they take the place of these declared variable. In this case,
    the argument is" + a);
    console.log("value b outside the function is called a parameter, while within it, it is the declared variable.
    The values we use when we call the function are its arguments, and they take the place of these declared variable. In this case,
    the argument is" + b);
    return a*b;
}
console.log(multiply(10, 2));`)

function multiply(a, b) {
    console.log(`Value a outside the function is called a parameter, while within it, it is the declared variable.
    The values we use when we call the function are its arguments, and they take the place of these declared variable. 
    In this case, the argument is ` + a);
    console.log(`Value b outside the function is called a parameter, while within it, it is the declared variable.
    The values we use when we call the function are its arguments, and they take the place of these declared variable. 
    In this case, the argument is ` + b);
    return a*b;
}
console.log(multiply(10, 2));

//DEFAULT PARAMETER
console.log(`
sets the parameter if the parameter is undefined, or if no other value is passed.
Ideal for constants such as Pi, or when we want to be sure that this particular parameter is not changed.
Note that if we state log(areaOfCirlce(2, b)), b will be returned as undeclared.
So, to measure the area of a circle, Pi(r^2):`)

function areaOfCircle(a, b=3.14159) {
    return (a**2)*b;
}
console.log(areaOfCircle(6));

console.log(`
However, if you declare argument b (console.log(areaOfCircle(6, 2) then the parameter b is overwritten:`);

console.log(areaOfCircle(6, 2), `

Challenges:
https://repl.it/@JustinSawyer/JavascriptFundamentalsFNFunctions1#main.js
https://repl.it/@JustinSawyer/JavascriptFundamentalsFNParamsAndArguments2#main.js
(Swap alert and return and see the difference.
    It seems that if we return something first, we are coming out of the console and cannot get back in
    
Calling Functions:
Look at all the examples above . For each, we have needed to call the function for it to execute.
If we don't call it, nothing happens.

Calling the function is simply naming it (and its parameters if needed) outside of the function code block itself.
If we "alert" inside the function, we can just call it.
If we execute code but don't alert within the function, we need to alert it outside:`);

function areaTriangle(a, b, c) {
    alert(a*b*(c/2));
}
areaTriangle(3, 4, 8);

function volumePyramid(l, w, h) {
    return (l*w*h)/2;
}
alert(volumePyramid(5, 5, 7));

console.log(`
Return
Similarly, if we don't tell the function WHAT to do, then nothing will happen:
function add(a, b) {
    a+b;
}
console.log(add(1, 2));
will return "undefined".

Return will always mean that the code does something. It will also stop infinite loops!`)

function add(a, b) {
    a+b;
}
console.log(add(1, 2));

let i = 0;
function loop() {
	for (i; i < 1; i--) {		
		if (i === -3) {
			return i;
		}		
	}
}
console.log(loop());

console.log(`
Challenge:
https://repl.it/@JustinSawyer/calling-a-function#script.js`);