//NESTED LOOPS
console.log(`
Nested Loops
These are ideal for getting indices out of nested arrays

for (statement 1; statement 2; statement 3) {
	code block to be executed
		for (statement 4; statement 5; statement 6) {
			code block to be executed
		}
}

To get the first level indices from the array, we can use a normal loop:

Remember, if we do not declare variable i, then we just get a list of index NUMBERS from the array, thus:
For loop:`)

let a = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];

for (i=0; i<a.length; i++) {
    console.log(i);
}

console.log(`
For... in loop:
displays indices as numbers`);
/*for (let i in a) {
    console.log(i);
}*/

console.log(`
For... of loop:
displays contents of each subarray because we've told the code that b is OF a`);
/*for (let b of a) {
    console.log(b);
}*/

console.log(`
So, lets declare the variable and tell it to get the indices from the array.

For loop:`);
for (i=0; i<a.length; i++) {
    console.log(a[i]);
}

console.log(`
For... in loop:`);
/*for (let i in a) {
    console.log(a[i]);
}*/

console.log(`
For... of loop:
Because we've told the code that b is OF a, we don't need to repeat this as log(a[b])`);
/*for (let b of a) {
    console.log(b);
}*/

console.log(`
To get to the second level array (the array within the array), we need a second level loop (a loop within a loop:
    
For loop:
https://repl.it/@JustinSawyer/PracticalAustereAbandonware#script.js
From a for loop, depending on the level we nest into we can get each element alone, each element within its subarray and the original array.
But note the difference from how we extract them to the for... of array.

For... in loop:
https://repl.it/@JustinSawyer/ImpishUnknownRobots#script.js
From a for... in loop, because the first level (level zero) is IMPLIED (because IN), we cannot extract each element alone.
BUT we can get the nested elements in various different ways.

For... of loop:
https://repl.it/@JustinSawyer/WigglySparseNlp#script.js
From a for... of loop, depending on the level we nest into we can get each element alone, each element within its subarray and the original array.
But note the difference from how we extract them to the for array.

CHALLENGES:
https://repl.it/@JustinSawyer/JavascriptFundamentalsBCNestedLoops1#main.js
https://repl.it/@JustinSawyer/JavascriptFundamentalsBCNestedLoops2-2

Infinite Loops
Normally arise from bad coding. Try to avoid them`);

//-----------------------------------------------------------------------------------------------------------------
//For loop dogs albums:
(function nestedLoop() {
    document.getElementById("nestedLoop").innerText = `for (statement 1; statement 2; statement 3) {
        code block to be executed
    for (statement 4; statement 5; statement 6) {
        code block to be executed
    }
}`;
})();


(function forLoopAllDogsAlbums() {
    console.log(`

List all albums in each of their arrays:
`);
    let i;
    let text = "";
    let allDogsAlbums = [["The State We're In"], ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"], ["Happy Ever After", "Let Sleeping Dogs Lie", "When Bastards Go To Hell"], ["Swinging The Bottles... The BBC Sessions"]];
    for (i = 0; i < allDogsAlbums.length; i++) {
        console.log(allDogsAlbums[i]);
        text += "[" + allDogsAlbums[i] + "]<br><br>";
    };
    document.getElementById("forLoopAllDogsAlbums").innerHTML = text;
    document.getElementById("resultIndex0").innerText = `[${allDogsAlbums[0]}]`;
    document.getElementById("resultIndex1").innerText = `[${allDogsAlbums[1]}]`;
    document.getElementById("resultIndex2").innerText = `[${allDogsAlbums[2]}]`;
    document.getElementById("resultIndex3").innerText = `[${allDogsAlbums[1]}]`;
    
})();

function seeTheCode() {
    document.getElementById("theCode").innerText = `let i;
let text = "";
let allDogsAlbums = [["The State We're In"], ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"], ["Happy Ever After", "Let Sleeping Dogs Lie", "When Bastards Go To Hell"], ["Swinging The Bottles... The BBC Sessions"]];
    for (i = 0; i < allDogsAlbums.length; i++) {
        console.log(allDogsAlbums[i]);
        text += "[" + allDogsAlbums[i] + "]<br><br>";
    };
    document.getElementById("forLoopAllDogsAlbums").innerHTML = text;`;
}

(function allDogsAlbumsNestedLoop() {
    let allDogsAlbums = [["The State We're In"], ["(Un)authorised Bootleg Album", "Dynamite Jet Saloon", "Errol Flynn", "Straight", "More Unchartered Heights Of Disgrace"], ["Happy Ever After", "Let Sleeping Dogs Lie", "When Bastards Go To Hell"], ["Swinging The Bottles... The BBC Sessions"]];
    let i;
    let j;
    for (i = 0; i < allDogsAlbums.length; i++) {
        for (j = 0; j < allDogsAlbums[i].length; j++) {
            console.log(j);
            //alert(j);
            //document.getElementById("resultNestedLoop").innerHTML += allDogsAlbums[i] + j + "<br>";
        }
    }
})();


