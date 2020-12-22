$(document).ready(function() {
    document.getElementById("starwarsapi").innerText = `curl https://ci-swapi.herokuapp.com/api/`;

    document.getElementById("starwarsapi").innerText = `curl https://ci-swapi.herokuapp.com/api/people/2/`;

    document.getElementById("jsontool").innerText = `curl https://ci-swapi.herokuapp.com/api/people/2/ | python -m json.tool`;




    //document.getElementById("curlToFile").innerText = `curl http://www.google.com > index.html`
})