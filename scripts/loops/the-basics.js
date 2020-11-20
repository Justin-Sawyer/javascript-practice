(function exampleRepeat1() {
    document.getElementById("exampleRepeat1").innerText = `alert("Hi");
alert("Hi");
alert("Hi");
alert("Hi");
alert("Hi");
alert("Hi");
alert("Hi");
alert("Hi");
alert("Hi");
alert("Hi");`
})();

(function exampleRepeat2() {
    document.getElementById("exampleRepeat2").innerText = `alert("Hi", "Hi", "Hi", "Hi", "Hi", "Hi", "Hi", "Hi", "Hi", "Hi");`
})();

function exampleRepeat3() {
    alert("Hi", "Hi", "Hi", "Hi", "Hi", "Hi", "Hi", "Hi", "Hi", "Hi");
}

(function loopEx() {
    document.getElementById("loopEx").innerText = `for (let i = (#); i < (length); i++) {
    alert("Hi");
}`
})();

function loopEx1() {
    for (let i=0; i<3; i++) {
        alert("Hi");
    };
    document.getElementById("loopEx1").innerText = `for (let i=0; i<3; i++) {
    alert("Hi");
};`
}