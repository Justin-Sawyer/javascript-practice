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


function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`)
    });

    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument7(type) {
    let el = document.getElementById("newDataDiv7");
    el.innerHTML = "";

    getData(type, function(data) {        
        data = data.results
        let tableHeaders = getTableHeaders(data[0]);
 
        data.forEach(function(item) {
            });
        el.innerHTML += `<table>${tableHeaders}</table>`;
    });
};        

$(document).ready(function() {
    document.getElementById("codeBlockShowKeysInConsole").innerText = `function getData(type, cb) {
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
    console.clear()

    let el = document.getElementById("newDataDiv");
    el.innerHTML = "";

    getData(type, function(data) {
         
        data = data.results
 
        data.forEach(function(item) {
            Object.keys(item).forEach(function(key) {
                console.log(key);
                el.innerHTML += "<p>" + item.name + "</p>";
            });
        });
    });        
};`;

    document.getElementById("getTableHeadersStart").innerText = `//1 Create function with single Object "obj" as an argument
function getTableHeaders(obj) {
    //2 Create a variable called and assign it an empty array, in order that it 
    let tableHeaders = [];

    //3 Iterate through the Object keys using forEach loop
    Object.keys(obj).forEach(function(key) {
        //4 Push the keys to the formatted HTML table headers
        tableHeaders.push("<td> + key + </td>");
    });

    //5 Return the results of tableHeaders function to the formatted HTML table rows
    return "<tr>" + tableHeaders +</tr>;
}`;

    document.getElementById("getTableHeaders2").innerText = `function writeToDocument(type) {
    console.clear()

    let el = document.getElementById("newDataDiv");
    el.innerHTML = "";

    getData(type, function(data) {
         
        data = data.results
        //1 Create variable, assign it the retrieved data from function getTableHeaders(obj) and pass through first Object in the [array]
        let tableHeader = getTableHeaders(data[0]);
 
        data.forEach(function(item) {
            //5 Delete this line otherwise we loop each tableHeader entry
            Object.keys(item).forEach(function(key) {
                //6 We can delete this line
                console.log(key);
                //2 For now, we can comment out this code as we are going to set something else in 3
                //el.innerHTML += "<p>" + item.name + "</p>";
            });
            //3 For now, we can add this line of code and 
            //set the el.innerHTML to call the tableHeader variable that we creatd in step 1
            el.innerHTML += "<table>" + tableHeader + "</table>";
        });
    });        
};`;

    document.getElementById("fullCode").innerText = `function getData(type, cb) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
};

function getTableHeaders(obj) {
    let tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push("<td> + key + </td>");
    });

    return "<tr>" + tableHeaders +</tr>;
};

function writeToDocument(type) {

    let el = document.getElementById("newDataDiv");
    el.innerHTML = "";

    getData(type, function(data) {
         
        data = data.results
        let tableHeader = getTableHeaders(data[0]);
 
        data.forEach(function(item) {
                //el.innerHTML += "<p>" + item.name + "</p>";
            });
            el.innerHTML += "<table>" + tableHeader + "</table>";
        });
    });        
};`;

    $(".endText").on("click", function() {
        $(".response").css("display", "block").html(`<p>We now have the table headers in place for each category. As we click each button, we can see the table headers change for 
        that <code>Object</code>.</p><p>Move on to Part Two to see the table start to take shape.</p><br><br>`);
    });

    $(".showFirstArticle").on("click", function() {
        $(window).scrollTop(0); 
        $(".articleOne").css("display", "block");
        $(".articleTwo").css("display", "none");
        $(".response").css("display", "none");
        $("#newDataDiv7").text("");
    })

    $(".showSecondArticle").on("click", function() {
        $(window).scrollTop(0); 
        $(".articleOne").css("display", "none");
        $(".articleTwo").css("display", "block");
        $(".response").css("display", "none");
        $("#newDataDiv6").text("");
    })
})