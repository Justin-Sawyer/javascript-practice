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
