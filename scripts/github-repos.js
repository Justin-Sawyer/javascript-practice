/*function userInformationHTML(user) {
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
}*/

function repoInformationHTML(repos) {
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
    let usernameJustin = $("#gh-username-justin").attr("class");
    $("#gh-repo-data-justin").html(
        `<div class="slider" style="margin:0 auto;">
            <div class="loader">
                <div class="inner"></div>
            </div>
        </div>`);

    $.when(
        $.getJSON(`https://api.github.com/users/${usernameJustin}/repos`)
        
        
    ).then(
        function(response) {
            let repoDataJustin = response;
            $("#gh-repo-data-justin").html(repoInformationHTML(repoDataJustin));
        },
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#gh-user-data").html(
                    `<p>No info found for user ${username}</p>`);
            } else if (errorResponse.status === 403) {
                var resetTime = new Date(errorResponse.getResponseHeader('X-RateLimit-Reset') * 1000);
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