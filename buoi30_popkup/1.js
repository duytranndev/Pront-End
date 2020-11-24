//console.log("Heeloo");

$(function () {
    //console.log("abc");
    $('.nutdn').click(function (e) { 
        //console.log("abcc");
        //('.formdn').addClass('formhien');
        $('.formdn').toggleClass('formhien');
    });
    $('.btn-close').click(function (e) { 
        $('.formdn').removeClass('formhien');
    });
});



$(function () {
    $('.nut2').click(function (e) { 
        $('.noidung2').toggleClass('formhien2');
    });
    $('.btn-close').click(function (e) { 
        $('.noidung2').removeClass('formhien2');
    });
});

$(function () {
    $('.popup').addClass('hienpop');
    // var tb = setInterval(() => {
    //     $('.popup').removeClass('hienpop');
    //     clearInterval(tb);
    // }, 3000);
    setTimeout(() => {
        $('.popup').removeClass('hienpop');
    }, 3000);
});
