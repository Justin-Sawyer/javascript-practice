$(document).ready(function() {
// ------------------------------------------------------------------------------------------------ Method chaining
    $("#blueDiv").mouseenter(function() {
        $("#blueDiv").removeClass("div-background-blue").addClass("div-background-pink");
        $(".showMethodChaining").toggle(1000);
    });

    $("#blueDiv").mouseleave(function() {
        $("#blueDiv").removeClass("div-background-pink").addClass("div-background-blue");
    });

    document.getElementById("methodChainingClassCode").innerText = `$("#blueDiv").mouseenter(function() {
    $("#blueDiv").removeClass("div-background-blue").addClass("div-background-pink");
    $(".showMethodChaining").toggle();
});

$("#blueDiv").mouseleave(function() {
    $("#blueDiv").removeClass("div-background-pink").addClass("div-background-blue");
});`

    //-----------------
    $("#mouse-on-me").mouseenter(function() {
        $("#mouse-on-me").css("color", "#c13e70").slideUp(1000).slideDown(1000);
        $(".showMethodEventChaining").show(1000);
    });

    $("#mouse-on-me").mouseleave(function() {
        $("#mouse-on-me").css("color", "black")
        $(".showMethodEventChaining").hide(1000);
    });

    document.getElementById("methodChainingEventCode").innerText = `$("#mouse-on-me").mouseenter(function() {
    $("#mouse-on-me").css("color", "#c13e70").slideUp(1000).slideDown(1000);
    $(".showMethodEventChaining").show(1000);
});

$("#mouse-on-me").mouseleave(function() {
    $("#mouse-on-me").css("color", "black")
    $(".showMethodEventChaining").hide(1000);
});`
});
