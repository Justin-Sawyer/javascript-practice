$(document).ready(function() {
//------------------------------------------------------------------------------------ "Javascrpting" color change
    $(".title-link").hover(function() {
        $(this).css("color", "black")
        }, function() {
        $(this).css("color", "white")
    });

//------------------------------------------------------------------------------------ Menu, bars and no-dropdown menu items color
    $(".menu-text, .fontawesome-icon, .menu-list").hover(function() {
        $(this).css("color", "white")
        }, function() {
        $(this).css("color", "black")
    });

//------------------------------------------------------------------------------------ Main dropdown-menu list toggle
    $(".menu-text, .fontawesome-icon").on("click", function() {
        $(".new-dropdown-menu").slideToggle("fast", function() {
            if ($(".new-dropdown-submenu").is(":visible")) {
                $(".new-dropdown-submenu").slideUp("fast")
            }
        });
    });
   
//------------------------------------------------------------------------------------ Menu items with children AND children color change
    $(".menu-list-with-dropdown").on("mouseover", function() { 
        $(this).css("color", "white");
        let newDropdownMenu = $(this).attr("class").split(" ");
        let newDropdownMenuName = newDropdownMenu[1];
        
        $("." + newDropdownMenuName).unbind("click").click(function() {
            let newDropdownSubMenu = $(this).next("div").attr("class").split(" ");
            let newDropdownSubMenuGeneric = newDropdownSubMenu[0];
            let newDropdownSubMenuName = newDropdownSubMenu[1];

            //Opens & closes dropdown-submenu
            $("." + newDropdownSubMenuName).slideToggle("fast");
            
            // Dropdown-submenu text-color toggle on hover
            $(".sub-menu-link").hover(function() {
                $(this).css("color", "white")
                }, function() {
                $(this).css("color", "black")
            });

            //Closes OTHER dropdown-submenus
            $("." + newDropdownSubMenuGeneric).not("." + newDropdownSubMenuName).slideUp("fast");
        });
    })

//------------------------------------------------------------------------------------ Menu items with children AND children color change    
    $(".menu-list-with-dropdown").mouseout(function() {
        let classNames = $(this).attr("class").split(" ");
        let boxClass = classNames[0];
        let className = classNames[1];
        if ($("." + className).next("div").is(":visible")) {
            $(".menu-list-with-dropdown").css("color","black");
            $(this).css("color", "white");
        } else if ($("." + className).next("div").is(":hidden")) {
            $(this).css("color", "black");
            //$(this).children().css("color", "black");
        }
    });

});