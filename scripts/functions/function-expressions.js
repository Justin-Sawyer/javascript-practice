(function declarations() {
    document.getElementById("declarations").innerText = `function name() {
    code to be executed;
}`;
})();

(function expressions() {
    document.getElementById("expressions").innerText = `let name = function() {
    code to be executed;
}`;
})();

(function anon() {
    document.getElementById("anon").innerText = `let name = function functionName() {
    code to be executed;
}`;
})();

(function self() {
    document.getElementById("self").innerText = `(function functionName() {
    code to be executed;
})();

    //To clarify:
    ( function name() {
        code to be executed;
        } )(); `;
})();

(function redeclare1() {
    document.getElementById("redeclare1").innerText = `function foo() {
        function bar() {
            return 3;
        }
        return bar();

        function bar()  {
            return 8;
        }
    }
document.getElementById("redeclareResult1").innerText = foo();`;

    function foo() {
        function bar() {
            return 3;
        }
        return bar();

        function bar()  {
            return 8;
        }
    }
document.getElementById("redeclareResult1").innerText = foo();
})();

(function redeclare2() {
    document.getElementById("redeclare2").innerText = `function foob(){
    var obar = function() {
        return 3;
    };
    return obar();

    var obar = function() {
        return 8;
    };
}
document.getElementById("redeclareResult2").innerText = foob();`;

    function foob(){
    var obar = function() {
        return 3;
    };
    return obar();

    var obar = function() {
        return 8;
    };
}
document.getElementById("redeclareResult2").innerText = foob();
})();

(function redeclare3() {
    document.getElementById("redeclare3").innerText = `document.getElementById("redeclareResult3").innerText = fooba();
    
function fooba(){
    var oobar = function() {
        return 3;
    };
    return oobar();

    var oobar = function() {
        return 8;
    };
}`;

    document.getElementById("redeclareResult3").innerText = fooba();
    
    function fooba(){
        var oobar = function() {
            return 3;
        };
        return oobar();

        var oobar = function() {
            return 8;
        };
    }
})();

(function redeclare4(){
    document.getElementById("redeclare4").innerText = `function foobar(){
        return barfoo();

        var barfoo = function() {
            return 3;
        };
        var barfoo = function() {
            return 8;
        };
    }
    document.getElementById("redeclareResult4").innerText = foobar();`
    document.getElementById("redeclareResult4").innerText = `Uncaught TypeError: barfoo is not a function`;
})();
