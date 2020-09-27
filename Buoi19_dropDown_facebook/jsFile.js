document.addEventListener("DOMContentLoaded",function(){
    var tamgiac = document.getElementsByClassName("tamgiac");
    var danhsach = document.getElementsByClassName("danhsach");
    
    tamgiac[0].onclick=function(){
        console.log("hee");
        this.classList.toggle("tgtrang");
        danhsach[0].classList.toggle("hienthi");
    }


},false);