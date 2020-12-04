(function example() {
    document.getElementById("example").innerText = `function checkTyla(name) {
    return name == "Tyla";
}

function checkCountUp(value) {
    return value &lt;= 5;
}

function reduceCountUp(total, num) {
  return total - num;
}` 
})();

let membersDogsDAmour = ["Tyla", "Bam Bam", "Jo Dog", "Steve James"];
let countUp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function checkTyla(name) {
    return name == "Tyla";
}

function checkCountUp(value) {
    return value <= 5;
}

function reduceCountUp(total, num) {
  return total - num;
}

//every
function everyDog() {
    document.getElementById("everyDog1").innerText = `Example 1: non numerical entries:
let membersDogsDAmour = ["Tyla", "Bam Bam", "Jo Dog", "Steve James"];

We tell THIS function to check every instance of the array using another function:

function checkTyla(name) {
    return name == "Tyla";
}

The function checkTyla() iterates through the array membersDogsDAmour looking for the name "Tyla". 
If ALL names are Tyla, the returned result will be true, as the function checks for EVERY instance.
If 1 item is not "Tyla", the result returned will be false

function everyDog() {
    membersDogsDAmour.every(checkTyla);
}
${membersDogsDAmour.every(checkTyla)}

Example 2: numerical entries:
let countUp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function checkCountUp(value) {
    return value <= 5;
}
function checkValue() {
    countUp.every(checkCountUp);
}
${countUp.every(checkCountUp)}
`;
}

//filter
function filterDogs() {
  document.getElementById("filter").innerHTML = `${membersDogsDAmour.filter(checkTyla)}
${countUp.filter(checkCountUp)}`;
}

//some
function someDogs() {
  document.getElementById("some").innerHTML = `${membersDogsDAmour.some(checkTyla)}
${countUp.some(checkCountUp)}`;
}

//find
function findDogs() {
    document.getElementById("find").innerHTML = `${membersDogsDAmour.find(checkTyla)}
${countUp.find(checkCountUp)}`;
}

//findIndex
function findIndexDogs() {
    document.getElementById("findIndex").innerHTML = `${membersDogsDAmour.findIndex(checkTyla)}
${countUp.findIndex(checkCountUp)}`;
}

//reduce
function reduceDogs() {
    document.getElementById("reduce").innerHTML = `${countUp.reduce(reduceCountUp)}
    
array.reduce(function(currentValue, (index), (arr)), (thisValue));
countUp.reduce(reduceCountUp(total, ([0]), n/a), (num))
countUp.reduce(reduceCountUp(the first entry in the array = 1, ([0]), n/a), (minus 1, minus 2...))
1-2-3-4-5-6-7-8-9-10=-53`;
}

//reduceRight
function reduceRightDogs() {
    document.getElementById("reduceRight").innerHTML = `${countUp.reduceRight(reduceCountUp)}
    
array.reduceRight(function(currentValue, (index), (arr)), (thisValue));
countUp.reduceRight(reduceCountUp(total, ([0]), n/a), (num))
countUp.reduceRight(reduceCountUp(the last entry in the array = 10, ([0]), n/a), (minus 9, minus 8...))
10-9-8-7-6-5-4-3-2-1=-35`;
}

//map
function mapDogs() {
    let x = countUp.map(Math.sqrt);
    let newarray = countUp.map(myFunction)

    function myFunction(num) {
        return num * 10;
    }
    document.getElementById("map").innerText = `Without neeeding its own function:
let x = countUp.map(Math.sqrt);
x;
${x}

Needing its own function:
let newarray = numbers.map(myFunction)

function myFunction(num) {
return num * 10;
}
newarray;
${newarray}`;
}