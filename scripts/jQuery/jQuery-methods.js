$(document).ready(function() {
    //$(".footer-section").css("background-color", "#047afb");
    //$(".btn").css("background-color", "#c13e70");
    //$(".btn").css("border", "solid 1px #c13e70");
    //$(".navbar").css("background-color", "#047afb");
    //$(".dropdown-menu").css("background-color", "#047afb");
    //$(".dropdown-submenu").css("background-color", "#047afb");
    //$("code").css("color", "#047afb");
    //$(".body-container a").css("color", "#c13e70");
    //$(".footer-section a").css("color", "white");
    
    /*
    Since it is not good to write inline CSS, we change the code above to the .addClass() method, and add classes to CSS:
    */

    /*
    We can add more than one element/class/id/attribute to the target:
    */
   
    $(".footer-section").addClass("blueBackground");
    //$(".navbar").addClass("blueBackground");
    //$(".dropdown-menu").addClass("blueBackground");
    //$(".dropdown-submenu").addClass("blueBackground");
    $(".btn").addClass("pinkBackground");
    $(".btn").addClass("pinkBorder");
    $("code").addClass("blue");
    $(".body-container a").addClass("pink");
    $(".footer-section a").addClass("white");
    $(".new-nav").removeClass("new-nav").addClass("new-nav-blue");
    $(".new-dropdown-menu").addClass("new-dropdown-menu-blue");
    $(".new-dropdown-submenu").addClass("new-dropdown-submenu-blue")


})
