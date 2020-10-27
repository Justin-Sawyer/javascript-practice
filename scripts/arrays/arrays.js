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
