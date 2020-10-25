function sortOf1() {
    let a = "Justin";
    document.getElementById("stringJustin").innerHTML = `let a = "Justin";
"Justin" is a + typeof(a);
Justin" is a ` + typeof(a);
}

function sortOf2() {
    document.getElementById("justin").innerText = `let a = Justin;
Justin is a ` + typeof(a);
}

function sortOf3() {
    let a = "3.14"
    document.getElementById("stringNumber").innerText = `let a = "3.14";
"3.14" is a ` + typeof(a);
}

function sortOf4() {
    let a = 3.14
    document.getElementById("number").innerText = `let a = 3.14;
3.14 is a ` + typeof(a);
}

function sortOf5() {
    let a = "true"
    document.getElementById("stringTrue").innerText = `let a = "true";
"true" is a ` + typeof(a);
}

function sortOf6() {
    let a = true
    document.getElementById("boolean").innerText = `let a = true;
true is a ` + typeof(a);
}

function newLineEscape() {
    document.getElementById("lineEscape").innerText = `"This \\nis how \\nyou new line \\nescape when using \\ndouble or single quotations"
Result:
This \nis how \nyou new line \nescape when using \ndouble or single quotations`;
}

function newTabEscape() {
    document.getElementById("tabEscape").innerText = `"This \\tis how \\t\\tyou new tab \\t\\t\\tescape when using \\t\\t\\t\\tdouble or single quotations"

Result:
This    is how      you new tab         escape when using               double or single quotations`;
}

function newVerticalTabEscape() {
    document.getElementById("verticalTabEscape").innerText = `"This \\vis how \\vyou new tab \\vescape when using \\vdouble or single quotations"

Result:
This 
    is how 
            you new tab
                            escape when using
                                                    double or single quotations`;
}

function newNulEscape() {
    alert(`"This\\0is how\\0you new tab\\0escape when using\\0double or single quotations"

Result:
"This\0is how\0you new tab\0escape when using\0double or single quotations"`)
}

function newBackslashEscape() {
    alert(`"This\\bis how\\byou new tab\\bescape when using\\bdouble or single quotations"

Result:
"This\bis how \byou new tab  \bescape when using   \bdouble or single quotations"`)
}
