$(document).ready(function() {
//------------------------------------------------------------------------------------ "Javascrpting" color change
    $(".title-link").mouseenter(function() {
        $(this).css("color", "black");     //Turns "Javascripting" black on mouseenter
    });
    $(".title-link").mouseleave(function() {
        $(this).css("color", "white");     //Turns "Javascripting" white on mouseleave 
    });

//------------------------------------------------------------------------------------ Menu, bars and no-dropdown menu items color
    $(".menu-text, .fontawesome-icon, .menu-list").mouseenter(function() {
        $(this).css("color", "white");              //Turns THIS "menu", "bars" and main dropdown-menu list (without children) white on mouseenter
    });                                             //Dropdown with children do not change color

    $(".menu-text, .fontawesome-icon, .menu-list").mouseleave(function() {
        $(this).css("color", "black");              //Turns THIS "menu", "bars" and main dropdown-menu list (without children) black on mouseleave
    });                                             //Dropdown with children do not change color

//------------------------------------------------------------------------------------ Main dropdown-menu list toggle
    $(".menu-text, .fontawesome-icon").on("click", function() {
        $(".new-dropdown-menu").slideToggle("fast", function() { //Toggles open main dropdown-menu list open or closed
            if ($(".new-dropdown-submenu").is(":visible")) {
                $(".new-dropdown-submenu").slideUp("fast")      //If main-dropdown menu list is open, slides menu Up on click of "menu"" or "bars"
            }
        });
    });

//------------------------------------------------------------------------------------ Menu items with children AND children color change
    $(".new-dropdown-menu").mouseenter(function() {
        $(this).css("color", "white");                          //Turns THIS main-dropdown menu list with children AND children white on mouseenter
    });

    $(".new-dropdown-menu").mouseleave(function() {
        $(this).css("color", "black");                          //Turns THIS main-dropdown menu list with children AND children black on mouseleave
            
    });

//------------------------------------------------------------------------------------ Menu items with children AND children color change
    $(".menu-list-with-dropdown").mouseenter(function() {
        $(this).css("color", "white");                         //Turns THIS main-dropdown menu list with children AND children white on mouseenter
    });
        
    $(".menu-list-with-dropdown").mouseleave(function() {
        $(this).css("color", "black");                         //Turns THIS main-dropdown menu list with children AND children white on mouseenter
    });
    
//------------------------------------------------------------------------------------ Menu items with children AND children color change
    $(".numbers").on("click", function() {
        $(".strings-sub, .arrays-sub, .booleans-sub, .loops-sub, .functions-sub, .objects-sub, .dom-sub, jQuery-sub").slideUp("fast");
        $(".strings-dropdown, .arrays-dropdown, .booleans-dropdown, .loops-dropdown, .functions-dropdown, .objects-dropdown, .dom-dropdown, .jQuery-dropdown").css("color", "black");
        $(".numbers-sub").slideToggle("fast", function() {
            if ($(this).is(":visible")) {     
                $(".numbers").css("color", "white");
                $(".strings, .arrays, .booleans, .loops, .functions, .objects, .dom, .jQuery").css("color", "black");
                $(this).mouseenter(function() {
                    $(".numbers-dropdown").css("color", "white");
            });
            if ($(this).is(":visible")) {
                $(".numbers-dropdown").mouseleave(function() {
                    $(".numbers").css("color", "black");                  
                });
            };
            } 
        $(".strings-dropdown, .arrays-dropdown, .booleans-dropdown, .loops-dropdown, .functions-dropdown, .objects-dropdown, .dom-dropdown, .jQuery-dropdown").css("color", "black"); 
        });
    });

    $(".strings").on("click", function() {
        $(".numbers-sub, .arrays-sub, .booleans-sub, .loops-sub, .functions-sub, .objects-sub, .dom-sub, .jQuery-sub").slideUp("fast");
        $(".numbers-dropdown, .arrays-dropdown, .booleans-dropdown, .loops-dropdown, .functions-dropdown, .objects-dropdown, .dom-dropdown, .jQuery-dropdown").css("color", "black");
        $(".strings-sub").slideToggle("fast", function() {
            if ($(this).is(":visible")) {     
                $(".strings").css("color", "white");
                $(".numbers, .arrays, .booleans, .loops, .functions, .objects, .dom, .jQuery").css("color", "black");
                $(this).mouseenter(function() {
                    $(".strings-dropdown").css("color", "white");
                });
            if ($(this).is(":visible")) {
                $(".strings-dropdown").mouseleave(function() {
                    $(".strings").css("color", "black");                  
                });
            };
            } 
            $(".numbers-dropdown, .arrays-dropdown, .booleans-dropdown, .loops-dropdown, .functions-dropdown, .objects-dropdown, .dom-dropdown, .jQuery-dropdown").css("color", "black"); 
        });
    });

    $(".arrays").on("click", function() {
        $(".numbers-sub, .strings-sub, .booleans-sub, .loops-sub, .functions-sub, .objects-sub, .dom-sub, .jQuery-sub").slideUp("fast");
        $(".numbers-dropdown, .strings-dropdown, .booleans-dropdown, .loops-dropdown, .functions-dropdown, .objects-dropdown, .dom-dropdown, .jQuery-dropdown").css("color", "black");
        $(".arrays-sub").slideToggle("fast", function() {
            if ($(this).is(":visible")) {     
                $(".arrays").css("color", "white");
                $(".numbers, .strings, .booleans, .loops, .functions, .objects, .dom, .jQuery").css("color", "black");
                $(this).mouseenter(function() {
                    $(".arrays-dropdown").css("color", "white");
                });
            if ($(this).is(":visible")) {
                $(".arrays-dropdown").mouseleave(function() {
                    $(".arrays").css("color", "black");                  
                });
            };
            } 
            $(".numbers-dropdown, .strings-dropdown, .booleans-dropdown, .loops-dropdown, .functions-dropdown, .objects-dropdown, .dom-dropdown, .jQuery-dropdown").css("color", "black"); 
        });
    });

    $(".booleans").on("click", function() {
        $(".numbers-sub, .strings-sub, .arrays-sub, .loops-sub, .functions-sub, .objects-sub, .dom-sub, .jQuery-sub").slideUp("fast");
        $(".numbers-dropdown, .strings-dropdown, .arrays-dropdown, .loops-dropdown, .functions-dropdown, .objects-dropdown, .dom-dropdown, .jQuery-dropdown").css("color", "black");
        $(".booleans-sub").slideToggle("fast", function() {
            if ($(this).is(":visible")) {     
                $(".booleans").css("color", "white");
                $(".numbers, .strings, .arrays, .loops, .functions, .objects, .dom, .jQuery").css("color", "black");
                $(this).mouseenter(function() {
                    $(".booleans-dropdown").css("color", "white");
                });
            if ($(this).is(":visible")) {
                $(".booleans-dropdown").mouseleave(function() {
                    $(".booleans").css("color", "black");                  
                });
            };
            } 
            $(".numbers-dropdown, .strings-dropdown, .arrays-dropdown, .loops-dropdown, .functions-dropdown, .objects-dropdown, .dom-dropdown, .jQuery-dropdown").css("color", "black"); 
        });
    });

    $(".loops").on("click", function() {
        $(".numbers-sub, .strings-sub, .arrays-sub, .booleans-sub, .functions-sub, .objects-sub, .dom-sub, .jQuery").slideUp("fast");
        $(".numbers-dropdown, .strings-dropdown, .arrays-dropdown, .booleans-dropdown, .functions-dropdown, .objects-dropdown, .dom-dropdown, .jQuery-dropdown").css("color", "black");
        $(".loops-sub").slideToggle("fast", function() {
            if ($(this).is(":visible")) {     
                $(".loops").css("color", "white");
                $(".numbers, .strings, .arrays, .booleans, .functions, .objects, .dom, .jQuery").css("color", "black");
                $(this).mouseenter(function() {
                    $(".loops-dropdown").css("color", "white");
                });
            if ($(this).is(":visible")) {
                $(".loops-dropdown").mouseleave(function() {
                    $(".loops").css("color", "black");                  
                });
            };
            } 
            $(".numbers-dropdown, .strings-dropdown, .arrays-dropdown, .booleans-dropdown, .functions-dropdown, .objects-dropdown, .dom-dropdown, .jQuery-dropdown").css("color", "black"); 
        });
    });

    $(".functions").on("click", function() {
        $(".numbers-sub, .strings-sub, .arrays-sub, .booleans-sub, .loops-sub, .objects-sub, .dom-sub, .jQuery-sub").slideUp("fast");
        $(".numbers-dropdown, .strings-dropdown, .arrays-dropdown, .booleans-dropdown, .loops-dropdown, .objects-dropdown, .dom-dropdown, .jQuery-dropdown").css("color", "black");
        $(".functions-sub").slideToggle("fast", function() {
            if ($(this).is(":visible")) {     
                $(".functions").css("color", "white");
                $(".numbers, .strings, .arrays, .booleans, .loops, .objects, .dom, .jQuery").css("color", "black");
                $(this).mouseenter(function() {
                    $(".functions-dropdown").css("color", "white");
                });
            if ($(this).is(":visible")) {
                $(".functions-dropdown").mouseleave(function() {
                    $(".functions").css("color", "black");                  
                });
            };
            } 
            $(".numbers-dropdown, .strings-dropdown, .arrays-dropdown, .booleans-dropdown, .loops-dropdown, .objects-dropdown, .dom-dropdown, .jQuery-dropdown").css("color", "black"); 
        });
    });

    $(".objects").on("click", function() {
        $(".numbers-sub, .strings-sub, .arrays-sub, .booleans-sub, .loops-sub, .functions-sub, .dom-sub, .jQuery-sub").slideUp("fast");
        $(".numbers-dropdown, .strings-dropdown, .arrays-dropdown, .booleans-dropdown, .loops-dropdown, .functions-dropdown, .dom-dropdown, .jQuery-dropdown").css("color", "black");
        $(".objects-sub").slideToggle("fast", function() {
            if ($(this).is(":visible")) {     
                $(".objects").css("color", "white");
                $(".numbers, .strings, .arrays, .booleans, .loops, .functions, .dom, .jQuery").css("color", "black");
                $(this).mouseenter(function() {
                    $(".objects-dropdown").css("color", "white");
                });
            if ($(this).is(":visible")) {
                $(".objects-dropdown").mouseleave(function() {
                    $(".objects").css("color", "black");                  
                });
            };
            } 
            $(".numbers-dropdown, .strings-dropdown, .arrays-dropdown, .booleans-dropdown, .loops-dropdown, .functions-dropdown, .dom-dropdown, .jQuery-dropdown").css("color", "black"); 
        });
    });

    $(".dom").on("click", function() {
        $(".numbers-sub, .strings-sub, .arrays-sub, .booleans-sub, .loops-sub, .functions-sub, .objects-sub, .jQuery-sub").slideUp("fast");
        $(".numbers-dropdown, .strings-dropdown, .arrays-dropdown, .booleans-dropdown, .loops-dropdown, .functions-dropdown, .objects-dropdown, .jQuery-dropdown").css("color", "black");
        $(".dom-sub").slideToggle("fast", function() {
            if ($(this).is(":visible")) {     
                $(".dom").css("color", "white");
                $(".numbers, .strings, .arrays, .booleans, .loops, .functions, .objects, .jQuery").css("color", "black");
                $(this).mouseenter(function() {
                    $(".dom-dropdown").css("color", "white");
                });
            if ($(this).is(":visible")) {
                $(".dom-dropdown").mouseleave(function() {
                    $(".dom").css("color", "black");                  
                });
            };
            } 
            $(".numbers-dropdown, .strings-dropdown, .arrays-dropdown, .booleans-dropdown, .loops-dropdown, .functions-dropdown, .objects-dropdown, .jQuery-dropdown").css("color", "black"); 
        });
    });

    $(".jQuery").on("click", function() {
        $(".numbers-sub, .strings-sub, .arrays-sub, .booleans-sub, .loops-sub, .functions-sub, .objects-sub, .dom-sub").slideUp("fast");
        $(".numbers-dropdown, .strings-dropdown, .arrays-dropdown, .booleans-dropdown, .loops-dropdown, .functions-dropdown, .objects-dropdown, .dom-dropdown").css("color", "black");
        $(".jQuery-sub").slideToggle("fast", function() {
            if ($(this).is(":visible")) {     
                $(".jQuery").css("color", "white");
                $(".numbers, .strings, .arrays, .booleans, .loops, .functions, .objects, .dom").css("color", "black");
                $(this).mouseenter(function() {
                    $(".jQuery-dropdown").css("color", "white");
                });
            if ($(this).is(":visible")) {
                $(".jQuery-dropdown").mouseleave(function() {
                    $(".jQuery").css("color", "black");                  
                });
            };
            } 
            $(".numbers-dropdown, .strings-dropdown, .arrays-dropdown, .booleans-dropdown, .loops-dropdown, .functions-dropdown, .objects-dropdown, .dom-dropdown").css("color", "black"); 
        });
    });

//------------------------------------------------------------------------------------ Dropdown-submenu text-color
    $(".sub-menu-link").mouseenter(function() {
        $(this).css("color", "white");
    });  

    $(".sub-menu-link").mouseleave(function() {
        $(this).css("color", "black");
    });
});



