$(document).ready(function() {

    //toggle button
    $('.btn').click(function() {
        $('.nav-links').slideToggle(3000);
        $('.btn').toggleClass('cross');
    })

    //transparent background
    $(window).scroll(function(){
        let pos = $(window).scrollTop();

        if(pos >= 100){
            $('nav, nav-container').addClass('navBackground');
        }else{
            $('nav, nav-container').removeClass('navBackground');
        }
    })

    //smooth scroll
    $('.nav-links a').click(function(e){
        e.prevenDefault();

        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop:$(target).offSet().top
        },3000);
    })

    //owl carousel team
    $('.team-center').owlCarousel({
        loop:true,
        margin:10,
        smartSpeed: 2000,
        navText: ['prev','next'],
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    //owl carousel customer
    $('.customers-center').owlCarousel({
        loop:true,
        margin:10,
        smartSpeed: 2000,
        navText: ['prev','next'],
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
})