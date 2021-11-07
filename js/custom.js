$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(this).toggleClass("collapsed");
        $(this).next().slideToggle();
        // $(this).next().fadeToggle();
        $(".click-menu-btn").toggleClass("change-btn");
    });

    $(".product-img button").click(function(){
        $(this).toggleClass("favorite-now");
    });

    $('.cart-quantity').on('click', '.button-plus', function(e) {
        e.preventDefault();
        var fieldName = $(e.target).data('field');
        var parent = $(e.target).closest('div');
        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

        if (!isNaN(currentVal)) {
            parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            parent.find('input[name=' + fieldName + ']').val(0);
        }
    });
      
    $('.cart-quantity').on('click', '.button-minus', function(e) {
        e.preventDefault();
        var fieldName = $(e.target).data('field');
        var parent = $(e.target).closest('div');
        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
      
        if (!isNaN(currentVal) && currentVal > 1) {
          parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
          parent.find('input[name=' + fieldName + ']').val(0);
        }
    });

    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });

    // $(".navbar .navbar-nav>li>a").click(function() {
    //     if(!$(this).parent().hasClass("active")){
    //         $(this).parent().addClass("active");
    //         $(this).next().addClass("dis-flex");
    //     }
    //     // $(".navbar .navbar-nav>li>.sub-menu>li").removeClass("active");
    //     // $(".navbar .navbar-nav>li>.sub-menu>li>.sub-menu").removeClass("dis-flex");
    //     else {
    //         $(".navbar .navbar-nav>li").removeClass("active");
    //         $(".navbar .navbar-nav>li>.sub-menu").removeClass("dis-flex");
    //     }
    // });

    // $(".navbar .navbar-nav>li>.sub-menu>li>a").click(function(){
    //     $(".navbar .navbar-nav>li>.sub-menu>li").removeClass("active");
    //     $(".navbar .navbar-nav>li>.sub-menu>li>.sub-menu").removeClass("dis-flex");
    //     $(this).parent().toggleClass("active");
    //     $(this).next().toggleClass("dis-flex");
    // });

    $("header.main-header .navbar .navbar-nav>li.menu-item-has-children").mouseover(function(){
        $("header.main-header").addClass("header-mb");
    });

    $("header.main-header .navbar .navbar-nav>li.menu-item-has-children").mouseout(function(){
        $("header.main-header").removeClass("header-mb");
        $("header.main-header.game-header").removeClass("header-mb-2");
    });

    $("header.main-header .navbar .navbar-nav>li>.sub-menu>li.menu-item-has-children").mouseover(function(){
        $("header.main-header.game-header").addClass("header-mb-2");
    });

    $("header.main-header .navbar .navbar-nav>li.menu-item-has-children").mouseout(function(){
        $("header.main-header.game-header").removeClass("header-mb-2");
    });

    $("<span>&plus;</span>").insertAfter("header .navbar-nav li.menu-item-has-children>a");

    $("header .navbar-nav li span").click(function () {
        if ($(this).hasClass("rotate-icon")) {
            $(this).removeClass("rotate-icon");
            $(this).parent("li").children("ul.sub-menu").slideToggle();
        } else {
            var IsChild = $(this).parent("li").parent("ul").parent("li").hasClass("menu-item-has-children");
            if (IsChild == false) {
                $("li.menu-item-has-children").each(function (index) {
                    if ($(this).children("span").hasClass("rotate-icon")) {
                        $(this).children("ul.sub-menu").slideToggle();
                        $(this).children("span").removeClass("rotate-icon");
                    }
                });
            }
            $(this).parent("li").children("ul.sub-menu").slideToggle();
            $(this).addClass("rotate-icon");
        }
    });


    $("header .navbar-toggler .navbar-toggler-icon").click(function () {
        $("header .navbar-nav li span").next("ul").slideUp();
        $("header .navbar-nav li span").removeClass("rotate-icon");
    });
    $("header>.navbar-nav>li").click(function () {
        if ($("header>.navbar-nav>li").not($(this)).hasClass("active")) {
            $("header>.navbar-nav>li").removeClass("active");
        }
        $(this).addClass("active");
    });
});