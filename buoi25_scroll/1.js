document.addEventListener('DOMContentLoaded',function(){
    var menu = this.querySelector(".menu");
    var nut = this.querySelector(".nuttop");
    var codinh = this.querySelector(".codinh");
    var ptload1= this.querySelector(".s1");
    console.log(codinh);
    console.log(codinh.offsetTop);
    var vtcodinh = codinh.offsetTop;
    var vthuycodinh = vtcodinh+1000;
    var vtload = ptload1.offsetTop-100;
    window.addEventListener('scroll',function(){
        if(window.pageYOffset>150){
            menu.classList.add("doimenu");
            nut.classList.add("hiennut");
        }
        else{
            menu.classList.remove("doimenu");
            nut.classList.remove("hiennut");
        }
        if(window.pageYOffset>vtcodinh && window.pageYOffset<vthuycodinh){
            codinh.classList.add("dunglai");
        }
        else{
            codinh.classList.remove("dunglai");
        }
        if(window.pageYOffset>vtload){
            ptload1.classList.add("load1");
        }
    },false);
},false);
