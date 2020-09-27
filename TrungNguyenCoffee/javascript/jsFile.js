$(function(){
    $(window).scroll(function () {
        if($('html,body').scrollTop()>100){
           $('.menu').addClass('nentrang');
           $('.img_logo').addClass('hinhnho');
        }
        else{
            $('.menu').removeClass('nentrang');
            $('.img_logo').removeClass('hinhnho');
        }
    });
})