//BREAK AND CONTINUE
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
    console.log(`i is ${i}`);
}

//This works but shows no i=0
//For... in loop
let bb = [0, 1, 2, 3, 4, 5];
for (let i in bb) {
    i++;
    if (i===3) {
        break;
    }
    console.log(`i is ${i}`);
}
//becasue I've not told where the loop should start, the i=0 is implied?

//This works
//For... of loop
for(let b of bb) {
    if (b===3) {
        break;
    }
    console.log(`b is ${b}`);
}

//-------------------------------------------------------
while (i<bb.length) {
  if (i===3) {
    break;
  }
  i++;
  console.log(`i is ${i}`);
}

//--------------------------------------------------------

//Continue
console.log(`
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
https://repl.it/@JustinSawyer/break-solutions#index.html`);


