myArray = ["one", "two", 3, 4, true, "true", false, "false"];

(function typeofdata() {
    document.getElementById("typeof").innerText = `myArray.findIndex(true);
${myArray.indexOf(true)};
typeof(myArray[4]);
${typeof(myArray[4])}

myArray.findIndex("true");
${myArray.indexOf("true")};
typeof(myArray[5]);
${typeof(myArray[5])}`;
})();

//IS LESS THAN
(function islessthan() {
    document.getElementById("islessthan").innerText = `10<20
${10<20}

10<(20-10)
${10<(20-10)}

20<10
${20<10}

20<(10+10)
${20<(10+10)}

"banana"<"banana"
${"banana"<"banana"}`;
})();

//IS LESS THAN OR EQUAL TO
(function islessorequalto() {
    document.getElementById("islessorequalto").innerText = `10<=20
${10<=20}

10<=(20-10)
${10<=(20-10)}

20<=10
${20<=10}

20<=(10+10)
${20<=(10+10)}

"banana"<="banana"
${"banana"<="banana"}`;
})();

//IS GREATER THAN
(function isgreaterthan() {
    document.getElementById("isgreaterthan").innerText = `10>20
${10>20}

10>(20-10)
${10>(20-10)}

20>10
${20>10}

20>(10+10)
${20>(10+10)}

"banana">"banana"
${"banana">"banana"}`;
})();

//IS GREATER THAN OR EQUAL TO
(function isgreaterorequalto() {
    document.getElementById("isgreaterorequalto").innerText = `10>=20
${10>=20}

10>=(20-10)
${10>=(20-10)}

20>=10
${20>=10}

20>=(10+10)
${20>=(10+10)}

"banana">="banana"
${"banana">="banana"}`;
})();

//IS EQUAL TO
(function isequalto() {
    document.getElementById("isequalto").innerText = `20==20
${20==20}

20==(10+10)
${20==(10+10)}

20=="20"
${20=="20"}

20==("10"+10)
${20==("10"+10)}

20==("10"+"10")
${20==("10"+"10")}

"banana"=="banana"
${"banana"=="banana"}`
})();

//IS IDENTICAL TO
(function isidenticalto() {
    document.getElementById("isidenticalto").innerText = `20===20
${20===20}
typeof(20);
${typeof(20)}

20===(10+10)
${20===(10+10)}

20==="20"
${20==="20"}
typeof("20");
${typeof("20")}

"banana"==="banana"
${"banana"==="banana"}`
})();

//IS NOT EQUAL TO
(function isnotequalto() {
    document.getElementById("isnotequalto").innerText = `20!=20
${20!=20}

20!="20"
${20!="20"}

10!=20
${10!=20}

10!="20"
${10!="20"}

"banana"!="banana"
${"banana"!="banana"}`
})();

//IS NOT IDENTICAL TO
(function isnotidenticalto() {
    document.getElementById("isnotidenticalto").innerText = `20!==20
${20!==20}

20!==(10+10)
${20!==(10+10)}

20!=="20"
${20!=="20"}

20!==("10"+"10")
${20!==("10"+"10")}

10!==20
${10!==20}

10!=="20"
${10!=="20"}

"banana"!=="banana"
${"banana"!=="banana"}`
})();

//METHODS   
(function isBoolean() {
    document.getElementById("boolean").innerText = `Boolean(2)
${Boolean(2)} 

Boolean(-2)
${Boolean(-2)}

Boolean("banana")
${Boolean("banana")}

Boolean(0)
${Boolean(0)}
typeof(0)
${typeof(0)}

Boolean(-0)
typeof(-0)
${Boolean(-0)}
${typeof(-0)}

Boolean(Infinity)
${Boolean(Infinity)}
typeof(Infinity)
${typeof(Infinity)}

Boolean(-Infinity)
${Boolean(-Infinity)}
typeof(-Infinity)
${typeof(-Infinity)}

Boolean("Infinity")
${Boolean("Infinity")}
typeof("Infinity")
${typeof("Infinity")}

Boolean("-Infinity")
${Boolean("-Infinity")}
typeof("-Infinity")
${typeof("-Infinity")}

Boolean("")
${Boolean("")}
typeof("")
${typeof("")}

Boolean(NaN)
${Boolean(NaN)}
typeof(NaN)
${typeof(NaN)}

Boolean(null)
${Boolean(null)}
typeof(null)
${typeof(null)}`
})();

//&&
(function andand() {
    document.getElementById("andand").innerText = `true && true
${(true&&true)}

true && false
${(true&&false)}

false && true
${(false&&true)}

false && false
${(false&&false)}

Boolean operators do not work with arithmetical operators:
(20-3) && (14+3)
${(20-3) && (14+3)}

But they do with comparators:
(20<30) && (20>10)
${(20<30)&&(20>10)}

(20>30) && (20>10)
${(20>30)&&(20>10)}`
})();

//||
(function oror() {
    document.getElementById("oror").innerText = `true || true
${(true||true)}

true || false
${(true||false)}

false || true
${(false||true)}

false || false
${(false||false)}

Boolean operators do not work with arithmetical operators:
(20-3) || (14+3)
${(20-3) || (14+3)}

But they do with comparators:
(20<30) || (20>10)
${(20<30)||(20>10)}

(20>30) || (20>10)
${(20>30)||(20>10)}`
})();

//!
(function negates() {
    document.getElementById("negates").innerText = `!(true && true)
${!(true&&true)}

!(true || true)
${!(true||true)}

!(true && false)
${!(true&false)}

!(true || false)
${!(true||false)}

!(false && true)
${!(false&&true)}

!(false || true)
${!(false||true)}

!(false && false)
${!(false&&false)}

!(false || false)
${!(false||false)}

Boolean operators do not work with arithmetical operators:
!((20-3) && (14+3))
${!(20-3) && (14+3)}
!((20-3) || (14+3))
${!(20-3) || (14+3)}

But they do with comparators:
!((20<30) && (20>10))
${!(20<30)&&(20>10)}

!((20<30) || (20>10))
${!(20<30)||(20>10)}

!((20>30) && (20>10))
${!(20>30)&&(20>10)}

!((20>30) || (20>10))
${!(20>30)||(20>10)}`
})();
