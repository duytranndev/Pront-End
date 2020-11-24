    $(function () {
    $(selector).click(function (e) { 
        e.preventDefault();

    }); 
    $(selector).scroll(function () { 

    });
    });
    $(function () {
        //TweenMax.to(ten phan tu, thoi gian, {ten thuoc tinh:gia tri,ten thuoc tinh: gia tri});
        TweenMax.from($('.nut1'),1,{x:-200,opacity:0,scale:2});
        TweenMax.from($('.nut2'),1,{x:-200,opacity:0,scale:2});
        TweenMax.from($('.nut3'),1,{x:-200,opacity:0,scale:2});
        $('.nut2').click(function (e) { 
            e.preventDefault();
            TweenMax.fromTo($('.nut1'),2,{x:-400},{x:400});

        });
        $('.nut3').click(function (e) { 
            e.preventDefault();
            TweenMax.to($(this),1,{x:"+=100"});
            TweenMax.to($(this),1,{scale:"+=0.2"});
        });

    });

$(function () {
    var h1Element = document.querySelectorAll("h1");

    for (var i = 0; i < h1Element.length; i++) {
        h1Element[i].onclick = function (e) {
            console.log(e.target.innerHTML="cc");
        }
    }
});

document.addEventListener('DOMContentLoaded',function(){
    var a = document.querySelectorAll('a');
    for(var i=0;i<a.length;++i){
        a[i].onclick= function(e){
            if(e.target.href !="https://www.google.com/"){
                e.preventDefault();
            }
        }
    }
    console.log("cc");
    console.log("âa");
    alert("âdad");
},false)
