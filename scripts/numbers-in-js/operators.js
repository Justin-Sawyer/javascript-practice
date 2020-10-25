//OPERATORS
console.log(`
"OPERATORS"
Boolean Operators
&& or ||
&& returns true ony if both sides are true
|| returns true if ONE side is true
! negates the output`);

console.log(true && false);
console.log(false && false);
console.log(false && true);
console.log(true && true);

console.log((5>1) && (3>1));
console.log((1>5) && (3>1), `returns false because one side of the argument is false.`);

console.log(true || false);
console.log(true || true);
console.log(false || true);
console.log(false || false);

console.log((10 < 5)|| (1 > 0), `returns true because one side of the argument is true.`);

console.log(!false, `console.log(!false) returns true`);
console.log(!true, `console.log(!true) returns false`);

console.log( !(10 > 5) && (5 > 0), `returns false because even if both sides are true, they have been negated by the !`);

// IF... ELSE
console.log(`\n
"If... Else"
    if (condition1) { 
        code that is executed if condition1 is true 
    } else { 
        code that is executed if condition1 is false }`);
    
if (2 > 3) {
    console.log("Two is greater than three");
} else {
    console.log("Three is greater than two");
};

if (2 < 3) {
    console.log("Two is smaller than three");
} else {
    console.log("Two is not smaller than three");
}

//ELSE... IF
console.log(`Else... If
    if (condition1) {
        is true condition1 block of code is exectute;
    } else if (condition2) {
        is true condition2 block of code is executed;
    } else {
        condtion3 (ie conditions1 & 2 are false) block of code is executed;
    }`);

if (2 > 1) {
    console.log("If statement is executed");
} else if (2 < 1) {
    console.log("Else... if statement is executed");
} else {
    console.log("Else statement is executed");
}

if (2 > 5) {
    console.log("If statement is executed");
} else if (2 > 1) {
    console.log("Else... if statement is executed");
} else {
    console.log("Else statement is executed");
}

if (2 > 5) {
console.log("If statement is executed!");
} else if (2 > 8) {
	console.log("Else... if statement is executed");
} else {
	console.log("Else statement is executed");
}

if (2 > 5) {
	console.log("If statement was executed!");
} else if (2 > 8) {
	console.log("else if statement was executed");
} else if (2 > 100) {
	console.log("second else if statement was executed");
} else if (2 > 10) {
	console.log("second else if statement was executed");
}  else {
	console.log("else statement was executed");
}

//BOOLEAN OPERATORS (If... Else)
console.log(`Boolean operators (if... else)`);

if ((2 > 1) && (3 > 2)) {
    console.log("True");
} else {
    HTMLFormControlsCollection.log("False");
}

let fruit1 = "banana";
let fruit2 = "orange";
if ((fruit1 === "banana") && (fruit2 === "orange")) {
    console.log("True! Yummy!");
}
if ((fruit1 === "apple") || (fruit2 === "orange")) {
    console.log("Also true because ONE side is true! Yummy. Note that in this case an else statement is not needed");
}
if ((fruit1 === "apple") && (fruit2 === "orange")) {
    console.log("True");
} else {
    console.log("An else statement is needed in this case");
}

//IF... Else example
console.log(`
let q = 5;
let r = 10;
let result;

if (q > r) {
    result = "5 is greater than 10";
} else {
    result = "10 is greater than 5";
}`);

let q = 5;
let r = 10;
let result;
if (q > r) {
    result = "5 is greater than 10";
} else {
    result = "10 is greater than 5";
}
console.log(result);

console.log("https://repl.it/@JustinSawyer/JavascriptFundamentalsOPERIfElse2#main.js");

//TERNARY OPERATOR
console.log(`
"TERNARY OPERATOR"
condition ? expression1: expression2
(the same as if (condition) { expression1 } else { expression2 })`);
console.log(`let age = 25;
if (age > 18) {
    console.log("You are so mature");
} else {
    console.log("You are still a child");
} 
BECOMES:`);
let age = 19;
(age > 18) ? console.log("You are so mature"): console.log("You are still a child");

//NESTED CONDITIONS
console.log(`
"Nested Conditions"
If condition within If conditions. 
If both are true, both will run. If first is false, the code completely ignores the second block of code`);

if (2 > 1) {
    console.log("Two is greater than one");
    if (3 > 2) {
        console.log("Three is greater than two");
    };
}

console.log(`if (2 > 1) {
    console.log("Two is greater than one");
    if (3 > 2) {
        console.log("Three is greater than two");
    };
} runs because the first condition is true.`);

if (1 > 3) {
    console.log("One is greater than three");
    if (100 > 0) {
        console.log("One hundred is greater than zero");
    } 
    }
    else {
        console.log("Neither ran because the first was false");
}

if (3 > 1) {
    console.log("If statement runs");
    if (1 > 3) {
        console.log("Nested if statement runs");
    } else {
        console.log("Nested else statement runs");
    } 
    } else {
        console.log("Regular else statement runs");
}

//SWITCH STATEMENTS
console.log(`
"Switch Statements
If else statements when many variables involved.
Use break and include a default anwser`);

let fruit = "pear";
switch (fruit) {
    case "apple": console.log("apple");
    break;
    case "orange": console.log("orange");
    break;
    case "lemon": console.log("lemon");
    break;
    case "banana": console.log("banana");
    break;
    case "pear": console.log("pear");
    break;
    default: console.log("none of the fruits");
}

console.log(`https://repl.it/@JustinSawyer/JavascriptFundamentalsOPERTernary1#main.js`);
console.log(`https://repl.it/@JustinSawyer/JavascriptFundamentalsOPERSwitch2#main.js`);


