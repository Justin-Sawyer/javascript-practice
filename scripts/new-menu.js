$(document).ready(function() {
//------------------------------------------------------------------------------------ Title color change
    $(".title-text").mouseenter(function() {
        $(".title-text").css("color", "black");
    });
    $(".title-text").mouseleave(function() {
        $(".title-text").css("color", "white");
    });

//------------------------------------------------------------------------------------ Menu color change
    $(".menu-text, .fontawesome-icon, .menu-list, .new-dropdown-menu, .menu-list-with-dropdown").mouseenter(function() {
        $(this).css("color", "white");
        let subMenuDropdown = $(".new-dropdown-submenu").attr("class").split(" ");
        let menuClass = subMenuDropdown[0];
        let className = subMenuDropdown[1];
        if ($(".new-dropdown-submenu").is(":visible")) {
            $("." + className).css("color", "white");
        } else {
            //Else turn all box elements with a box class black
            //and then change the color of all elements
            //with the same class name as the clicked element to red
            $("." + menuClass).mouseleave(function() {
                $("." + menuClass).css("color", "black")
            });
            $("." + className).mouseleave(function() {
                $("." + className).css("color", "white");
            });
        };
    });

    /*$(".menu-text, .fontawesome-icon, .menu-list, .new-dropdown-menu, .menu-list-with-dropdown").mouseleave(function() {
        $(this).css("color", "black");
        /*let subMenuDropdown = $(this).attr("class").split(" ");
        let menuClass = subMenuDropdown[0];
        let className = subMenuDropdown[1];
        if ($(".new-dropdown-submenu").is(":visible")) {
            $("." + className).css("color", "white");
        } else {
            //Else turn all box elements with a box class black
            //and then change the color of all elements
            //with the same class name as the clicked element to red
            $("." + boxClass).css("background-color", "black");
            $("." + className).css("background-color", "white");
        };
    });*/

//------------------------------------------------------------------------------------ Dropdown-menu appear
    $(".menu-text, .fontawesome-icon").on("click", function() {
            $(".new-dropdown-menu").slideToggle("fast", function() {
                if ($(".new-dropdown-submenu").is(":visible")) {
                    $(".new-dropdown-submenu").slideUp("fast")
                }
            });
    });

//------------------------------------------------------------------------------------ Dropdown-submenu appear
/*$(".new-dropdown-menu").on("click", function() {
        $(".new-dropdown-menu>p").css("color", "white");
        $(".new-dropdown-submenu").slideToggle("fast", function() {
            if ($(".new-dropdown-submenu").is(":visible")) {
                $(".new-dropdown-menu>p").css("color", "white");
            } else {
                $(".new-dropdown-menu>p").css("color", "black");
            }
        });
    });*/

    $(".numbers").on("click", function() {
        $(".numbers>p").css("color", "white");
        $(".numbers-sub").slideToggle("fast", function() {
            if ($(".numbers-sub").is(":visible")) {
                $(this).css("color", "white");
                $(".strings-sub").slideUp("fast");
                $(".strings>p").css("color", "black");
            } else {
                $(".numbers>p").css("color", "black");
            }
        });
    });

    $(".strings").on("click", function() {
        $(".strings>p").css("color", "white");
        $(".strings-sub").slideToggle("fast", function() {
            if ($(".strings-sub").is(":visible")) {
                $(this).css("color", "white");
                $(".numbers-sub").slideUp("fast");
                $(".numbers>p").css("color", "black");
                
            } else {
                $(".strings>p").css("color", "black");
            }
        });
    });

    //selecting the box class, acting on click
    /*$(".new-dropdown-menu").on("click", function() {
        //attributing the NUMBER of box class to a variable - the "split") tells the code that the classNames = "one", "two, or "three"
        let classNames = $(this).attr("class").split(" ")
        let subsClass = $(classNames[1]);
        //$("." + classNames[1]).css("background-color", "red");
        //gives us an array containing 2 strings, "box", and "one" (etc)
        $("." + subsClass).slideToggle();
        });*/
    

    

//------------------------------------------------------------------------------------ Dropdown-submenu text-color
    $(".sub-menu-link>a").mouseenter(function() {
        $(this).css("color", "white");
    })

    $(".sub-menu-link>a").mouseleave(function() {
        $(this).css("color", "black");
    })
})