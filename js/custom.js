$(function () {


    
    // YT Background Player
    
    jQuery(".player").YTPlayer();
    
    //Filtering Part
    var containerEl = document.querySelector('.item-cls');
    var mixer = mixitup(containerEl);
    
    //Vedio Part
    $(document).ready(function(){
        $('.venobox').venobox(); 
    });
    
    // Counter Part
    
    $('.counter').counterUp({
    delay: 10,
    time: 1000
    });
    
    
    // Part Start

    $('.post-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        nextArrow: ".fa-chevron-right",
        prevArrow: ".fa-chevron-left",
        autoplaySpeed: 2000,
        responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
    });


    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 900) {
            $('.navbar').addClass('extra-bg');
        } else {
            $('.navbar').removeClass('extra-bg');
        }
    });

    $('.b2t').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 900) {
            $('.b2t').fadeIn();
        } else {
            $('.b2t').fadeOut();
        }
    });


    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 80
                }, 1500);
                return false;
            }
        }
    });









});