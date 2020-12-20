$(document).ready(function() {
//parent()
    document.getElementById("parent1").innerText = `$(".sub-menu-link").parent();`
    $(".parent1").on("click", function() {
        console.log(`Parent elements of class .sub-menu-link:`);
        console.log($(".sub-menu-link").parent());
    });

    document.getElementById("parent2").innerText = `$(".jQuery-one").parent();`
    $(".parent2").on("click", function() {
        console.clear();
        console.log(`Parent elements of class .jQuery-one:`);
        console.log($(".jQuery-one").parent());
    });

//grandparent()
    document.getElementById("grandparent").innerText = `$(".sub-menu-link").parent().parent();`
    $(".grandparent").on("click", function() {
        console.clear();
        console.log(`Grandparent elements of class .sub-menu-link:`);
        console.log($(".sub-menu-link").parent().parent());
    });

//children
    document.getElementById("children1").innerText = `$(".new-dropdown-menu").children();`
    $(".children1").on("click", function() {
        console.clear();
        console.log(`Children elements of class .new-dropdown-menu:`);
        console.log($(".new-dropdown-menu").children());
    })

    document.getElementById("children2").innerText = `$(".new-dropdown-menu").children("p");`
    $(".children2").on("click", function() {
        console.clear();
        console.log(`Children paragraph elements of class .new-dropdown-menu:`);
        console.log($(".new-dropdown-menu").children("p"));
    });

    document.getElementById("grandchildren").innerText = `$(".jQuery").children("div").children("a");`
    $(".grandchildren").on("click", function() {
        console.clear();
        console.log(`Grandchildren <a> elements of class .jQuery:`);
        console.log($(".jQuery").children("div").children("a"));
    });

//next()
    document.getElementById("next1").innerText = `$(".jQuery-one").next();`
    $(".next1").on("click", function() {
        console.clear();
        console.log(`Next element of class .jQuery-one:`);
        console.log($(".jQuery-one").next());
    });

    document.getElementById("next2").innerText = `$(".jQuery-dropdown").next("div");`
    $(".next2").on("click", function() {
        console.clear();
        console.log(`Next <div> element of class .jQuery-dropdown:`);
        console.log($(".jQuery-dropdown").next("div"));
    });

//prev()
    document.getElementById("prev1").innerText = `$(".jQuery-two").prev();`
    $(".prev1").on("click", function() {
        console.clear();
        console.log(`Previous element to class .jQuery-two:`);
        console.log($(".jQuery-two").prev());
    });

    document.getElementById("prev2").innerText = `$(".jQuery").next("prev");`
    $(".prev2").on("click", function() {
        console.clear();
        console.log(`Previous <div> element tp class .jQuery:`);
        console.log($(".jQuery").prev("div"));
    });

//first()
    document.getElementById("first1").innerText = `$(".new-dropdown-menu").first();`
    $(".first1").on("click", function() {
        console.clear();
        console.log(`First element of class .new-dropdown-menu:`);
        console.log($(".new-dropdown-menu").first());
    });

//SECOND
    document.getElementById("second").innerText = `$(".new-dropdown-menu").first().next();`
    $(".second").on("click", function() {
        console.clear();
        console.log(`First then next element of class .new-dropdown-menu:`);
        console.log($(".new-dropdown-menu").first().next());
    });

//last()
    document.getElementById("last").innerText = `$(".new-dropdown-menu").last();`
    $(".last").on("click", function() {
        console.clear();
        console.log(`Last element of class .new-dropdown-menu:`);
        console.log($(".new-dropdown-menu").last());
    });

//siblings()
    document.getElementById("siblings").innerText = `$(".new-dropdown-menu").siblings();`
    $(".siblings").on("click", function() {
        console.clear();
        console.log(`Sibling elements of class .new-dropdown-menu:`);
        console.log($(".new-dropdown-menu").siblings());
    });

//changeHoistingColor
    document.getElementById("changeHoistingColor").innerText = `$(".changeHoistingColor").on("click", function() {
    let changeHoistingColor = $(".new-dropdown-menu").first();
    $(changeHoistingColor).next().addClass("new-dropdown-menu-purple");
});`
    $(".changeHoistingColor").on("click", function() {
        let changeHoistingColor = $(".new-dropdown-menu").first();
        $(changeHoistingColor).next().addClass("new-dropdown-menu-purple").append(`<p id="purple">Hey! I turned purple!</p>`);
    });

//resetHoistingColor
    $(".resetHoistingColor").on("click", function() {
        document.getElementById("resetHoistingColor").innerText = `$(".resetHoistingColor").on("click", function() {
    let resetHoistingColor = $(".new-dropdown-menu").first();
    $(resetHoistingColor).next().removeClass("new-dropdown-menu-purple");
});`
        let resetHoistingColor = $(".new-dropdown-menu").first();
        $(resetHoistingColor).next().removeClass("new-dropdown-menu-purple");
        $("#purple").remove();
    });

//toggleHoistingColor
    document.getElementById("toggleHoistingColor").innerText = `$(".toggleHoistingColor").on("click", function() {
    let toggleHoistingColor = $(".new-dropdown-menu").first();
    $(toggleHoistingColor).next().toggleClass("new-dropdown-menu-purple");
});`

    $(".toggleHoistingColor").on("click", function() {
        let toggleHoistingColor = $(".new-dropdown-menu").first();
        $(toggleHoistingColor).next().toggleClass("new-dropdown-menu-purple");
    });

//Change box color and reset
    /*let reset;
    $(".full-box").css("background-color", "white", function() {
        reset = $(this).css("background-color");
        console.log(reset);
        $(".resetColor").click().css("background-color", reset);
    });*/
    /*document.getElementById("full-box").style.backgroundColor = "white";
        let reset = $(this).css("background-color");
        $("#full-box").css("background-color", reset);*/
    
    $(".new-box1").on("click", function() {
        $(".new-box").siblings().first().css("background-color", "#c13e70");
    })
    $(".new-box2").on("click", function() {
        $(".new-box").siblings().first().css("background-color", "#047afb");
    })
    $(".new-box3").on("click", function() {
        $(".new-box").siblings().first().css("background-color", "purple");
    })
    $(".new-box4").on("click", function() {
        $(".new-box").siblings().first().css("background-color", "yellow");
    })
    $(".new-box5").on("click", function() {
        $(".new-box").siblings().first().css("background-color", "brown");
    })
    $(".new-box6").on("click", function() {
        $(".new-box").siblings().first().css("background-color", "green");
    })
})
