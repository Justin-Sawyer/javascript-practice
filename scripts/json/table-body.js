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

function getTableHeaders(obj) {
    let tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`);
    });

    return "<tr>" + tableHeaders + "</tr>";
};

function writeToDocument8(type) {
    let tableRows = [];
    let el = document.getElementById("newDataDiv8");
    el.innerHTML = "";

    getData(type, function(data) {
         
        data = data.results
        let tableHeader = getTableHeaders(data[0]);
 
        data.forEach(function(item) {
            let dataRow = [];

            Object.keys(item).forEach(function(key) {
                dataRow.push(`<td>${item[key]}</td>`)
            });
            tableRows.push(`<tr>${dataRow}</tr>`);
        });
        el.innerHTML += `<table>${tableHeader}${tableRows}</table>`;
    });
};        

function writeToDocument9(type) {
    let tableRows = [];
    let el = document.getElementById("newDataDiv9");
    el.innerHTML = "";

    getData(type, function(data) {
         
        data = data.results
        let tableHeader = getTableHeaders(data[0]);
 
        data.forEach(function(item) {
            let dataRow = [];

            Object.keys(item).forEach(function(key) {
                let rowData = item[key].toString();
                let truncatedData = rowData.substring(0, 15);

                dataRow.push(`<td>${truncatedData}</td>`)
            });
            tableRows.push(`<tr>${dataRow}</tr>`);
        });
        el.innerHTML += `<table>${tableHeader}${tableRows}</table>`;
    });
};

//-------------------------------------------

$(document).ready(function() {
    document.getElementById("tabular1").innerText = `function getData(type, cb) {
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
        tableHeaders.push("<td>" + key + "</td>");
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
};`

    document.getElementById("tabular2").innerText = `function writeToDocument(type) {
    //2 Create new empty [array] called tableRows that will house each row of data
    let tableRows = [];
    let el = document.getElementById("newDataDiv");
    el.innerHTML = "";

    getData(type, function(data) {
         
        data = data.results
        let tableHeader = getTableHeaders(data[0]);
 
        data.forEach(function(item) {
            //1 Delete this line
            //el.innerHTML += "<p>" + item.name + "</p>";
            //4 Create empty [array] for each individual row
            let dataRow = [];

            //5 Iterate with forEach loop over the keys
            Object.keys(item).forEach(function(key) {
                //7 Push the items AND THEIR INDICES into formatted HTML rows
                dataRow.push("<td>" + item[key] + "</td>")
            //6 Close the function!
            });
            //8 Push dataRow into tableRows [array] and add HTML table row formatting
            tableRows.push("<tr>" + dataRow + "</tr>");
        });
        //3 Add variable tableRows to this line of code
        el.innerHTML += "<table>" + tableHeader + tableRows + "</table>";
    });
};`;

    document.getElementById("tabular3").innerText = `function getData(type, cb) {
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
    let tableRows = [];
    let el = document.getElementById("newDataDiv");
    el.innerHTML = "";

    getData(type, function(data) {
         
        data = data.results
        let tableHeader = getTableHeaders(data[0]);
 
        data.forEach(function(item) {
            let dataRow = [];

            Object.keys(item).forEach(function(key) {
                dataRow.push("<td>" + item[key] + "</td>")
            });
            tableRows.push(dataRow);
        });
        el.innerHTML += "<table>" + tableHeader + tableRows + "</table>";
    });
};`;

    document.getElementById("tabular4").innerText = `function writeToDocument(type) {
    let tableRows = [];
    let el = document.getElementById("newDataDiv");
    el.innerHTML = "";

    getData(type, function(data) {
         
        data = data.results
        let tableHeader = getTableHeaders(data[0]);
 
        data.forEach(function(item) {
            let dataRow = [];

            Object.keys(item).forEach(function(key) {
                //1 Truncate data being pushed in the HTML <td></td> elements:
                //1a create variable rowData and assign its value as a string of the item's key
                let rowData = item[key].toString();
                //1b Create new variable that assigns a substring of rowData and truncates at the 15th character
                let truncatedData = rowData.substring(0, 15);

                //2 change item[key] for the new truncatedData variable
                dataRow.push("<td>" + truncatedData + "</td>")
            });
            tableRows.push(dataRow);
        });
        el.innerHTML += "<table>" + tableHeader + tableRows + "</table>";
    });
};`

    $(".nextPageText").on("click", function() {
        $(".response").css("display", "block").html (`<p>We now have a functional, neat table.</p><br>
        <a href="pagination.html">We'll add some pagination next.</a><br></br>`);
    });
})