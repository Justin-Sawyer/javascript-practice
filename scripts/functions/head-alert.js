document.addEventListener("DOMContentLoaded", function() {
    selfDeclaredAlert();
});

function selfDeclaredAlert() {
    //alert("Are you ready to learn about functions?");
    document.getElementById("selfDeclaredAlert").innerText = `(function selfDeclaredAlert() {
    alert("Are you ready to learn about functions?");
})();`;
    setTimeout(function(){ alert("Are you ready to learn about functions?"); }, 1000);
}