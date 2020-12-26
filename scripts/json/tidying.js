function getData(url, cb) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", url);
    xhr.send();
}

function getTableHeaders(obj) {
    let tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`);
    });

    return `<tr>${tableHeaders}</tr>`;
}

function generatePaginationButtons(next, prev) {
    if (next && prev) {
        return `<button onclick="writeToDocument('${prev}')">Previous</button>
                <button onclick="writeToDocument('${next}')">Next</button>`;
    } else if (next && !prev) {
        return `<button onclick="writeToDocument('${next}')">Next</button>`;
    } else if (!next && prev) {
        return `<button onclick="writeToDocument('${prev}')">Previous</button>`;
    }
}

function writeToDocument(url) {
    let tableRows = [];
    let el = document.getElementById("newDataDiv");

    getData(url, function(data) {
        let pagination = "";

        if (data.next || data.previous) {
            pagination = generatePaginationButtons(data.next, data.previous);
        }
        data = data.results;
        let tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            let dataRow = [];

            Object.keys(item).forEach(function(key) {
                let rowData = item[key].toString();
                let truncatedData = rowData.substring(0, 15);
                dataRow.push(`<td>${truncatedData}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`);
        });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>${pagination}`;
    });
}

//------------------------------------------------------------------------------------------------------------- Second table
function getBorderedTableHeaders(obj) {
    let tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td  style="border: 1px solid black; padding-left:8px; padding-right:8px; background-color:#c13e70; color:white">${key}</td>`);
    });

    return `<tr>${tableHeaders}</tr>`;
}

function generatePaginationButtons(next, prev) {
    if (next && prev) {
        return `<button class="btn button" style="margin-left: 8px; margin-top: 8px" onclick="writeToDocument1('${prev}')">Previous</button>
                <button class="btn button" style="margin-top: 8px"onclick="writeToDocument1('${next}')">Next</button>`;
    } else if (next && !prev) {
        return `<button class="btn button" style="margin-left: 8px; margin-top: 8px" onclick="writeToDocument1('${next}')">Next</button>`;
    } else if (!next && prev) {
        return `<button class="btn button" style="margin-left: 8px; margin-top: 8px" onclick="writeToDocument1('${prev}')">Previous</button>`;
    }
}

function writeToDocument1(url) {
    let tableRows = [];
    let el = document.getElementById("newDataDiv1");

    getData(url, function(data) {
        let pagination = "";

        if (data.next || data.previous) {
            pagination = generatePaginationButtons(data.next, data.previous);
        }
        data = data.results;
        let tableHeaders = getBorderedTableHeaders(data[0]);

        data.forEach(function(item) {
            let dataRow = [];

            Object.keys(item).forEach(function(key) {
                let rowData = item[key].toString();
                let truncatedData = rowData.substring(0, 35);
                if (rowData.length <= 35) {
                    dataRow.push(`<td style="border: 1px solid black; padding-left:8px; padding-right:8px;">${rowData}</td>`);
                } else if (rowData.length > 35) {
                    dataRow.push(`<td style="border: 1px solid black; padding-left:8px; padding-right:8px;">${truncatedData}<span style="color:blue">(...)</span></td>`);
                };
            });
            tableRows.push(`<tr style="text-align:justify;">${dataRow}</tr>`);
        });

        el.innerHTML = `<table style="border: 1px solid black;">${tableHeaders.toUpperCase().replace(/_/g, " ")}${tableRows}</table>${pagination}`.replace(/,/g, "");
    });
}

$(document).ready(function() {
    $(".showCode").on("click", function() {
        $("#codeSoFar").text(`function getData(url, cb) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", url);
    xhr.send();
}

function getTableHeaders(obj) {
    let tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push("<td>" + key + "</td>");
    });

    return "<tr>" + tableHeaders + "</tr>";
}

function generatePaginationButtons(next, prev) {
    if (next && prev) {
        return "<button onclick="writeToDocument('prev')">Previous</button>
                <button onclick="writeToDocument('next')">Next</button>";
    } else if (next && !prev) {
        return "<button onclick="writeToDocument('next')">Next</button>";
    } else if (!next && prev) {
        return "<button onclick="writeToDocument('prev')">Previous</button>";
    }
}

function writeToDocument(url) {
    let tableRows = [];
    let el = document.getElementById("data");

    getData(url, function(data) {
        let pagination = "";

        if (data.next || data.previous) {
            pagination = generatePaginationButtons(data.next, data.previous);
        }
        data = data.results;
        let tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            let dataRow = [];

            Object.keys(item).forEach(function(key) {
                let rowData = item[key].toString();
                let truncatedData = rowData.substring(0, 15);
                dataRow.push("<td> + truncatedData + "</td>");
            });
            tableRows.push("<tr>" + dataRow + "</tr>");
        });

        el.innerHTML = "<table>" + tableHeaders + tableRows + "</table>" + pagination";
    });
}`)
    });

    document.getElementById("commas").innerText = `el.innerHTML = "<table>" + tableHeaders + tableRows + "</table>" + pagination".replace(/,/g, "");`

    document.getElementById("appended").innerText = `.replace(/,/g, "")`;

    document.getElementById("emptySpace").innerText = `el.innerHTML = "<table>" + tableHeaders.replace(/_/g, " ") + tableRows + "</table>" + pagination".replace(/,/g, "");`

    document.getElementById("toCapitals").innerText = `el.innerHTML = "<table>" + tableHeaders.toUpperCase().replace(/_/g, " ") + tableRows + "</table>" + pagination.replace(/,/g, "");`

    document.getElementById("borders").innerText = `el.innerHTML = "<table style="border: 1px solid black;">" + tableHeaders.toUpperCase().replace(/_/g, " ") + tableRows + "</table>" + pagination.replace(/,/g, "");`

    document.getElementById("characterLength").innerText = `Object.keys(item).forEach(function(key) {
    let rowData = item[key].toString();
    let truncatedData = rowData.substring(0, 35);
    if (rowData.length <= 35) {
        dataRow.push('<td style="border: 1px solid black; padding-left:8px; padding-right:8px;">' + rowData + '</td>');
    } else if (rowData.length > 35) {
        dataRow.push("<td style="border: 1px solid black; padding-left:8px; padding-right:8px;">" + truncatedData + '<span style="color:blue">(...)</span></td>');
    };
});`

    document.getElementById("finalCode").innerText = `function getData(url, cb) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", url);
    xhr.send();
}

function tableHeaders(obj) {
    let tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push('<td  style="border: 1px solid black; padding-left:8px; padding-right:8px; background-color:#c13e70; color:white">' + key + '</td>');
    });

    return "<tr>" + tableHeaders + "</tr>;
}

function generatePaginationButtons(next, prev) {
    if (next && prev) {
        return '<button class="btn button" style="margin-left: 8px; margin-top: 8px" onclick="writeToDocument("prev")">Previous</button>
                <button class="btn button" style="margin-top: 8px" onclick="writeToDocument("next")">Next</button>';
    } else if (next && !prev) {
        return '<button class="btn button" style="margin-left: 8px; margin-top: 8px" onclick="writeToDocument("next")">Next</button>';
    } else if (!next && prev) {
        return '<button class="btn button" style="margin-left: 8px; margin-top: 8px" onclick="writeToDocument("prev")">Previous</button>';
    }
}

function writeToDocument(url) {
    let tableRows = [];
    let el = document.getElementById("newDataDiv1");

    getData(url, function(data) {
        let pagination = "";

        if (data.next || data.previous) {
            pagination = generatePaginationButtons(data.next, data.previous);
        }
        data = data.results;
        let tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            let dataRow = [];

            Object.keys(item).forEach(function(key) {
                let rowData = item[key].toString();
                let truncatedData = rowData.substring(0, 35);
                if (rowData.length <= 35) {
                    dataRow.push('<td style="border: 1px solid black; padding-left:8px; padding-right:8px;">' + rowData + '</td>');
                } else if (rowData.length > 35) {
                    dataRow.push("<td style="border: 1px solid black; padding-left:8px; padding-right:8px;">" + truncatedData + '<span style="color:blue">(...)</span></td>');
                };
            });
            tableRows.push('<tr style="text-align:justify;">' + dataRow + '</tr>');
        });

        el.innerHTML = '<table style="border: 1px solid black;">' + tableHeaders.toUpperCase().replace(/_/g, " ") + tableRows + '</table>' + pagination'.replace(/,/g, "");
    });
}`
})