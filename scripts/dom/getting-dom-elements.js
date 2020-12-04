//getElementById
(function docTargetId() {
    document.getElementById("docTargetId").innerText = `<p id="example></p>
    
function lookForExample() {
    document.getElementById("example").innerText = "Hi";
    document.getElementById("example").style.color = "#c13e70";
}`
})();

(function button() {
    document.getElementById("button").innerText = `<button onclick="example()">Click Me</button>`;
})();

function example() {
    document.getElementById("example").innerText = "Hi";
    document.getElementById("example").style.color = "#c13e70";
}



//getElementsByClassName
(function exampleClassName() {
    document.getElementById("exampleClassName").innerText = `<p class="tab">Some text</p>

function lookForExample() {
    let thisTab = document.getElementsByClassName("tab");
        for (itm of thisTab) {
            console.log(itm.innerText);
            document.getElementById("result").innerText =  itm.innerText;
        }
}`
})();

function lookForExample() {
    let thisTab = document.getElementsByClassName("tab");
        for (itm of thisTab) {
            console.log(itm.innerText);
            document.getElementById("result").innerText =  itm.innerText;
            document.getElementById("result").style.color = "#c13e70";
            document.getElementById("see").innerText = "See?! Compare the above with the last entry in the console."
            document.getElementById("see").style.color = "cyan";
        }
}

(function indexClassName() {
    document.getElementById("indexClassName").innerText = `function iterateForResult() {
let thisTab = document.getElementsByClassName("tab");
    console.log(thisTab[3].innerText);
    document.getElementById("resultIndexClassName").innerText =  thisTab[3].innerText;
};`
})();

function iterateForResult() {
let thisTab = document.getElementsByClassName("tab");
    console.log(thisTab[3].innerText);
    document.getElementById("resultIndexClassName").innerText =  thisTab[3].innerText;
    document.getElementById("resultIndexClassName").style.color = "#c13e70";
};



//getElementsByTagName
(function tagName() {
    document.getElementById("tagName").innerText = `let tag = document.getElementsByTagName("DIV");`
})();



//getElementsByName
(function showGetName() {
    document.getElementById("getName").innerText = `function getName() {
    let nameValue = document.getElementsByName("name")[0].tagName;
    document.getElementById("resultGetName").innerHTML = nameValue;
};`
})();

function getNameValue() {
    let nameValue = document.getElementsByName("name")[0].tagName;
    document.getElementById("resultGetName").innerHTML = nameValue;
};

//get value of Name
function valueofName() {
    let inputVal = document.getElementsByName("name")[0].value;
    let nameInMemory = sessionStorage.setItem(name, inputVal);
}

function showValueOfName() {
    let inputVal = document.getElementsByName("name")[0].value;
    if (inputVal != "" || null) {
        document.getElementById("showValueOfName").innerHTML = `Your name is <code>${sessionStorage.getItem(name)}</code>`;
        document.getElementById("showValueOfName").style.color = "black";
        /*document.getElementById("valueOfName").innerText = `function valueofName() {
    let inputVal = document.getElementsByName("name")[0].value;
    let nameInMemory = sessionStorage.setItem(name, inputVal);
}

function showValueOfName() {
    let inputVal = document.getElementsByName("name")[0].value;
    if (inputVal != "" || null) {
        document.getElementById("showValueOfName").innerText = sessionStorage.getItem(name);
    } else {
        document.getElementById("showValueOfName").innerText = "Enter you name in the input box! Then click the button again.";
    }
}`*/
    } else if (inputVal === "" || null) {
        document.getElementById("showValueOfName").innerHTML = `Enter you name in the input box! Then click the button again.`;
        document.getElementById("showValueOfName").style.color = "green";
        
    }
}

/*(function valueOfName() {
    document.getElementById("valueOfName").innerText = `function valueofName() {
    let inputVal = document.getElementsByName("name")[0].value;
    let nameInMemory = sessionStorage.setItem(name, inputVal);
}

function showValueOfName() {
    let inputVal = document.getElementsByName("name")[0].value;
    if (inputVal != "" || null) {
        document.getElementById("showValueOfName").innerText = sessionStorage.getItem(name);
    } else {
        document.getElementById("showValueOfName").innerText = "Enter you name in the input box! Then click the button again";
    }
}`
})();*/


