$(document).ready(function() {
    document.getElementById("starwarsapi").innerText = `curl https://ci-swapi.herokuapp.com/api/`;

    document.getElementById("starwarsapi").innerText = `curl https://ci-swapi.herokuapp.com/api/people/2/`;

    document.getElementById("jsontool").innerText = `curl https://ci-swapi.herokuapp.com/api/people/2/ | python -m json.tool`;

    document.getElementById("variablexhr").innerText = `let xhr = new XMLHttpRequest();`;

    document.getElementById("divData").innerText = `<div id="data"></div>`;

    document.getElementById("checkChange").innerText = `let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};`;

    document.getElementById("openConnection").innerText = `let xhr = new XMLHttpRequest();

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};`

    $(".result, #goToResult").on("click", function() {
        let xhr = new XMLHttpRequest();

        xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
        xhr.send();

        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
                console.log(`This is a ` + typeof(this.responseText));
            }
        };
    })

//----------------------------------------------------------------------------------------------------Popup to explain code above in depth
// from https://stackoverflow.com/questions/1328723/how-to-generate-a-simple-popup-using-jquery
    // Open Popup
    $('[popup-open]').on('click', function() {
        var popup_name = $(this).attr('popup-open');
 $('[popup-name="' + popup_name + '"]').fadeIn(300);
    });
 
    // Close Popup
    $('[popup-close]').on('click', function() {
 var popup_name = $(this).attr('popup-close');
 $('[popup-name="' + popup_name + '"]').fadeOut(300);
    });
 
    // Close Popup When Click Outside
    $('.popup').on('click', function() {
 var popup_name = $(this).find('[popup-close]').attr('popup-close');
 $('[popup-name="' + popup_name + '"]').fadeOut(300);
    }).children().click(function() {
 return false;
    });

//----------------------------------------------------------------------------------------------- return to other popup
    $("#return").on("click", function() {
        $("#goBack").text("Go back to previous popup");
    });

    $("#goBack").on("click", function() {
        $(this).text("See this in action here");
    });

//----------------------------------------------------------------------------------------------- JSON.parse()
    document.getElementById("JSONparse").innerText = `let xhr = new XMLHttpRequest();

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        JSON.parse(this.responseText);
    }
};`

    $(".JSONParseResult").on("click", function() {
        let xhr = new XMLHttpRequest();

        xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
        xhr.send();

        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                //document.getElementById("data").innerHTML = this.responseText;
                console.log(`This is now an ` + typeof(JSON.parse(this.responseText)));
                console.log(JSON.parse(this.responseText));
            }
        };
    })

    document.getElementById("dataFunction").innerText = `let xhr = new XMLHttpRequest();
--> let data;

    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
    xhr.send();

--> function setData(jsonData) {
-->     data = jsonData;
--> }

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
-->         setData(JSON.parse(this.responseText));
        }
    }`;

    document.getElementById("theCodeWithConsoleLog").innerText = `    let xhr = new XMLHttpRequest();
    let data;

    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
    xhr.send();

    function setData(jsonData) {
        data = jsonData;
    }

    xhr.onreadystatechange = function() {
2)      console.log(this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            setData(JSON.parse(this.responseText));
        }
    }
1)  console.log(data);`;

    $(".theCodeWithConsoleLog").on("click", function() {
        let xhr = new XMLHttpRequest();
        let data;

        xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
        xhr.send();

        function setData(jsonData) {
            data = jsonData;
        }

        xhr.onreadystatechange = function() {
            console.log(this.readyState);
            if (this.readyState == 4 && this.status == 200) {
                setData(JSON.parse(this.responseText));
            }
        };
        console.log(`1): 
` + data);
        console.log(`2):`);
    })

//---------------------------------------------------------------------------------------- setTimeout()
    document.getElementById("timeoutFunction").innerText = `let xhr = new XMLHttpRequest();
let data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

function setData(jsonData) {
    data = jsonData;
}

xhr.onreadystatechange = function() {
    console.log(this.readyState);
    if (this.readyState == 4 && this.status == 200) {
        setData(JSON.parse(this.responseText));
    }
};

--> setTimeout(function() {
-->     console.log(data)
--> }, 500);`

    $(".theTimeoutCodeWithConsoleLog").on("click", function() {
        let xhr = new XMLHttpRequest();
        let data;

        xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
        xhr.send();

        function setData(jsonData) {
            data = jsonData;
        }

        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                setData(JSON.parse(this.responseText));
            }
        };

        setTimeout(function() {
            console.log(data)
        }, 500);
    });

    document.getElementById("dataEquals").innerText = `let xhr = new XMLHttpRequest();
let data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
-->     data = JSON.parse(this.responseText);
    }
};

setTimeout(function() {
    console.log(data)
}, 500);`;

//--------------------------------------------------------------------------------------------- Callback function
    document.getElementById("function").innerText = `function getData() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);
        }
    };
};`

    document.getElementById("callbackfunction").innerText = `getData(function(data) {
    console.log(data)
})`

    document.getElementById("callbackfunctionArgument").innerText = `--> function getData(cb) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
-->         cb(JSON.parse(this.responseText));
            }
        };
    };

--> getData(function(data) {
-->     console.log(data)
--> })`

    document.getElementById("newCallbackFunction").innerText = `function printDataToConsole(data) {
    console.log(data);
};

getData(printDataToConsole);`

    document.getElementById("fullCode").innerText = `function getData(cb) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
};

function printDataToConsole(data) {
    console.log(data);
};

getData(printDataToConsole);`

    $(".callbackLog").on("click", function() {
        function getData(cb) {
            let xhr = new XMLHttpRequest();

            xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
            xhr.send();

            xhr.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    cb(JSON.parse(this.responseText));
                }
            };
        };

        function printDataToConsole(data) {
            console.log(data);
        };

        getData(printDataToConsole);
    })
    
})