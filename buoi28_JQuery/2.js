$(function () {
    //console.log("ok nhe");
    //hien menu va nut top
    $(window).scroll(function () { 
        if($(this).scrollTop()>200){
            $(".menutop").addClass("doimenu");
            $('.top').addClass("hientop");
        }
        else{
            $(".menutop").removeClass("doimenu");
            $('.top').removeClass("hientop");
        }
    });
})

$(function () {
    console.log($('body').scrollTop());
    $('.nuttop').click(function (e) { 
       $('html,body').animate({scrollTop:0},1000);
    });
    $('.menutop ul li:nth-child(1)').click(function (e) { 
        e.preventDefault();
       $('html,body').animate({scrollTop:$('.phan1').offset().top-70},1000);
    });
    $('.menutop ul li:nth-child(2)').click(function (e) { 
        e.preventDefault();
       $('html,body').animate({scrollTop:$('.phan2').offset().top-70},1000);
    });
    $('.menutop ul li:nth-child(3)').click(function (e) { 
        e.preventDefault();
       $('html,body').animate({scrollTop:$('.phan3').offset().top-70},1000);
    });
    $('.menutop ul li:nth-child(4)').click(function (e) { 
        e.preventDefault();
       $('html,body').animate({scrollTop:$('.phan4').offset().top-70},1000);
    });
    //lấy vị trí của đối tượng
    console.log($(".phan1").offset().top);
    //vị trí của phần 1 = 767
});



$(function () {
    //From đến từ đâu, thời gian chuyển động,hiệu ứng chuyển động
    //TweenMax.from($('.khoi1'),1,{top:100,opacity:0})
    //stageFrom: chuyển động từng phần tử, set thêm khoảng cách độ trễ giữa các phần tử
    TweenMax.staggerFrom($('.khoi1'),1,{top:100,opacity:0},0.1);
}); 