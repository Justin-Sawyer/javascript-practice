function varHoist() {
    apple = "An apple is a fruit";
    document.getElementById("varHoistResult").style.color = "#c13e70"
    document.getElementById("varHoistResult").innerText = apple + `
    
    `    ;
    var apple;
}
document.getElementById("varHoist").innerText = varHoist;

function letHoist() {document.getElementById("letHoistResult").style.color = "#c13e70"
    document.getElementById("letHoistResult").innerText = `Uncaught ReferenceError: Cannot access 'apple' before initialization
    
    `;
}
document.getElementById("letHoist").innerText = `apple = "An apple is a fruit";
    document.getElementById("letHoistResult").innerText = apple;
    let apple;`;

(function globalScope() {
    document.getElementById("global").innerText = `var species = "human";
var fullMoon = true;
document.getElementById("var").innerText = species;

    if (fullMoon) {
    var species = "werewolf";
    document.getElementById("var1").style.color = "#c13e70"
    document.getElementById("var1").innerText = species;
    };

document.getElementById("var2").style.color = "#c13e70
document.getElementById("var2").innerText = species;`
    var species = "human";
    var fullMoon = true;
    document.getElementById("var").innerText = species;

    if (fullMoon) {
    // Attempt to create a new variable in a block
    var species = "werewolf";
    document.getElementById("var1").style.color = "#c13e70"
    document.getElementById("var1").innerText = species;
    }
    document.getElementById("var2").style.color = "#c13e70"
    document.getElementById("var2").innerText = species;
})();


(function trueLupin() {
    document.getElementById("trueLupin").innerText = `function trueLupin() {
    var moon = true;

    if (moon) {
    var animal = "human";
    document.getElementById("var3").style.color = "#c13e70"
    document.getElementById("var3").innerText = animal;
    } else {
    var animal = "werewolf";
    document.getElementById("var3").style.color = "#c13e70"
    document.getElementById("var3").innerText = animal;
    }
}`
    
    var moon = true;

    if (moon) {
    var animal = "human";
    document.getElementById("var3").style.color = "#c13e70"
    document.getElementById("var3").innerText = animal;
    } else {
    var animal = "werewolf";
    document.getElementById("var3").style.color = "#c13e70"
    document.getElementById("var3").innerText = animal;
    }
})();

(function falseLupin() {
    document.getElementById("falseLupin").innerText = `function falseLupin() {
    var moon = false;

    if (moon) {
    var animal = "human";
    document.getElementById("var4").style.color = "#c13e70"
    document.getElementById("var4").innerText = animal;
    } else {
    var animal = "werewolf";
    document.getElementById("var4").style.color = "#c13e70"
    document.getElementById("var4").innerText = animal;
    }
}`
    
    var moon = false;

    if (moon) {
    var animal = "human";
    document.getElementById("var4").style.color = "#c13e70"
    document.getElementById("var4").innerText = animal;
    } else {
    var animal = "werewolf";
    document.getElementById("var4").style.color = "#c13e70"
    document.getElementById("var4").innerText = animal;
    }
})();

(function globalLet1() {
    document.getElementById("globalLet1").innerText = `var species = "human";
var fullMoon = true;
//document.getElementById("var").innerText = species;

    if (fullMoon) {
    let species = "werewolf";
    document.getElementById("var5").style.color = "#c13e70"
    document.getElementById("var5").innerText = species;
    };

document.getElementById("var6").style.color = "#c13e70
document.getElementById("var6").innerText = species;`
    var species = "human";
    var fullMoon = true;
    //document.getElementById("var").innerText = species;

    if (fullMoon) {
    // Attempt to create a new variable in a block
    let species = "werewolf";
    document.getElementById("var5").style.color = "#c13e70"
    document.getElementById("var5").innerText = species;
    }
    document.getElementById("var6").style.color = "#c13e70"
    document.getElementById("var6").innerText = species;
})();

(function globalLet2() {
    document.getElementById("globalLet2").innerText = `let species = "human";
var fullMoon = true;
//document.getElementById("var").innerText = species;

    if (fullMoon) {
    var species = "werewolf";
    document.getElementById("var7").style.color = "#c13e70"
    document.getElementById("var7").innerText = species;
    };

document.getElementById("var8").style.color = "#c13e70
document.getElementById("var8").innerText = species;`
})();

(function globalLet3() {
    document.getElementById("globalLet3").innerText = `let species = "human";
var fullMoon = true;
//document.getElementById("var").innerText = species;

    if (fullMoon) {
    let species = "werewolf";
    document.getElementById("var9").style.color = "#c13e70"
    document.getElementById("var9").innerText = species;
    };

document.getElementById("var10").style.color = "#c13e70
document.getElementById("var10").innerText = species;`
    let species = "human";
    var fullMoon = true;
    //document.getElementById("var").innerText = species;

    if (fullMoon) {
    // Attempt to create a new variable in a block
    let species = "werewolf";
    document.getElementById("var9").style.color = "#c13e70"
    document.getElementById("var9").innerText = species;
    }
    document.getElementById("var10").style.color = "#c13e70"
    document.getElementById("var10").innerText = species;
})();

(function block1() {
    if (true) {
	    var a = "Inside the if!";
    }

    document.getElementById("block2").style.color = "#c13e70";
    document.getElementById("block2").innerText = "<p>" + a + "</p>";

    document.getElementById("block1").innerText =`function block1() {
    if (true) {
        var a = "Inside the if!";
    }

document.getElementById("block2").style.color = "#c13e70";
document.getElementById("block2").innerHTML = "<p id="block2>" + a +"</p>;`
})();

(function block2() {
    document.getElementById("block3").innerText =`function block1() {
    if (true) {
        let a = "Inside the if!";
    }

document.getElementById("block4").style.color = "#c13e70";
document.getElementById("block4").innerHTML = "<p id="block2>" + a + "</p>;`;
    document.getElementById("block4").style.color = "#c13e70";
    document.getElementById("block4").innerText = `<p id="block2">Uncaught ReferenceError: a is not defined</p>`;
})();

