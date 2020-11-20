(function booleanToNum() {
    let num1 = Number(true);
    let num2 = Number(false);
    document.getElementById("booleanToNum").innerText = `Number(true);
${Number(true)};
Number(false);
${Number(false)};

let num1 = Number(true);
num1;
${num1};
let num2 = Number(false);
num2;
${num2};`;
})();

(function booleanToStr() {
    let x = false;
    let y = x.toString();
    document.getElementById("booleanToStr").innerText = `typeof(true);
${typeof(true)};
true.toString();
${true.toString()};
typeof("true");
${typeof("true")};

let x = false;
typeof(x);
${typeof(x)}
let y = x.toString();
${y};
typeof(y);
${typeof(y)};`
})();

(function plusTrueFalseBoolean() {
    document.getElementById("plusTrueFalseBoolean").innerText = `+true;
${+true};

+false;
${+false};

-true;
${-true};

-false;
${-false};`;
})();

(function binaryBoolean() {
    document.getElementById("binaryBoolean").innerText = `true + true;
${true+true};

true + false;
${true+false};

true - true;
${true-true};

false - false;
${false-false};

true - false;
${true-false};

false - true;
${false-true};

true * true;
${true*true};

true * false;
${true*false};

true / false;
${true/false};

false / true;
${false/true};`;
})();