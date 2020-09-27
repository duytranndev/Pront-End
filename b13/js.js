$(function () {  
    $(window).scroll(function () { 
        if($('html,body').scrollTop()>100){
            $('.logo').addClass('chucam'); //chữ logo màu cam
            $('.navbar').addClass('nentrang'); //
            $('.nav-link').addClass('chumenu');
            $('.nutsignup').addClass('btn');
            $('.nuttop').addClass('hienthi');
        }
        else{
            $('.logo').removeClass('chucam');
            $('.navbar').removeClass('nentrang');
            $('.nav-link').removeClass('chumenu');
            $('.nutsignup').removeClass('btn');
            $('.nuttop').removeClass('hienthi');
        }
    })
    $('.nuttop').click(function (e) { 
        $('html,body').animate({scrollTop:0});
        return false
})

});
