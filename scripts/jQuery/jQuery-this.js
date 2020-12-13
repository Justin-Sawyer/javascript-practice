$(document).ready(function() {
//----------------------------------------------------------------------this slide up 1
    $(".card p").click(function() {
        $(this).slideToggle()
    });

    document.getElementById("this1").innerText = `$(".card p").click(function() {
    $(this).slideToggle()
});`

    document.getElementById("this1styling").innerText = `$(".card p").click(function() {
    $(this).css("background-color", "pink");
});`

    document.getElementById("this1class").innerText = `$(".card p").click(function() {
    $(this).addClass("pink");
});`

//-----------------------------------------------------------------------this selecting elements by class
    document.getElementById("classesForBoxes").innerText = `<div class="container-box">
    <div class="box one">
        <p>1</p>
    </div>
</div>`;

    $(".box").on("click", function() {
        let boxes = $(this).attr("class").split(" ");
        $("." + boxes[1]).css("background-color", "#c13e70");
    });

    document.getElementById("jQueryBoxes").innerText = `$(".box").on("click", function() {
    let boxes = $(this).attr("class").split(" ");
    $("." + boxes[1]).css("background-color", "#c13e70");
});`

    document.getElementById("array").innerText = `boxes = ["box", "one"];`

//-------------------------------------------------------------------------------this selecting only CERTAIN elements
    $(".box1").on("click", function() {
        /* When we click on an element that a "box" class, this event will be fired: */
        let classNames = $(this).attr("class").split(" ");
        let boxClass = classNames[0];
        let className = classNames[1];
        if ($(this).css("background-color") == "rgb(3, 121, 251)") {
            //If this object is already blue, turn it pink
            $("." + className).css("background-color", "#c13e70")
        } else {
            //Else turn all box elements with a box class blue and then change the color of all elements
            //with the same class name as the clicked element to pink
            $("." + boxClass).css("background-color", "#c13e70");
            $("." + className).css("background-color", "rgb(3, 121, 251)");
        };
    });

    document.getElementById("classesForBoxes1").innerText = `$(".box1").on("click", function() {
    /* When we click on an element that has a "box" class, this event will be fired: */
    let classNames = $(this).attr("class").split(" ");
    let boxClass = classNames[0];
    let className = classNames[1];
    if ($(this).css("background-color") == "rgb(3, 121, 251)") {
        //If this object is already blue, turn it pink
        $("." + className).css("background-color", "#c13e70")
    } else {
        //Else turn all box elements with a box class blue and then change the color of all elements
        //with the same class name as the clicked element to pink
        $("." + boxClass).css("background-color", "#c13e70");
        $("." + className).css("background-color", "rgb(3, 121, 251)");
    };
});`

})