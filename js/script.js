$(function(){
    var offset = $('.custom_nav').offset().top;
    

    $(window).on('scroll', function(){
        var winscroll = $(window).scrollTop();
        

        if(winscroll>offset){
            $('.custom_nav').addClass('menu_fixed')
        }else{
            $('.custom_nav').removeClass('menu_fixed')
        }
    })
})