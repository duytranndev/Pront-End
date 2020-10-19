document.addEventListener('DOMContentLoaded',function(){
    console.log("ok");
    var trangthai = "duoi 300";
    var menunho = document.querySelector(".menu");
    var logo = document.querySelector(".logo");
    // lấy thằng đầu tiên của menu
    window.addEventListener('scroll',function(){
        //conso.log(window.pageYOffset)
        if(window.pageYOffset>200){
            
                menunho.style.position = "fixed";
            
            //menunho.classList.add("menunho");
            //logo.classList.add("maulogo");
        }
        else{
            //menunho.classList.remove("menunho");
            //logo.classList.remove("maulogo");
        }
    });
},false);