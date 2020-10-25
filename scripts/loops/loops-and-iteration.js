//LOOPS AND ITERATION
console.log(`
"LOOPS AND ITERATION
Loops are the repetition of operaions
Iteration is doing the same step over and over again
so
step.forward(5) until home
means to keep stepping forward 5 paces until getting home

FOR LOOPS
for (statement1; statement2; statement3) {
    code block to be executed
}

instead of writing 
console.log("I am so happy"); ten times, we can:
for (let i = 0; i < 10; i++) {
    console.log("I am so happy"),
}
Statement1 (i = 0) declares variable i and tells computer where to start counting from, in this case the beginning;
Statement2 (i < 10) tells computer to carry on until 10th iteration;
Statement3 (i++) tells computer to go up one step with each time the code is run
    Statement3 could be (i = i + 2), (i--)`);

let i;
for (i=0; i<20; i++) {
    console.log(`ì will stop at one less than 20 ` + i)
}
console.log(`i out of the loop:` + i);


for (i=0; i<20; i=i+2) {
    console.log(`ì will stop at one less than 20 ` + i)
}
console.log(`i out of the loop:` + i);

for (i=20; i>0; i--) {
    console.log(`i will stop at zero ` + i);
}

for (i=20; i>0; i=i-2) {
    console.log(`i will stop at zero but go down in pairs ` + i);
}

//Iteration
console.log(`
Iteration
Just as we can get the indices (elements of an array) using array[0], 
we can use iteration to get all of the elements from an array.
Remember, you'll need to tell the code to stop at the end of the array, using "i<array.length" 
otherwise you'll create an infinite loop.

We create the array. Then use the for loop:
let sportsArray = ["Ping pong", "F1", "Badminton", "Wrestling"];
the define the loop
for (i=0; i<sportsArray.length; i++) {
    then tell the code to look for all indeces in the array
    console.log(sportsArray[i]);
}`);

let sportsArray = ["Ping pong", "F1", "Badminton", "Wrestling"];
for (i=0; i<sportsArray.length; i++) {
    console.log(sportsArray[i]);
}

console.log(`https://repl.it/@JustinSawyer/JavascriptFundamentalsLIForLoops1#main.js`);

//For... In Loops
console.log(`
For.. In Loops
an easier way to get the indices from a loop

define the array
for(let i in array) {
    console.log(array[i];
    }`)

for (let i in sportsArray) {
    console.log(sportsArray[i]);
}

//FOR... OF LOOPS
console.log(`
For... Of Loops
allows us to get the actual element from the array
define the array
then use the for... of loop just as in the case above
but we can rename the i to be anything so that its easier to read
then we can just call for the variable we've defined
thus:
for (let sport of sprtsArray) {
    console.log(sport);
}`);

for (let sport of sportsArray) {
    console.log(sport);
}

//WHILE LOOPS
console.log(`
While Loops
use "while" and set the condition in the (). Remember to add the last condition (the incrementor) or you'll get an infinite loop.`);
let j = 0;
while (j<10) {
    console.log("I am happy");
    console.log("j is: " + j + " and that is less than 10");
    j++;
}

console.log(`https://repl.it/@JustinSawyer/JavascriptFundamentalsLIWhileLoops1#main.js`);

//DO... WHILE LOOPS
console.log(`
Do... While Loops
run the code at least once even if the code block is false. 
In other words, it is run before it has been checked. 
The second condition (i<10, for example) comes after the block of code.`);
let k = 0;
do {
    console.log("I am happy");
    console.log(`k is ${k} and that is less than 10`);
    k++;
} while (k<10);

console.log(`The code is only checked to see if true (ie, (k<10) after the first running of the code.
if we set the variable k to be BIGGER than 10, the code will run once anyway:`);

let l= 10
do {
    console.log(`l is ${l} and that is less than 10`);
    l++;
} while (l<10);

console.log(`in other words variable l is incremented now to 11 but the code ran anyway

https://repl.it/@JustinSawyer/JavascriptFundamentalsLIDoWhileLoops1-1#main.js

Struggled with the while loops on this exercise:
https://repl.it/@JustinSawyer/JavascriptFundamentalsLIGeneralLI2-2#main.js

Great repl.its for reference:
https://repl.it/@JustinSawyer/break2
https://repl.it/@JustinSawyer/break3-with-igors-answers`);

