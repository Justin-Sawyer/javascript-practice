$(document).ready(function() {
// ------------------------------------------------------------------------------------------------ Example code
    document.getElementById("example").innerText = `1   $(document).ready(function() {
2        $("element etc.").event(function() {
3           code to be executed;
4        });
5   });`;

// ------------------------------------------------------------------------------------------------ Footer links
    $(".footer-section a").addClass("white");

// ------------------------------------------------------------------------------------------------ <code></code> mouseover and mouseout
    $("code").mouseover(function() {
        $("code").css("color", "purple");
        $("pre>code>p").css("color", "purple");
    });
    $("code").mouseleave(function() {
        $("code").css("color", "#c13e70");
        $("pre>code>p").css("color", "#212529");
    });

// ------------------------------------------------------------------------------------------------ Explain code for <code></code> mouseover and mouseout
    document.getElementById("codeToPurple").innerText = `2  $("code").mouseover(function() {
3       $("code").css("color", "purple");
4       $("pre>code>p").css("color", "purple");
5   });
6
7   $("code").mouseleave(function() {
8       $("code").css("color", "#c13e70");
9       $("pre>code>p").css("color", "#212529");
10  });`

// ------------------------------------------------------------------------------------------------ <button></button> click and mouseout color change
    $(".btn, .button").click(function() {
        $(this).css("background-color", "#c13e70");
        $(this).css("border", "solid 1px #c13e70");
    });

    $(".btn, .button").mouseout(function() {
        $(this).css("background-color", "#047afb");
        $(this).css("border", "solid 1px #047afb");
    });

// ------------------------------------------------------------------------------------------------ Explaine code for <button></button> click and mouseout color change
    document.getElementById("buttonCode").innerText = `2    $(".btn, .button").click(function() {
3       $(this).css("background-color", "#c13e70");
4       $(this).css("border", "solid 1px #c13e70");
5   });
6
7   $(".btn, .button").mouseout(function() {
8       $(this).css("background-color", "#047afb");
9       $(this).css("border", "solid 1px #047afb");
10  });`

// ------------------------------------------------------------------------------------------------ <pre></pre> mouseover and out color change
    $(".grayBackground").mouseover(function() {
        $("pre").css("background-color", "gray");
        $("pre>code>p").css("color", "white");
    })
    $(".grayBackground").mouseout(function() {
        $("pre").css("background-color", "beige");
        $("pre>code>p").css("color", "#212529");
    });

// ------------------------------------------------------------------------------------------------ Explain <pre></pre> mouseover and out color change
    document.getElementById("grayBackground").innerText = `2    $(".grayBackground").mouseover(function() {
3       $("pre").css("background-color", "gray");
4       $("pre>code>p").css("color", "white");
5   })
6
7   $(".grayBackground").mouseout(function() {
8       $("pre").css("background-color", "beige");
9       $("pre>code>p").css("color", "#212529");
10  });`

// ------------------------------------------------------------------------------------------------ Fade In and Out
    $(".fadeIn").click(function() {
        $(".fadein").fadeIn("slow");
    });

    $(".fadeOut").click(function() {
        $(".fadein").fadeOut("slow");
    });

// ------------------------------------------------------------------------------------------------ Explain fade In and Out
    document.getElementById("fadeCode").innerText = `$(".fadeIn").click(function() {
    $(".fadein").fadeIn("slow");
});

$(".fadeOut").click(function() {
    $(".fadein").fadeOut("slow");
});`

// ------------------------------------------------------------------------------------------------ Slide In and Out
    $(".slideDown").click(function() {
        $(".slidedown").slideDown("slow");
    });
    
    $(".slideUp").click(function() {
        $(".slidedown").slideUp("slow");
    });

// ------------------------------------------------------------------------------------------------ Explain slide in and out
    document.getElementById("slideCode").innerText = `$(".slideDown").click(function() {
    $(".slidedown").slideDown("slow");
});

$(".slideUp").click(function() {
    $(".slidedown").slideUp("slow");
});`

// ------------------------------------------------------------------------------------------------ Show and hide
    $(".show").click(function() {
        $(".showhide").show("slow");
    });
    
    $(".hide").click(function() {
        $(".showhide").hide("slow");
    });

// ------------------------------------------------------------------------------------------------ Explain show and hide
    document.getElementById("showhideCode").innerText = `$(".show").click(function() {
    $(".showhide").show("slow");
});

$(".hide").click(function() {
    $(".showhide").hide("slow");
});`

// ------------------------------------------------------------------------------------------------ Fade To photo
    $(".fadeTo").click(function() {
        $("#dogs").fadeTo(500, 0.2);
        $(".showFadeTo").show("slow")
    });

    $(".fadeToBack").click(function() {
        $("#dogs").fadeTo(500, 1);
        $(".showFadeTo").hide("slow")
    });

// ------------------------------------------------------------------------------------------------ Explain fade to photo
    document.getElementById("fadeToCode").innerText = `$(".fadeTo").click(function() {
    $("#dogs").fadeTo(500, 0.2);
    $("#fadeTo").show("slow")
});

$(".fadeToBack").click(function() {
    $("#dogs").fadeTo(500, 1);
    $("#fadeTo").hide("slow")
});`

// ------------------------------------------------------------------------------------------------ Toggle photo
    $(".toggle").click(function() {
        $("#dogsdamour").toggle();
        $(".showToggle").toggle();
    });

    document.getElementById("toggleCode").innerText = `$(".toggle").click(function() {
    $("#dogsdamour").toggle();
    $(".showToggle").toggle();
});`

// ------------------------------------------------------------------------------------------------ Fade photo on mouseenter
    $("#dogsLogo").mouseenter(function() {
        $("#dogsLogo").fadeTo(1000, 0);
        $(".showMouseenter").fadeTo(1000, 1);
    });

    $("#dogsLogo").mouseleave(function() {
        $("#dogsLogo").fadeTo(1000, 1);
        $(".showMouseenter").fadeTo(1000, 0);
    });

    document.getElementById("fadeMouseenterCode").innerText = `$(".fadeMouseenter").mouseenter(function() {
    $("#dogsLogo").fadeTo(1000, 0.5);
    $(".showMouseenter").toggle(1000, 1);
});`

});
