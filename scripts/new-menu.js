$(document).ready(function() {
//------------------------------------------------------------------------------------ "Javascrpting" color change
    $(".title-link").mouseenter(function() {
        $(this).css("color", "black");                              //Turns "Javascripting" black on mouseenter
    });
    $(".title-link").mouseleave(function() {
        $(this).css("color", "white");                              //Turns "Javascripting" white on mouseleave 
    });

//------------------------------------------------------------------------------------ Menu, bars and no-dropdown menu items color
    $(".menu-text, .fontawesome-icon, .menu-list").mouseenter(function() {
        $(this).css("color", "white");                              //Turns THIS "menu", "bars" and main dropdown-menu list (without children) white on mouseenter
    });                                                             //Dropdown with children do not change color

    $(".menu-text, .fontawesome-icon, .menu-list").mouseleave(function() {
        $(this).css("color", "black");                              //Turns THIS "menu", "bars" and main dropdown-menu list (without children) black on mouseleave
    });                                                             //Dropdown with children do not change color

//------------------------------------------------------------------------------------ Main dropdown-menu list toggle
    $(".menu-text, .fontawesome-icon").on("click", function() {
        $(".new-dropdown-menu").slideToggle("fast", function() {    //Toggles open main dropdown-menu list open or closed
            if ($(".new-dropdown-submenu").is(":visible")) {
                $(".new-dropdown-submenu").slideUp("fast")          //If main-dropdown menu list is open, slides menu Up on click of "menu"" or "bars"
            }
        });
    });

//------------------------------------------------------------------------------------ Menu items with children AND children color change
    $(".new-dropdown-menu").mouseenter(function() {
        $(this).css("color", "white");                              //Turns THIS main-dropdown menu list with children AND children white on mouseenter
    });

    $(".new-dropdown-menu").mouseleave(function() {
        $(this).css("color", "black");                              //Turns THIS main-dropdown menu list with children AND children black on mouseleave
            
    });

//------------------------------------------------------------------------------------ Menu items with children AND children color change
    $(".menu-list-with-dropdown").mouseenter(function() {
        $(this).css("color", "white");                              //Turns THIS main-dropdown menu list with children AND children white on mouseenter
    });
        
    $(".menu-list-with-dropdown").mouseleave(function() {
        $(this).css("color", "black");                              //Turns THIS main-dropdown menu list with children AND children white on mouseenter
    });
    
//------------------------------------------------------------------------------------ Menu items with children AND children color change
    $(".numbers").on("click", function() {
        $(".strings-sub, .arrays-sub, .booleans-sub, .loops-sub, .functions-sub, .objects-sub, .dom-sub, jQuery-sub").slideUp("fast");
        $(".numbers-sub").slideToggle("fast", function() {
            /*if ($(this).is(":visible")) {
                $(this).mouseenter(function() {
                    $(".numbers, .numbers-dropdown").css("color", "white");
                });
                $(this).mouseout(function() {
                    $(".numbers, .numbers-dropdown").css("color", "white");
                });
            };
            if ($(this).is(":hidden")) {
                $(".numbers-dropdown").mouseleave(function() {
                    $(".menu-list-with-dropdown").css("color", "black");                  
                });
            };*/ 
        });
    });

    $(".strings").on("click", function() {
        $(".numbers-sub, .arrays-sub, .booleans-sub, .loops-sub, .functions-sub, .objects-sub, .dom-sub, .jQuery-sub").slideUp("fast");
        $(".strings-sub").slideToggle("fast", function() {
            /*if ($(this).is(":visible")) {
                $(this).mouseenter(function() {
                    $(".strings, .strings-dropdown").css("color", "white");
                });
            };
            if ($(this).is(":hidden")) {
                $(".strings-dropdown").mouseleave(function() {
                    $(".menu-list-with-dropdown").css("color", "black");                 
                });
            };*/
        });
    });

    $(".arrays").on("click", function() {
        $(".numbers-sub, .strings-sub, .booleans-sub, .loops-sub, .functions-sub, .objects-sub, .dom-sub, .jQuery-sub").slideUp("fast");
        $(".arrays-sub").slideToggle("fast", function() {
            /*if ($(this).is(":visible")) {
                $(this).mouseenter(function() {
                    $(".arrays, .arrays-dropdown").css("color", "white");
                });
            };
            if ($(this).is(":hidden")) {
                $(".arrays-dropdown").mouseleave(function() {
                    $(".menu-list-with-dropdown").css("color", "black");                 
                });
            };*/ 
        });
    });

    $(".booleans").on("click", function() {
        $(".numbers-sub, .strings-sub, .arrays-sub, .loops-sub, .functions-sub, .objects-sub, .dom-sub, .jQuery-sub").slideUp("fast");
        $(".booleans-sub").slideToggle("fast", function() {
            /*if ($(this).is(":visible")) {
                $(this).mouseenter(function() {
                    $(".booleans, .booleans-dropdown").css("color", "white");
                });
            };
            if ($(this).is(":hidden")) {
                $(".booleans-dropdown").mouseleave(function() {
                    $(".menu-list-with-dropdown").css("color", "black");                  
                });
            };*/
        });
    });

    $(".loops").on("click", function() {
        $(".numbers-sub, .strings-sub, .arrays-sub, .booleans-sub, .functions-sub, .objects-sub, .dom-sub, .jQuery").slideUp("fast");
        $(".loops-sub").slideToggle("fast", function() {
            /*if ($(this).is(":visible")) {
                $(this).mouseenter(function() {
                    $(".loops, .loops-dropdown").css("color", "white");
                });
            };
            if ($(this).is(":hidden")) {
                $(".loops-dropdown").mouseleave(function() {
                    $(".menu-list-with-dropdown").css("color", "black");                  
                });
            };*/
        });
    });

    $(".functions").on("click", function() {
        $(".numbers-sub, .strings-sub, .arrays-sub, .booleans-sub, .loops-sub, .objects-sub, .dom-sub, .jQuery-sub").slideUp("fast");
        $(".functions-sub").slideToggle("fast", function() {
            /*if ($(this).is(":visible")) {
                $(this).mouseenter(function() {
                    $(".functions, .functions-dropdown").css("color", "white");
                });
            };
            if ($(this).is(":hidden")) {
                $(".functions-dropdown").mouseleave(function() {
                    $(".menu-list-with-dropdown").css("color", "black");                 
                });
            };*/
        });
    });

    $(".objects").on("click", function() {
        $(".numbers-sub, .strings-sub, .arrays-sub, .booleans-sub, .loops-sub, .functions-sub, .dom-sub, .jQuery-sub").slideUp("fast");
        $(".objects-sub").slideToggle("fast", function() {
            /*if ($(this).is(":visible")) {
                $(this).mouseenter(function() {
                    $(".objects, .objects-dropdown").css("color", "white");
                });
            };
            if ($(this).is(":hidden")) {
                $(".objects-dropdown").mouseleave(function() {
                    $(".menu-list-with-dropdown").css("color", "black");               
                });
            };*/
        });
    });

    $(".dom").on("click", function() {
        $(".numbers-sub, .strings-sub, .arrays-sub, .booleans-sub, .loops-sub, .functions-sub, .objects-sub, .jQuery-sub").slideUp("fast");
        $(".dom-sub").slideToggle("fast", function() {
            /*if ($(this).is(":visible")) {
                $(this).mouseenter(function() {
                    $(".dom, .dom-dropdown").css("color", "white");
                });
            };
            if ($(this).is(":hidden")) {
                $(".dom-dropdown").mouseleave(function() {
                    $(".menu-list-with-dropdown").css("color", "black");                  
                });
            };*/ 
        });
    });

    $(".jQuery").on("click", function() {
        $(".numbers-sub, .strings-sub, .arrays-sub, .booleans-sub, .loops-sub, .functions-sub, .objects-sub, .dom-sub").slideUp("fast");
        $(".jQuery-sub").slideToggle("fast", function() {
            /*if ($(this).is(":visible")) {
                $(this).mouseenter(function() {
                    $(".jQuery, .jQuery-dropdown").css("color", "white");
                });
            };
            if ($(this).is(":hidden")) {
                $(".jQuery-dropdown").mouseleave(function() {
                    $(".menu-list-with-dropdown").css("color", "black");                  
                });
            };*/ 
        });
    });

//------------------------------------------------------------------------------------ Dropdown-submenu text-color
    $(".sub-menu-link").mouseenter(function() {
        $(this).css("color", "white");
        if //($(this).is(":visbile")) {
            ($(this).parent("div").css("display", "block")) {
                $(this).parent("div").siblings("p").css("color", "white")
            }
        });
    //});  

    $(".sub-menu-link").mouseleave(function() {
        $(this).css("color", "black");
    });

    //numbers menu on click does:
    /*$(".numbers").on("click", function() {
        //all submenus slideUp
        $(".new-dropdown-submenu").slideUp("fast");
        //numbers submenu toggles either up or down depending on status before clicked upon, and does:
        $(this).children("div").slideDown("fast", function() {
        //$(".numbers-sub").slideToggle("fast", function() {
            //$(this).siblings().slideUp("fast");
            //if numbers submenu is visible:
            if ($(this).is(":visible")) {     
                //submenu links text is black when numbers submenu is visible
                $(".sub-menu-link").css("color", "black");
                //submenu links TURN WHITE when moused over
                $(".sub-menu-link").mouseenter(function() {
                    $(this).css("color", "white");
                });
                //submenu links TURN BLACK when mouse leaves
                $(".sub-menu-link").mouseleave(function() {
                    $(this).css("color", "black");
                });
                //numbers menu is WHITE when numbers submenu is moused over
                $(this).mouseenter(function() {
                    $(".numbers-dropdown").css("color", "white");
                });
            };
            //if numbers submenu is hidden
            if ($(this).is(":hidden")) {
                $(".numbers").mouseleave().css("color", "black");                  
                //});
            }; 
        });
    });

    //strings menu on click does:
    $(".strings").on("click", function() {
        $(".new-dropdown-submenu").slideUp("fast");
        //all submenus EXCEPT strings submenu slideUp
        //$(".numbers-sub, .arrays-sub, .booleans-sub, .loops-sub, .functions-sub, .objects-sub, .dom-sub, jQuery-sub").slideUp("fast");
        //strings submenu toggles either up or down depending on status before clicked upon, and does:
        $(".strings-sub").slideToggle("fast", function() {
            //if strings submenu is visible:
            if ($(this).is(":visible")) {     
                //submenu links text is black when strings submenu is visible
                $(".sub-menu-link").css("color", "black");
                //submenu links TURN WHITE when moused over
                $(".sub-menu-link").mouseenter(function() {
                    $(this).css("color", "white");
                });
                //submenu links TURN BLACK when mouse leaves
                $(".sub-menu-link").mouseleave(function() {
                    $(this).css("color", "black");
                });
                //strings menu is WHITE when strings submenu is moused over
                $(this).mouseenter(function() {
                    $(".strings-dropdown").css("color", "white");
                });
            };
            //if strings submenu is hidden
            if ($(this).is(":hidden")) {
                $(".strings").mouseleave().css("color", "black");                  
                //});
            }; 
        });
    });*/

    /*$(".numbers").on("click", function() {
        $(".strings-sub, .arrays-sub, .booleans-sub, .loops-sub, .functions-sub, .objects-sub, .dom-sub, jQuery-sub").slideUp("fast");
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
        });
    });*/

    /*$(".new-dropdown-menu").on("click", function() {                                                    //.numbers
        let newDropdownMenus = $(this).attr("class").split(" ");
        let dropdown = newDropdownMenus[0];                                                             //.nubers generic
        let dropdownName = newDropdownMenus[1];                                                         //.numbers
        $("." + dropdown).css("background-color", "green");
            
        let newDropdownSubMenus = $(".new-dropdown-submenu").attr("class").split(" ");                  //.numbers-sub
        let dropdownSub = newDropdownSubMenus[0];                                                       //.numbers-sub generic
        let dropdownSubName = newDropdownSubMenus[1];                                                   //.numbers-sub
        $("." + dropdownSub).css("background-color", "yellow");

        let menuListWithDropdown = $(".menu-list-with-dropdown").attr("class").split(" ");              //.menu-list
        let menuList = menuListWithDropdown[0];                                                         //.menu-list generic
        let menuListName = menuListWithDropdown[1];                                                     //.menu list
        $("." + menuList).css("color", "purple");

        $("." + dropdownSub).slideUp("fast");
        $(".")
    
        
        //});
    }); //console.log($("new-dropdown-menu"))*/


});

//console.log("hi")

