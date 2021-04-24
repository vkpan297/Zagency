$(document).ready(function(){
    new WOW().init();
    $(".client_slider-nav-item").owlCarousel({
        loop:true,        
        nav:false,
        // margin: 20,
        dots:true,
        autoplay: true,    
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1

            },
            1000:{
                items:1,
                dotsEach: 1,
            }
        }
    });
    $(".slider-item").owlCarousel({
        loop:false,        
        nav:false,
        margin: 18,
        dots:true,
        autoplay: true,    
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
    
            },
            1200:{
                items:4,
                dotsEach: 1,
                

            }
        }
    });
    
    $(".nen").click(function(){
        $("#myVideo").css("display","none");
    });
    $("#btn").click(function(){
        $("#myVideo").css("display","flex");
    });

    

    $(".nen").click(function(){
        $(".contact_form").css("display","none");
    });
    $(".info_btn").click(function(){
        $(".contact_form").show();
    });
    
    $("#menu_btn").click(function(){
        $(".header__nav").toggleClass('show');
      });
    $(".counter_value").counterUp({
        delay: 10,
        time: 2000
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 10) {
            $(".header").addClass("scrolling");
        } else {
            $(".header").removeClass("scrolling");
        }
    });
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 10) {
            $(".header__wrap").addClass("scrolling");
        } else {
            $(".header__wrap").removeClass("scrolling");
        }
    });
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 10) {
            $(".header__nav-p2").addClass("scrolling");
        } else {
            $(".header__nav-p2").removeClass("scrolling");
        }
    });
    $(window).on('load',function(){
		/*----- loader ---------*/
		$('.loader').fadeOut();
    });
    $(window).on('load', function(event) {
        $('body').removeClass('preloading');
        // $('.load').delay(1000).fadeOut('fast');
        $('.loader').delay(1000).fadeOut('fast');
    });
    $(document).ready(function() {
        $(".tab").click(function () {
            $(".tab").removeClass("active");
            // $(".tab").addClass("active"); // instead of this do the below 
            $(this).addClass("active");   
        });
        });
    
        $(document).ready(function() {
            $(".header__item-link").click(function () {
                $(".header__item-link").removeClass("active");
                // $(".tab").addClass("active"); // instead of this do the below 
                $(this).addClass("active");   
            });
        });


        // $(function() {
    	// 	var selectedClass = "";
    	// 	$(".fil-cat").on('click',function(){
        //   $('.fil-cat').removeClass('active');
        //   $(this).addClass('active');
      	// 	selectedClass = $(this).attr("data-rel");
        //   $(".tab-pane").fadeTo(100, 0.1);
      	// 	$(".tab-pane .portfolio_item").not("."+selectedClass).fadeOut().removeClass('scale-anm');
        //   setTimeout(function() {
        //     $("."+selectedClass).fadeIn().addClass('scale-anm');
        //     $(".tab-pane").fadeTo(300, 1);
        //   }, 300);
    	//   });
        // });
    
});



$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
            e.preventDefault();
            var target = $(this).attr("href"); 
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
            }, 600, function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });
            return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance+76) {
                    $('.header__nav li a.active').removeClass('active');
                    $('.header__nav li a').eq(i).addClass('active');
            }
    });
}).scroll();
