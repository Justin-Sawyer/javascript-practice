//string+Boolean
(function stringBoolean() {
    let strBoo = ("true" + true);
    document.getElementById("stringBoolean").innerText = `"true" + true;
${"true"+true};
typeof("true" + true);
${typeof(strBoo)}`;
})();

//string+Number
(function stringNumber() {
    document.getElementById("stringNumber").innerText = `"text" + 2;
${"text"+2};
${typeof("text"+2)}

"2" + 2;
${"2"+2};
${typeof("2"+2)}`;
})();

//boolean*Number
(function booleanNumber() {
    document.getElementById("booleanNumber").innerText = `true * 2;
${true*2};
${typeof(true*2)}

true / 2;
${true/2};
${typeof(true/2)}`;
})();

//string*Number
(function stringMathNumber() {
    document.getElementById("stringMathNumber").innerText = `"text" * 2;
${"text"*2};

"text" / 2;
${"text"/2};`;
})();