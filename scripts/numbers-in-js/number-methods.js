/*console.log(`"NUMBER METHODS"`);
console.log((3/0), ("Hi"/0), (-3/0));

//NUMBER METHODS
//object.nameOfTheMethod(argument);
//sun.isShining(value);
//Number.isMultiplied(byArgument);
//But, we are telling the computer to do take an OBJECT - the number - and perform a METHOD - an action - by the ARGUMENT;
//So, Number.isMultipliedBy(4); would be Number*4 (Object "Number" has Method "isMultipliedBy" the Argument "4")

    // changes a string to an INTEGER (whole number)
console.log((Number.parseInt("10")), (Number.parseInt("3.14")), (Number.parseInt("Hi")));
        // Take the string with value (" ") and parse it into a Number

    // changes a string to a FLOATING POINT NUMBER (deimal)
console.log ((Number.parseFloat("10")), (Number.parseFloat("3.14")), (Number.parseFloat("Hi")));
        // Take the string with value (" ") and parse it into a Floating Point Number

    // changes an INTEGER to a STRING
    // notice that the number has to first be declared as a variable.
let myNum = 10
console.log(myNum.toString());
    // changes a FLOATING POINT NUMBER to a string, keeping () number of decImals
console.log((7.7896675646467578678.toFixed(5)), (1.0.toFixed(10)));

    //is a real number?
console.log((Number.isFinite(123)), (Number.isFinite(-Infinity)));

    //is Nan?
console.log(Number.isNaN(3/0));
        // returns false becuase it is Infinity
console.log((Number.isNaN(0/0)), (Number.isNaN("a" + 3)));

    //is an Integer (whole number)?
console.log((Number.isInteger(3)), (Number.isInteger(3.2)), (Number.isInteger("a")));*/

//Number.parseInt()
//1
function parsingIntegers() {
    let arrayIntegersAsString = ["1", "2", "3"];
    alert(arrayIntegersAsString[0] + ` which is a ` + typeof(arrayIntegersAsString[0]));   
    alert(Number.parseInt(arrayIntegersAsString[0]) + ` which is a ` + (typeof(Number.parseInt(arrayIntegersAsString[0]))));
    document.getElementById("resultParsing1").innerText = `function parsingIntegers() {
    let arrayIntegersAsString = ["1", "2", "3"];
    alert(arrayIntegersAsString[0] + " which is a " + typeof(arrayIntegersAsString[0]));   
    alert(Number.parseInt(arrayIntegersAsString[0]) + " which is a " + (typeof(Number.parseInt(arrayIntegersAsString[0]))));
}`;
}

//2
function parsingDecimals() {
    let arrayDecimalsAsString = ["2.07", "3.14", "4.21"];
    alert(arrayDecimalsAsString[1] + ` which is a ` + typeof(arrayDecimalsAsString[1]));   
    alert(Number.parseInt(arrayDecimalsAsString[1]) + ` which is a ` + (typeof(Number.parseInt(arrayDecimalsAsString[1]))) + `.

parseInt returns integers (whole numbers).`);
    document.getElementById("resultParsing2").innerText = `function parsingDecimals() {
    let arrayDecimalsAsString = ["2.07", "3.14", "4.21"];
    alert(arrayDecimalsAsString[1] + " which is a " + typeof(arrayDecimalsAsString[1]));   
    alert(Number.parseInt(arrayDecimalsAsString[1]) + " which is a " + (typeof(Number.parseInt(arrayDecimalsAsString[1]))));
}`;
}

//3
function parsingText() {
    let arrayText = ["Hi", "Hey", "Hello"];
    alert(arrayText[2] + ` which is a ` + typeof(arrayText[2]));   
    alert(Number.parseInt(arrayText[2]) + ` which is a ` + (typeof(Number.parseInt(arrayText[2]))) + `

As you cannot transform text into a number the result returned is NaN (Not a Number).`);
    document.getElementById("resultParsing3").innerText = `function parsingText() {
    let arrayText = ["Hi", "Hey", "Hello"];
    alert(arrayText[2] + " which is a " + typeof(arrayText[2]));   
    alert(Number.parseInt(arrayText[2]) + " which is a " + (typeof(Number.parseInt(arrayText[2]))));
}`;
}

//Number.parseFloat()
//1
function parsingIntegersAsFloats() {
    let arrayIntegersAsFloats = ["1", "2", "3"];
    alert(arrayIntegersAsFloats[0] + ` which is a ` + typeof(arrayIntegersAsFloats[0]));   
    alert(Number.parseInt(arrayIntegersAsFloats[0]) + ` which is a floating point ` + (typeof(Number.parseInt(arrayIntegersAsFloats[0]))));
    document.getElementById("resultParsingFloat1").innerText = `function parsingIntegersAsFloats() {
    let arrayIntegersAsFloats = ["1", "2", "3"];
    alert(arrayIntegersAsFloats[0] + " which is a " + typeof(arrayIntegersAsFloats[0]));   
    alert(Number.parseInt(arrayIntegersAsFloats[0]) + " which is a floating point " + (typeof(Number.parseInt(arrayIntegersAsFloats[0]))));
}`;
}

//2
function parsingFloats() {
    let arrayDecimalsAsFloatingString = ["2.07", "3.14", "4.21"];
    alert(arrayDecimalsAsFloatingString[1] + ` which is a ` + typeof(arrayDecimalsAsFloatingString[1]));   
    alert(Number.parseFloat(arrayDecimalsAsFloatingString[1]) + ` which is a floating point ` + (typeof(Number.parseFloat(arrayDecimalsAsFloatingString[1]))));
    document.getElementById("resultParsingFloat2").innerText = `function parsingDecimals() {
    let arrayDecimalsAsFloatingString = ["2.07", "3.14", "4.21"];
    alert(arrayDecimalsAsFloatingString[1] + " which is a " + typeof(arrayDecimalsAsFloatingString[1]));   
    alert(Number.parseFloat(arrayDecimalsAsFloatingString[1]) + " which is a floating point " + (typeof(Number.parseFloat(arrayDecimalsAsFloatingString[1]))));
}`;
}

//3
function parsingTextAsFloat() {
    let arrayTextAsFloat = ["Hi", "Hey", "Hello"];
    alert(arrayTextAsFloat[2] + ` which is a ` + typeof(arrayTextAsFloat[2]));   
    alert(Number.parseFloat(arrayTextAsFloat[2]) + ` which is a ` + (typeof(Number.parseFloat(arrayTextAsFloat[2]))) + `

As you cannot transform text into a number the result returned is NaN (Not a Number).`);
    document.getElementById("resultParsingFloat3").innerText = `function parsingTextAsFloat() {
    let arrayTextAsFloat = ["Hi", "Hey", "Hello"];
    alert(arrayTextAsFloat[2] + " which is a " + typeof(arrayTextAsFloat[2]));   
    alert(Number.parseFloat(arrayTextAsFloat[2]) + " which is a " + (typeof(Number.parseFloat(arrayTextAsFloat[2]))));
}`;
}

//Number.is?()
//1
function isItFinite() {
    alert(Number.isFinite(123) + `
    
Returns true as 123 is a number.`);
    document.getElementById("resultCheckNumber1").innerText = `function isItFinite() {
    alert(Number.isFinite(123));
}`
}

//2
function isItFinite2() {
    alert(Number.isFinite("123") + `
    
Returns false as "123" is a "string".`);
    document.getElementById("resultCheckNumber2").innerText = `function isItFinite2() {
    alert(Number.isFinite("123"));
}`
}

//3
function isItInt() {
    alert(Number.isInteger(3) + `
    
Returns true as 3 is a number.`);
    document.getElementById("resultCheckNumber3").innerText = `function isItInt() {
    alert(Number.isInteger(3));
}`
}

//4
function isItInt2() {
    alert(Number.isInteger(3.14) + `
    
Returns false as 3.14 is not a whole number.`);
    document.getElementById("resultCheckNumber4").innerText = `function isItInt2() {
    alert(Number.isInteger(3.14));
}`
}

//5
function isItInt3() {
    alert(Number.isInteger("3.14") + `
    
Returns false as "3.14" is not a whole number.`);
    document.getElementById("resultCheckNumber5").innerText = `function isItInt2() {
    alert(Number.isInteger("3.14"));
}`
}

//6
function isItNaN() {
    alert(Number.isNaN(3) + `
    
Returns false because 3 is NOT a NaN. It is a number!`);
document.getElementById("resultCheckNumber6").innerText = `function isItNaN() {
    alert(Number.isNaN(3));
}`
}

//7
function isItNaN2() {
    alert(Number.isNaN("3") + `
    
Returns false because "3" is not a NaN. It is a number!`);
document.getElementById("resultCheckNumber7").innerText = `function isItNaN2() {
    alert(Number.isNaN("3"));
}`;
    document.getElementById("notTheResult1").innerHTML = `<div class="row">
                                                                <div class="col-9">
                                                                    <p>Not the result you expect?</p>
                                                                </div>
                                                                <div class="col-3" style="text-align:right; padding:0;">
                                                                    <button onclick="whyNot1()">Why Not?</button>
                                                                </div>
                                                            </div>
                                                            </div>`;
}

//8
function isItNaN3() {
    alert(Number.isNaN("Hello") + `

Returns false because "Hello" is not a NaN.`);document.getElementById("resultCheckNumber8").innerText = `function isItNaN3() {
    alert(Number.isNaN("Hello"));
}`
    document.getElementById("notTheResult2").innerHTML = `<div class="row">
                                                                <div class="col-9">
                                                                    <p>Not the result you expect?</p>
                                                                </div>
                                                                <div class="col-3" style="text-align:right; padding:0;">
                                                                    <button onclick="whyNot2()">Why Not?</button>
                                                                </div>
                                                            </div>
                                                            </div>`;
}

//WhyNot1
function whyNot1() {
    document.getElementById("whyNot1").innerHTML = `Although it is a <code>"string"</code>, JavaScript still recognises that this is a number.`;
}

//WhyNot2
function whyNot2() {
    document.getElementById("whyNot2").innerHTML = `Number.isNaN() should be used in binary operations, such as (a*3).`;
    let a;
    alert(`"let a;
Number.isNaN(a*3)"
` + Number.isNaN(a*3) + `: a multiplied by 3 is NaN`);
}

//variable.toString()
//1
function integerToStrNull() {
    //1.toString();
    alert(`"Uncaught SyntaxError: Invalid or unexpected token"
    
You cannot transform an integer directly into a string.`);
document.getElementById("resultToVariableToString1").innerText = `function integerToStrNull() {
    1.toString();
}`;
}

//2
function integerToStr() {
    let a = 1;
    alert(a + ` which is a ` + typeof(a));
    let b = a.toString();
    alert(b + ` which is a ` + typeof(b) + `

It has to be assigned as a variable.`);
    document.getElementById("resultToVariableToString2").innerText = `function integerToStr() {
    let a = 1;
    alert(a + " which is a " + typeof(a));
    let b = a.toString();
    alert(b + " which is a " + typeof(b));
}`;
}

//variable.toFixed()
//1
function floatToFixedNone() {
    let x = 3.1415926
    let y = x.toFixed(0);
    alert(x +` which is a ` + typeof(x));
    alert(y + ` which is a ` + typeof(y) + ` with 0 decimal places.`);
    document.getElementById("resultToFixed1").innerText = `function floatToFixedNone() {
    let x = 3.1415926
    let y = x.toFixed(0);
    alert(x + " which is a " + typeof(x));
    alert(y + " which is a " + typeof(y) + " with 0 decimal places");
}`;
}

//2
function floatToFixedFour() {
    let x = 3.1415926
    let y = x.toFixed(4);
    alert(x +` which is a ` + typeof(x));
    alert(y + ` which is a ` + typeof(y) + ` with 4 decimal places.`);
    document.getElementById("resultToFixed2").innerText = `function floatToFixedFour() {
    let x = 3.1415926
    let y = x.toFixed(4);
    alert(x + " which is a " + typeof(x));
    alert(y + " which is a " + typeof(y) + " with 4 decimal places");
}`;
}

//3
function floatToFixedTen() {
    let x = 3.1415926
    let y = x.toFixed(10);
    alert(x +` which is a ` + typeof(x));
    alert(y + ` which is a ` + typeof(y) + ` with 10 decimal places.`);
    document.getElementById("resultToFixed3").innerText = `function floatToFixedTen() {
    let x = 3.1415926
    let y = x.toFixed(10);
    alert(x + " which is a " + typeof(x));
    alert(y + " which is a " + typeof(y) + " with 10 decimal places");
}`;
}
