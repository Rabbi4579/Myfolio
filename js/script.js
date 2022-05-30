$(function(){
    var offset = $('.custom_nav').offset().top;
    

    $(window).on('scroll', function(){
        var winscroll = $(window).scrollTop();
        

        if(winscroll>offset){
            $('.custom_nav').addClass('menu_fixed')
        }else{
            $('.custom_nav').removeClass('menu_fixed')
        }


        // backtop button js

       if(winscroll > 300){
        $('.backTop').fadeIn(1000);

    }else{
        $('.backTop').fadeOut(1000);
    }
        
    })

     // backtop button js
     $('.backTop').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },1000)
    })

    // preloader js
    $(window).on('load', function(){
        $('.preloader_main').delay(2000).fadeOut(1000)
    })
})