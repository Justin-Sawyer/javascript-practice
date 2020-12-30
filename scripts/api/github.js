document.getElementById("gitHubHTMLCode").innerText = `<div class="center-form">
    <input type="text" id="gh-username" value="octocat" oninput="fetchGitHubInformation()" />
    <div id="gh-user-data"></div>
    <div id="gh-repo-data"></div>
</div>`;

document.getElementById("gitHubHeadCode").innerText = `<script type="text/javascript" src="../scripts/api/github.js"></script>`

document.getElementById("gitHubJSCode").innerText = `function fetchGitHubInformation(event) {

    let username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html("<p>Please enter a GitHub username</p>");
        //The return command here is just to stop the function looking for something that it cannot yet find,
        //as we have not inserted the second part of the code.
        //It will be deleted from the final code block
        return;
    }

    $("#gh-user-data").html(
        '<div class="slider">
            <div class="loader">
                <div class="inner"></div>
            </div>
        </div>');
}`

document.getElementById("promises").innerText = `$.when(
    $.getJSON("https://api.github.com/users/" + username)
).then(
    function(response) {
        let userData = response;
        $("#gh-user-data").html(userInformationHTML(userData));
    },
    function(errorResponse) {
        if (errorResponse.status === 404) {
            $("#gh-user-data").html(
                "<p>No info found for user " + username + "</p>");
        } else {
            console.log(errorResponse);
            $("#gh-user-data").html(
                "<p>Error: " + errorResponse.responseJSON.message + "</p>);
        }
    });`

document.getElementById("fetchInfo").innerText = `function userInformationHTML(user) {
    return "
        <h2>" + user.name +
            "<span class='small-name'>
                (@<a href='" + user.html_url + "' target='_blank'>" + user.login + "</a>)
            </span>
        </h2>
        <div class='gh-content'>
            <div class='gh-avatar'>
                <a href='" + user.html_url = "' target='_blank'>
                    <img src='" + user.avatar_url + "' width='80' height='80' alt='user.login' />
                </a>
            </div>
            <p>Followers: " + user.followers + "- Following " + user.following + "<br> Repos: " + user.public_repos + "</p>
        </div>";
}`;

document.getElementById("repos").innerText = `     $.when(
    $.getJSON("https://api.github.com/users/" + username),
--> $.getJSON(https://api.github.com/users/" + username + "/repos")
).then(
--> function(firstResponse, secondResponse) {
-->     let userData = firstResponse[0];
-->     let repoData = secondResponse[0];
        $("#gh-user-data").html(userInformationHTML(userData));
-->     $("#gh-repo-data").html(repoInformationHTML(repoData));
    },`

document.getElementById("repoInfoCode").innerText = `function repoInformationHTML(repos) {
    if (repos.length == 0) {
        return '<div class="clearfix repo-list">No repos!</div>';
    }

    let listItemsHTML = repos.map(function(repo) {
        return '<li>
                    <a href="repo.html_url" target="_blank">' +  repo.name </a>
                </li>';
    });

    return '<div class="clearfix repo-list">
                <p>
                    <strong>Repo List:</strong>
                </p>
                <ul>
                    + listItemsHTML.join("")}
                </ul>
            </div>';
}`

document.getElementById("bugSquash1").innerText = `$("#gh-user-data").html("");
$("#gh-repo-data").html("");`

document.getElementById("octocat").innerText = `$(document).ready(fetchGitHubInformation);`

document.getElementById("throttling").innerText = `} else if (errorResponse.status === 403) {
    var resetTime = new Date(errorResponse.getResponseHeader('X-RateLimit-Reset') * 1000);
    $("#gh-user-data").html("<p>Too many requests, please wait until " + resetTime.toLocaleTimeString() + "</p>");
}`

document.getElementById("allTheCode").innerText = `function userInformationHTML(user) {
    return "
        <h2>" + user.name +
            "<span class='small-name'>
                (@<a href='" + user.html_url + "' target='_blank'>" + user.login + "</a>)
            </span>
        </h2>
        <div class='gh-content'>
            <div class='gh-avatar'>
                <a href='" + user.html_url = "' target='_blank'>
                    <img src='" + user.avatar_url + "' width='80' height='80' alt='user.login' />
                </a>
            </div>
            <p>Followers: " + user.followers + "- Following " + user.following + "<br> Repos: " + user.public_repos + "</p>
        </div>";
}

function repoInformationHTML(repos) {
    if (repos.length == 0) {
        return '<div class="clearfix repo-list">No repos!</div>';
    }

    let listItemsHTML = repos.map(function(repo) {
        return '<li>
                    <a href="repo.html_url" target="_blank">' +  repo.name </a>
                </li>';
    });

    return '<div class="clearfix repo-list">
                <p>
                    <strong>Repo List:</strong>
                </p>
                <ul>
                    + listItemsHTML.join("")}
                </ul>
            </div>';
}

function fetchGitHubInformation(event) {
    $("#gh-user-data").html("");
    $("#gh-repo-data").html("");

    let username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html("<p>Please enter a GitHub username</p>");
    }

    $("#gh-user-data").html(
        '<div class="slider">
            <div class="loader">
                <div class="inner"></div>
            </div>
        </div>');

    $.when(
        $.getJSON("https://api.github.com/users/" + username),
        $.getJSON(https://api.github.com/users/" + username + "/repos")
    ).then(
        function(firstResponse, secondResponse) {
            let userData = firstResponse[0];
                let repoData = secondResponse[0];
            $("#gh-user-data").html(userInformationHTML(userData));
                $("#gh-repo-data").html(repoInformationHTML(repoData));
        },
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#gh-user-data").html(
                    "<p>No info found for user " + username + "</p>");
            } else if (errorResponse.status === 403) {
                let resetTime = new Date(errorResponse.getResponseHeader('X-RateLimit-Reset') * 1000);
                $("#gh-user-data").html("<p>Too many requests, please wait until " + resetTime.toLocaleTimeString() + "</p>");
            } else {
                console.log(errorResponse);
                $("#gh-user-data").html(
                    "<p>Error: " + errorResponse.responseJSON.message + "</p>);
            }
        });
}


$(document).ready(fetchGitHubInformation);
`

//----------------------------------------------------------------------------------------------------------------------------------------GitHub code
function userInformationHTML(user) {
    return `
        <h2>${user.name}
            <span class="small-name">
                (@<a href="${user.html_url}" target="_blank">${user.login}</a>)
            </span>
        </h2>
        <div class="gh-content">
            <div class="gh-avatar">
                <a href="${user.html_url}" target="_blank">
                    <img src="${user.avatar_url}" width="80" height="80" alt="${user.login}" />
                </a>
            </div>
            <p>Followers: ${user.followers} - Following ${user.following} <br> Repos: ${user.public_repos}</p>
        </div>`;
}

function repoInformationHTML(repos) {
    if (repos.length == 0) {
        return `<div class=repo-list">No repos!</div>`;
    }

    let listItemsHTML = repos.map(function(repo) {
        return `
                    <a class="btn button" href="${repo.html_url}" target="_blank">${repo.name}</a>
                `;
    });

    return `<div class="repo-list">
                <p>
                    <strong>Repo List:</strong>
                </p>
                <div>
                    ${listItemsHTML.join("")}
                </div>
            </div>`;
}

function fetchGitHubInformation(event) {
    $("#gh-user-data").html("");
    $("#gh-repo-data").html("");

    let username = $("#gh-username").val();
    let usernameJustin = $("#gh-username-justin").attr("class");
    if (!username) {
        $("#gh-user-data").html(`<p>Please enter a GitHub username</p>`);
        return;
    }

    $("#gh-user-data").html(
        `<div class="slider">
            <div class="loader">
                <div class="inner"></div>
            </div>
        </div>`);

    $("#gh-repo-data-justin").html(
        `<div class="slider" style="margin:0 auto;">
            <div class="loader">
                <div class="inner"></div>
            </div>
        </div>`);

    $.when(
        $.getJSON(`https://api.github.com/users/${username}`),
        $.getJSON(`https://api.github.com/users/${username}/repos`),
        $.getJSON(`https://api.github.com/users/${usernameJustin}/repos`)
        
        
    ).then(
        function(firstResponse, secondResponse, thirdResponse) {
            let userData = firstResponse[0];
            let repoData = secondResponse[0];
            $("#gh-user-data").html(userInformationHTML(userData));
            $("#gh-repo-data").html(repoInformationHTML(repoData));

            let repoDataJustin = thirdResponse[0];
            $("#gh-repo-data-justin").html(repoInformationHTML(repoDataJustin));
        },
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#gh-user-data").html(
                    `<p>No info found for user ${username}</p>`);
            } else if (errorResponse.status === 403) {
                var resetTime = new Date(errorResponse.getResponseHeader('X-RateLimit-Reset') * 1000);
                //console.log(getResponseHeader)
                $("#gh-user-data").html(`<p>Too many requests, please wait until ${resetTime.toLocaleTimeString()}</p>`);
                $("#gh-repo-data-justin").html(`<p>Looking for my repos? Unfortunately, you've made too many requests, please wait until ${resetTime.toLocaleTimeString()}.</p>
                <p><a class="footer-menu-list" href="https://github.com/Justin-Sawyer?tab=repositories" target="_blank">Or click here!</a></p>`);
            } else {
                console.log(errorResponse);
                $("#gh-user-data").html(
                    `<p>Error: ${errorResponse.responseJSON.message}</p>`);
                $("#gh-repo-data-justin").html(
                    `<p>Error: ${errorResponse.responseJSON.message}</p>`);
            }
        });
}

$(document).ready(fetchGitHubInformation);