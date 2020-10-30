console.log(`\n "ARRAYS"`);
console.log(`This is an array: var = [1, 2, "hello"] Notice the square brackets`);

    //"new" Arrays can be constructed with "new Array()
console.log(`let cities = new Array("London", "Hong Kong", "Paris")`);
let cities = new Array("London", "Hong Kong", "Paris");
console.log(cities);
    //Access an item in the array:
console.log((cities[1]), `access an item in the array: console.log(cities[x])`);
    //get indes of:
console.log(cities.indexOf("Hong Kong"), `get index of: console.log(cities.indexOf("x"))`);

myArray = ["one", "two", 3, 4, true, "true", false, "false"];
let myNewArray = new Array(1, 2, "three", "four");

function accessMyArray() {
    document.getElementById("access").innerText = `myArray[3];
` + myArray[3] + `

myNewArray[3];
` + myNewArray[3];
}

function indexMyArray() {
    document.getElementById("index").innerText = `myArray.indexOf(4);
` + myArray.indexOf(4) + `

myNewArray.indexOf("four");
` + myNewArray.indexOf("four");
    document.getElementById("note").innerHTML = `Note that we get the value of an <code>[array]</code>'s content using [], while we get its position in the <code>[array]</code> using ()`
}

//Values
function valueMyArray() {
    document.getElementById("value").innerText = `myArray.valueOf();
${myArray.valueOf()}`;
}

//Type of value
function typesMyArray() {
    document.getElementById("types").innerText = `typeof(myArray[0]);
${typeof(myArray[0])}

typeof(myArray[1]);
${typeof(myArray[1])}

typeof(myArray[2]);
${typeof(myArray[2])}

typeof(myArray[3]);
${typeof(myArray[3])}

typeof(myArray[4]);
${typeof(myArray[4])}

typeof(myArray[5]);
${typeof(myArray[5])}

typeof(myArray[6]);
${typeof(myArray[6])}

typeof(myArray[7]);
${typeof(myArray[7])}

typeof(myArray[8]);
${typeof(myArray[8])}

(Zero indexing!)`;
}

//Is array? T or F
function isArrayMyArray() {
    document.getElementById("isArray").innerText = `Array.isArray(myArray);
${Array.isArray(myArray)}`;
}

//Entries - give key/value
function entriesMyArray() {
    let fr = myArray.entries()
    for (x of fr) {
        document.getElementById("note4").innerHTML += x + "<br>";
    };
    document.getElementById("entries").innerText = `let fr = myArray.entries()
    for (x of fr) {
        document.getElementById("entries").innerHTML += x + "<br>"
    }`
}

//forEach
function forEachMyArray() {
    document.getElementById("forEach").innerText = `myArray.forEach(aFunction);
    function aFunction(item, index) {
    document.getElementById("forEach").innerHTML += index + ":" + item + "<br>";
    };`

    myArray.forEach(aFunction);
    function aFunction(item, index) {
    document.getElementById("note5").innerHTML += index + ":" + item + "<br>";
    };
}

//keys
function keysMyArray() {
    document.getElementById("keys").innerText = `let myArrayKeys = myArray.keys();
    for (x of myArrayKeys) {
    document.getElementById("keys").innerHTML += x + "<br>";
};`

    let myArrayKeys = myArray.keys();
    for (x of myArrayKeys) {
    document.getElementById("note6").innerHTML += x + "<br>";
}
}

//Constructor
function constructorMyArray() {
    document.getElementById("constructor").innerHTML = `myArray.constructor
${myArray.constructor}

Returns 
function Number() { [native code] } for Numbers,
function String() { [native code] } for Strings`
;
}

//length
function lengthMyArray() {
    document.getElementById("length").innerText = `myArray.length;

${myArray.length}`;
}

//indexOf
function indexMyArray() {
    let x = myArray.indexOf("true");
    document.getElementById("indexOf").innerText = `let x = myArray.indexOf("true");
x;
${x}

myArray.indexOf("true");
${myArray.indexOf("true")}`;
    document.getElementById("note9").innerText = `(First example is if you want return the index to a variable. Second is just to get the index of.)
    
`
}

//indexOf
function lastIndexMyArray() {
    let x = myArray.lastIndexOf("true");
    document.getElementById("lastIndexOf").innerText = `let x = myArray.lastIndexOf("true");
x;

${x}`
}

//toString
function toStringMyArray() {
    let x = myArray.toString();
    document.getElementById("toString").innerText = `let x = myArray.toString();
x;

${x}`;
    document.getElementById("note11").innerText = `Use either "typeof() or .constructor to see the difference:
typeof(myArray);
    ${typeof(myArray)}
typeof(x);
    ${typeof(x)}

myArray.constructor;
    ${myArray.constructor}
x.constructor;
    ${x.constructor}`
}

//join
function joinMyArray() {
    let x = myArray.join(" ");
    let y = myArray.join("with the blues in the night");
    let z = myArray.join();
    document.getElementById("join").innerText = `let x = myArray.join(" ");
x;
${x}

let y = myArray.join("with the blues in the night");
y;
${y}

Default:
let z = myArray.join();
z;
${z}`;
    document.getElementById("note12").innerText = `Use either "typeof() or .constructor to see the difference:
typeof(myArray);
    ${typeof(myArray)}
typeof(x);
    ${typeof(x)}
typeof(y);
    ${typeof(y)}
typeof(z);
    ${typeof(z)}

myArray.constructor;
    ${myArray.constructor}
x.constructor;
    ${x.constructor}
y.constructor;
    ${y.constructor}
z.constructor;
    ${z.constructor}`
}

function why1() {
    document.getElementById("why1a").innerHTML = `<p>To manipulate data!</p>
<p>If I want to make a database of names from a sentence (<code>"string"</code>):</p>
<p>"My name is Justin Sawyer":</p>
<p>I can transform the string into an array and then find the key/values for each individual element (word) in the <code>[array]</code></p>`;

    let nameString = "My name is Justin Sawyer";
    let nameArray = nameString.split(" ");
    let firstName = nameArray[3];
    let secondName = nameArray[4];
    document.getElementById("why1b").innerText = `let nameString = "My name is Justin Sawyer";
nameString;
${nameString}

nameString.constructor;
${nameString.constructor}

let nameArray = nameString.split(" ");
${nameArray}

nameArray.constructor;
${nameArray.constructor}

let firstName = nameArray[3];
let secondName = nameArray[4];

firstName;
${firstName}

secondName;
${secondName}`;
}
