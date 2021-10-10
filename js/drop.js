$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(this).toggleClass("collapsed");
        $(this).next().slideToggle();
        // $(this).next().fadeToggle();
        $(".click-menu-btn").toggleClass("change-btn");
    });
});