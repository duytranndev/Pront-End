document.addEventListener('DOMContentLoaded',function(){
    //console.log("ok");
    var next = document.querySelector(".nutchuyen .phai");
    //console.log(next);
    var moveslide = function(){
        //console.log("da click");
    }
    next.addEventListener("click",moveslide);

    var slides = document.querySelectorAll(".slides ul li");
    //console.log(slides);
    var chisohientai = 0;
    var slslides = slides.length;
    console.log(slslides);
    var moveslideRight = function(){
        //console.log("da click ne");
        var pthientai = slides[chisohientai];
        // xac dinh vi tri slide hien tai
        if(chisohientai<slslides-1){
            chisohientai = chisohientai+1;
        }else{
            chisohientai =0;
        }
        var pttieptheo = slides[chisohientai];
        //console.log(pthientai);
        //console.log(pttieptheo);
        pthientai.classList.add("anslideN");
        pttieptheo.classList.add("hienslideN");
        
        var ketThucAnSlide = function(){
            console.log("slide hien tai da an");
            this.classList.remove("active");
        }
        var ketThucHienSlide = function(){
            console.log("Slide tiep theo da hien ra");
            this.classList.add("active");
        }

        // chờ Animation của ptthientai thực hiện xong thì mới tiến hành sự kiện tiếp
        pthientai.addEventListener("webkitAnimationEnd",ketThucAnSlide)
    }

    

    next.addEventListener("click",moveslideRight);
},false)
