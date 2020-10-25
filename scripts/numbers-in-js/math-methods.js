console.log(`\n\n"MATH OBJECTS"`);

//
console.log((Math.floor(1.1)), "1.1 floored to 1");
console.log((Math.ceil(1.1)), "1.1 ceiliinged to 2");
console.log((Math.round(1.4)), (Math.round(1.5)), (Math.round(1.6)), ("1.4, 1.5, 1.6 rounded"));
console.log((Math.trunc(4.1)), "4.1 truncated");
console.log((Math.sqrt(9)), "square root of 9");
console.log((Math.cbrt(27)), "cube root of 27");

console.log("For more Math Objects:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math");

function mathMethodFloor() {
    document.getElementById("mathMeth1").innerText = "1.9 floored to 1";
    document.getElementById("resultMathMeth1").innerHTML = `function mathMethodFloor() {
    Math.floor(1.9);
}

` + `Result = ` + Math.floor(1.9);
}

function mathMethCeil() {
    document.getElementById("mathMeth2").innerText = "1.1 rounded up to 2";
    document.getElementById("resultMathMeth2").innerHTML = `Result = ` + Math.ceil(1.1);
}

function mathMethRound() {
    document.getElementById("mathMeth3").innerText = "1.5 rounded to nearest integer";
    document.getElementById("resultMathMeth3").innerHTML = `Result = ` + Math.round(1.5);
}

function mathMethTrunc() {
    document.getElementById("mathMeth4").innerText = "1.6 truncated to nearest integer";
    document.getElementById("resultMathMeth4").innerHTML = `Result = ` + Math.round(1.6);
}

function mathMethSqrt() {
    document.getElementById("mathMeth5").innerText = "Square root of 9";
    document.getElementById("resultMathMeth5").innerHTML = `Result = ` + Math.sqrt(9);
}

function mathMethCbrt() {
    document.getElementById("mathMeth6").innerText = "Cube root of 27";
    document.getElementById("resultMathMeth6").innerHTML = `Result = ` + Math.cbrt(27);
}

function mathMethAbs() {
    document.getElementById("mathMeth7-1").innerText = `Absolute value of`;
    document.getElementById("mathMeth7-2").innerText = `An absolute value shows how far a number is away from zero.`;
    document.getElementById("resultMathMeth7").innerHTML = `Result = ` + Math.abs(-4) + `
Result = ` + Math.abs(4);
}

function mathMethSign() {
    document.getElementById("mathMeth8-1").innerText = `Negative or positive`;
    document.getElementById("mathMeth8-2").innerText = `-1 = negative number.
1 = positive number.`;
    document.getElementById("resultMathMeth8").innerHTML = `Result = ` + Math.sign(-9) + `
Result = ` + Math.sign(9);
}

function mathMethRandom() {
    document.getElementById("mathMeth9-1").innerText = `Random number between 0 and 1`;
    document.getElementById("mathMeth9-2").innerText = `Use other methods to scale up!`;
    document.getElementById("resultMathMeth9").innerHTML = `Result = ` + Math.random();
}

//Trigonometrical Math Methods
function mathMethSin() {
    document.getElementById("mathMeth10-1").innerText = `The sine of the given number.`;
    document.getElementById("mathMeth10-2").innerHTML = `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sin" target=_"blank">Find out more</a>`;
    document.getElementById("resultMathMeth10").innerHTML = `Result = ` + Math.sin(90);
}

function mathMethAsin() {
    document.getElementById("mathMeth11-1").innerText = `The arcsine of the given number.`;
    document.getElementById("mathMeth11-2").innerHTML = `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asin" target=_"blank">Find out more</a>`;
    document.getElementById("resultMathMeth11").innerHTML = `Result = ` + Math.asin(90);
}

function mathMethSinh() {
    document.getElementById("mathMeth12-1").innerText = `The hyperbolic sine of the given number.`;
    document.getElementById("mathMeth12-2").innerHTML = `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh" target=_"blank">Find out more</a>`;
    document.getElementById("resultMathMeth12").innerHTML = `Result = ` + Math.sinh(90);
}

function mathMethAsinh() {
    document.getElementById("mathMeth13-1").innerText = `The hyperbolic arcsine of the given number.`;
    document.getElementById("mathMeth13-2").innerHTML = `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh" target=_"blank">Find out more</a>`;
    document.getElementById("resultMathMeth13").innerHTML = `Result = ` + Math.asinh(90);
}

function mathMethCos() {
    document.getElementById("mathMeth14-1").innerText = `The cosine of the given number.`;
    document.getElementById("mathMeth14-2").innerHTML = `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cos" target=_"blank">Find out more</a>`;
    document.getElementById("resultMathMeth14").innerHTML = `Result = ` + Math.cos(90);
}

function mathMethAcos() {
    document.getElementById("mathMeth15-1").innerText = `The arcosine of the given number.`;
    document.getElementById("mathMeth15-2").innerHTML = `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acos" target=_"blank">Find out more</a>`;
    document.getElementById("resultMathMeth15").innerHTML = `Result = ` + Math.acos(90);
}

function mathMethCosh() {
    document.getElementById("mathMeth16-1").innerText = `The hyperbolic cosine of the given number.`;
    document.getElementById("mathMeth16-2").innerHTML = `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh" target=_"blank">Find out more</a>`;
    document.getElementById("resultMathMeth16").innerHTML = `Result = ` + Math.cosh(90);
}

function mathMethAcosh() {
    document.getElementById("mathMeth17-1").innerText = `The hyperbolic arcosine of the given number.`;
    document.getElementById("mathMeth17-2").innerHTML = `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh" target=_"blank">Find out more</a>`;
    document.getElementById("resultMathMeth17").innerHTML = `Result = ` + Math.acosh(90);
}

function mathMethTan() {
    document.getElementById("mathMeth18-1").innerText = `The tangent of the given number.`;
    document.getElementById("mathMeth18-2").innerHTML = `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tan" target=_"blank">Find out more</a>`;
    document.getElementById("resultMathMeth18").innerHTML = `Result = ` + Math.tan(90);
}

function mathMethAtan() {
    document.getElementById("mathMeth19-1").innerText = `The arctangent of the given number.`;
    document.getElementById("mathMeth19-2").innerHTML = `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan" target=_"blank">Find out more</a>`;
    document.getElementById("resultMathMeth19").innerHTML = `Result = ` + Math.atan(90);
}

function mathMethTanh() {
    document.getElementById("mathMeth20-1").innerText = `The hyperbolic tanget of the given number.`;
    document.getElementById("mathMeth20-2").innerHTML = `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh" target=_"blank">Find out more</a>`;
    document.getElementById("resultMathMeth20").innerHTML = `Result = ` + Math.tanh(90);
}

function mathMethAtanh() {
    document.getElementById("mathMeth21-1").innerText = `The hyperbolic arctangent of the given number.`;
    document.getElementById("mathMeth21-2").innerHTML = `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh" target=_"blank">Find out more</a>`;
    document.getElementById("resultMathMeth21").innerHTML = `Result = ` + Math.atanh(90);
}

//"Binary" methods
function mathMethPow() {
    document.getElementById("mathMeth22-1").innerText = `x to the power of y.`;
    //document.getElementById("mathMeth22-2").innerHTML = `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh" target=_"blank">Find out more</a>`;
    document.getElementById("resultMathMeth22").innerHTML = `Math.pow(5, 3);
5*5*5
Result = ` + Math.pow(5, 3);
}

function mathMethMax() {
    let arrayMax = [5, 3, 98];
    document.getElementById("mathMeth23-1").innerText = `The largest of a set of values.`;
    //document.getElementById("mathMeth23-2").innerHTML = `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh" target=_"blank">Find out more</a>`;
    document.getElementById("resultMathMeth23").innerHTML = `Math.max(5, 3, 98);
Result = ` + Math.max(5, 3, 98) + `

let arrayMax = [5, 3, 98];
Math.pox(...arrayMax);
Result = ` + Math.max(...arrayMax);
}

function mathMethMin() {
    let arrayMin = [5, 3, 98];
    document.getElementById("mathMeth24-1").innerText = `The smallest of a set of values.`;
    //document.getElementById("mathMeth24-2").innerHTML = `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh" target=_"blank">Find out more</a>`;
    document.getElementById("resultMathMeth24").innerHTML = `Math.min(5, 3, 98);
Result = ` + Math.min(5, 3, 98) + `

let arrayMin = [5, 3, 98];
Math.pox(...arrayMin);
Result = ` + Math.min(...arrayMin);
}

function mathMethHypot() {
    let arrayHypot = [5, 3, 98];
    document.getElementById("mathMeth25-1").innerText = `The hypoteneuse of a set of values.`;
    //document.getElementById("mathMeth25-2").innerHTML = `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh" target=_"blank">Find out more</a>`;
    document.getElementById("resultMathMeth25").innerHTML = `Math.hypot(3, 4);
Result = ` + Math.hypot(3, 4) + `

let arrayHypot = [5, 3, 98];
Math.hypot(...arrayHypot);
Result = ` + Math.hypot(...arrayHypot);
}