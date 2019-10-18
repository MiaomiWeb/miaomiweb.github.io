/*===================================================================================================

 - TEMPLATE : PROTOTIPO - FRONTPAGE
 - DESCRIPTION : MODERN BOOTSTRAP 4 ADMIN TEMPLATE - FULLY RESPONSIVE
 - AUTHOR : SNAZZYSHEET (http://www.snazzysheet.com/)
 - VERSION : 1.0
 - FILE : STYLE JS

===================================================================================================*/


$(document).ready(function () {
    
    /* LOAD ---------*/
    $("#load").toggleClass("end");
    setTimeout(function () {
        $("#load").hide(0);
    }, 400);
    
    /* HEADER ---------*/
    $(".nav-link").click(function () {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });
    function scrolling() {
        
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
            $(".header").addClass("float");
            $(".header .brand").attr("src","assets/img/light.png")
        } else {
            $(".header").removeClass("float");
            $(".header .brand").attr("src","assets/img/dark.png")
        }
    }
    scrolling();
    $(window).scroll(function() {
        
        scrolling()
    });

    /* SMOOTH SCROLLING ---------*/
    $('.nav-link, .scrolling').click(function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 54
        }, 500);
    });
    

});