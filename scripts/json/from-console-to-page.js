const baseURL = "https://ci-swapi.herokuapp.com/api/"

function getData(type, cb) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
};

function writeToDocument(type) {
    getData(type, function(data) {
        document.getElementById("newDataDiv0").innerHTML = data;
    })
};

$(document).ready(function() {
//--------------------------------------------------------------------------------------------- Star Ward API function
    $(".pageResult").on("click", function() {
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
            document.getElementById("dataDiv").innerText = data;
        };

        getData(printDataToConsole);
    });

//--------------------------------------------------------------------------------------------- Star Ward API function code
    document.getElementById("function").innerText = `function getData(cb) {
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

getData(printDataToConsole);`;

    document.getElementById("pageResultCode").innerText = `document.getElementById("dataDiv").innerText = data;`;

    document.getElementById("writeToDocumentCode").innerText = `//5b
const baseURL = "https://ci-swapi.herokuapp.com/api/"

//4
function getData(type, cb) {
    let xhr = new XMLHttpRequest();

    //5a
    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
    //5c
    xhr.open("GET", baseURL + type + "/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
};

//1
function writeToDocument(type) {
    //2
    getData(type, function(data) {
        //3
        document.getElementById("dataDiv").innerHTML = data;
    })
};

getData(printDataToConsole);`;

    document.getElementById("writeToDocumentFull").innerText = `const baseURL = "https://ci-swapi.herokuapp.com/api/"

function getData(type, cb) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
};

function writeToDocument(type) {
    getData(type, function(data) {
        document.getElementById("dataDiv").innerHTML = data;
    })
};

getData(printDataToConsole);`;

    document.getElementById("newButtons").innerText = `<button onclick="writeToDocument('people')">People</button>
<button onclick="writeToDocument('planets')">Planets</button>
<button onclick="writeToDocument('species')">Species</button>
<button onclick="writeToDocument('starships')">Starships</button>
<button onclick="writeToDocument('vehicles')">Vehicles</button>
<button onclick="writeToDocument('films')">Films</button>`;

    
    $(".endText").on("click", function() {
        $(".response").css("display", "block").html(`<p>We have an <code>Object</code> printing to the screen. That's exactly what we want. 
        Of course, that data isn't terribly useful to us just yet because all it's telling us is that we have an object.</p>
        <p>We'll rectify this in Part Two</p><br>`);
    });

    /*$(".showFifthArticle").on("click", function() {
        $(window).scrollTop(0); 
        $(".articleOne").css("display", "none");
        $(".articleTwo").css("display", "none");
        $(".articleThree").css("display", "none");
        $(".articleFour").css("display", "none");
        $(".articleFive").css("display", "block");
        $(".articleSix").css("display", "none");
        $(".response").css("display", "none");
        $("#newDataDiv6").text("");
        $(".nextPageText").on("click", function() {
            $(".response").css("display", "block").html (`<p>We now have a functional, neat table.</p><br>
                    <p>We'll add some pagination in Part Six.</p><br></br>`);
        });
    })

    $(".showSixthArticle").on("click", function() {
        $(window).scrollTop(0); 
        $(".articleOne").css("display", "none");
        $(".articleTwo").css("display", "none");
        $(".articleThree").css("display", "none");
        $(".articleFour").css("display", "none");
        $(".articleFive").css("display", "none");
        $(".articleSix").css("display", "block");
        $(".response").css("display", "none");
    })*/
})