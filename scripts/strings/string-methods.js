console.log(`\n\n"STRING METHODS"`);

console.log(`object.nameOfTheMethod(argument)`);

let myString = `This is variable "myString":
It was the 29th June 2020 that I was operated on, and first had to wear the bag. 
Now, it's the 29th September and tomorrow, I have the bag taken away!`
console.log(myString);

//.indexOf() finds the index of a character. It's position, in other words
console.log(myString.indexOf("o"), `This is the first instance, or index of the letter o.
It was discovered using 'myString.indexOf("o")`);

//.lastIndexOf() finds last instance of:
console.log(myString.lastIndexOf("t"), `myString.lastIndexOf("t")`);

//.slice(x,y) takes a section. Remember, JavaScript indexing starts at 0
console.log(myString.slice(67, 194), `myString.slice(67, 194) has returned a substring from position 67 to 194`);

//.toLowerCase()
console.log(myString.toLowerCase());

//toUpperCase()
console.log(myString.toUpperCase());

//.length
console.log(myString.length, `myString.length measures the length of the string.
Notice that after length, there are no brackets`);

//.repeat() concatenates, so you'll need a \n or word break (space) somewhere!
console.log(myString.repeat(2));

console.log("For more string methods : https://www.sitepoint.com/15-javascript-string-functions/");

//FUNCTIONS
let myLetter = `I went into hospital on the 29th June, 2020. 
A day later, I was operated on and had the colostomy bag attached 
to me. On the 30th September I went back to hospital, where, happily, 
they removed the colostomy bag. Now, I have just 4 months of 
preventive chemotherapy to do. I'm nearing the end of a bad year, now.`;
let imGlad = ` I'm glad I'm getting better!`;
let newImGlad = `I'm glad I'm getting better!`;
let im = "I'm";

//Index Of
function myLetterIndexOfo() {
    document.getElementById("indexOfo").innerText = `myLetter.indexOf("o");
` + myLetter.indexOf("o") + `

The first instance of the letter o is at position #11.
If the character does not appear in the string, a -1 is returned:

myLetter.indexOf("z");
` + myLetter.indexOf("z") + `

You can tell the index where to start looking, in this case from #35:

myLetter.indexOf("o", [35])
` + myLetter.indexOf("o", [35]);
}

//Last Index Of
function myLetterLastIndexOfo() {
    document.getElementById("lastIndexOfo").innerText = `myLetter.lastIndexOf("o")
    
` + myLetter.lastIndexOf("o") + `

The last instance of the letter o is at position #274.
-1 is returned if the character is not in the string.`;
}

//Slice
function myLetterSlice() {
    document.getElementById("slice").innerText = `myLetter.slice(24, 273);
    
`+ myLetter.slice(24, 273) + `

The string has been cut out from character #25 (thus for JavaScript's 
zero indexing, #24) and IS included in the result. However, note that 
#274 (JS #273) - the last instance of "o" in the previous example - is 
NOT included in the returned result.`;
}

//Character At #
function myLetterCharAt() {
    document.getElementById("charAt").innerText = `myLetter.charAt(0)
    
` + myLetter.charAt(0) + `

The first character (that is, at position #0) is the letter "I".`;
}

//Unicode Value For Character At #
function myLetterCharCodeAt() {
    document.getElementById("charCodeAt").innerHTML = `myLetter.charCodeAt(0)
    
` + myLetter.charCodeAt(0) + `

I has the unicode value of 73".

<a href="https://en.wikipedia.org/wiki/List_of_Unicode_characters" target="_blank">List of unicode values</a>`;
}

//Concatenation + ${}
function myLetterConcat() {
    let stringLitConcatCode = '${myLetter + "" + newImGlad}';
    document.getElementById("concat").innerText = `let imGlad = " I'm glad I'm geting better!";

myLetter.concat(imGlad)
    
` + myLetter.concat(imGlad) + `

imGlad has been added to the end of myLetter. 
Note that imGlad starts with a space!

We can eliminate the need for that space by using template literals:

` + stringLitConcatCode + `

let newImGlad = "I'm glad I'm getting better!"
` + `
${myLetter +  " " + newImGlad}`;
}

//Match values
function myLetterMatch() {
    document.getElementById("match").innerText = `let im = "I'm";

imGlad.match(im)
` + imGlad.match(im) + `

newImGlad.match(im)
` + newImGlad.match(im) + `

myLetter.match(im)
` + myLetter.match(im) + `

Looks for the contents of string im (that is, "I'm") inside the other strings.
Thus, 
imGlad.match(myLetter)
will return "null":
` + imGlad.match(myLetter);
}

//Search values
function myLetterSearch() {
    document.getElementById("search").innerText = `imGlad.search(im)
` + imGlad.search(im) + `

newImGlad.search(im)
` + newImGlad.search(im) + `

myLetter.search(im)
` + myLetter.search(im) + `

The following return -1 because the search is for the entire contents of the .search(string) within the string:

imGlad.search(newImGlad)
` + imGlad.search(newImGlad) + `

im.search(newImGlad)
` + im.search(newImGlad) + `

myLetter.search(newImGlad)
` + myLetter.search(newImGlad) + `

imGlad.search(myLetter)
` + imGlad.search(myLetter) + `

im.search(myLetter)
` + im.search(myLetter) + `

newImGlad.search(myLetter)
` + newImGlad.search(myLetter) + `

im.search(imGlad)
` + im.search(imGlad) + `

newImGlad.search(imGlad)
` + newImGlad.search(imGlad) + `

myLetter.search(imGlad)
` + myLetter.search(imGlad);
}

//Replace
function myLetterReplace() {
    let myRevisedLetter = myLetter.replace(/hospital/, "prison");
    let mySecondRevisedLetter = myRevisedLetter.replace(/hospital/, "prison");
    let myNewLetter = myRevisedLetter.replaceAll("colostomy", "swag");
    document.getElementById("replace").innerText = `let myRevisedLetter = myLetter.replace(/hospital/, "prison");
let mySecondRevisedLetter = myRevisedLetter.replace(/hospital/, "prison");
let myNewLetter = myRevisedLetter.replaceAll("colostomy", "swag");

myRevisedLetter;
` + myRevisedLetter + `

mySecondRevisedLetter;
` + mySecondRevisedLetter + `

myNewLetter;
` +  myNewLetter;
}

//From... To
function myLetterFromTo() {
    document.getElementById("fromTo").innerText = `myLetter.substr(50);

` + myLetter.substr(50) + `

myLetter.substr(50,50); 

`+ myLetter.substr(50,50) + `

myLetter;

` + myLetter;
}

//Start... Length
function myLetterStartTo() {
    myLetter = myLetter.substr(50, 50);
    document.getElementById("startTo").innerText = `myLetter = myLetter.substr(50,50);
myLetter;
` + myLetter;

    document.getElementById("refresh-page").innerText = `PLEASE REFRESH THE PAGE BEFORE CONTINUING:
Because the variables were declared globally, the string "myLetter" has changed as it has been redeclared within this function. Click any of the preceding example buttons to verify.`;
}

//To Lower Case
function myLetterLowerCase() {
    document.getElementById("lowerCase").innerText = `myLetter.toLowerCase();

` + myLetter.toLowerCase();
}

//To Upper Case
function myLetterUpperCase() {
    document.getElementById("upperCase").innerText = `myLetter.toUpperCase();

` + myLetter.toUpperCase();
}

//Split
function myLetterSplit() {
    document.getElementById("split").innerText = `myLetter.split("");

` + myLetter.split("") + `

myLetter.split(" ");

` + myLetter.split(" ") + `

myLetter.split("30");

` + myLetter.split("30")
}

//repeat
function myLetterRepeat() {
    document.getElementById("repeat").innerText = `myLetter.repeat(2);

` + myLetter.repeat(2);
    //let newConcat = `${myLetter + " " + myLetter}`;
    document.getElementById("repeat2").innerText = `Note that there is no space between the join of the two strings.
    Concatenation would be a better choce here:`;
    document.getElementById("repeat3").innerText = "${myLetter + ` ` + myLetter};" + `

` + `${myLetter + `

` + myLetter}`;
    document.getElementById("repeat4").innerText = `Above, the two strings were concatenated together with template literals and a new line escape,
Thus:`;
    document.getElementById("repeat5").innerHTML = "<p>${myLetter + `</p><br><p>` + myLetter}</p>";
}

function myLetterLength() {
    document.getElementById("length").innerText = `myLetter.length;

` + myLetter.length + `

imGlad.length;

` + imGlad.length + `

newImGlad.length;

` + newImGlad.length + `

im.length;

` + im.length;
}

function myLetterToArray() {
    let x = Array.from(myLetter);
    document.getElementById("array").innerText = `let x = Array.from(myLetter);
x;

${x}`;
    document.getElementById("note").innerText = `Use either typeof() or .constructor to see the difference:
typeof(myLetter);
    ${typeof(myLetter)}
typeof(x);
    ${typeof(x)}

myLetter.constructor;
    ${myLetter.constructor}
x.constructor;
    ${x.constructor}`;
}

function why1() {
    let x = [1, 2, 3];
    let y = x.join(" is smaller than ");
    document.getElementById("why1a").innerText = `To manipulate data!`;
    document.getElementById("why1b").innerText = `let x = [1, 2, 3];
let y = x.join(" is smaller than ");
x;
This is an array:
${x};
${x.constructor};
x[0] + " is smaller than " + x[1] + " is smaller than " + x[2];
${x[0]} is smaller than ${x[1]} is smaller than ${x[2]}

x.join(" is smaller than ");
This is a string:
${x.join(" is smaller than ")}
${y.constructor};
`;
    document.getElementById("why1c").innerHTML = `<p>With <code>[arrays]</code>, it is difficult to manipulate individual elements of items</p>        
<p>Example: capitalise the first letter of a word</p>
<p>To change the first letter of a word into a capital letter, you cannot use something like</p>
<p>.toUpperCaseFirstLetter</p>
<p>You need to change the <code>[array]</code> into a <code>"string"</code> so that it is possible to manipulate each element of each item.</p>
<br>`;
}



