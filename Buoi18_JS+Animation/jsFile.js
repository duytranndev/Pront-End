

var nut = document.getElementById("nut1");

var khoi = document.getElementsByClassName("card");


document.addEventListener("DOMContentLoaded",function(){
    
    nut.onclick=function(){
        console.log("hello");
        khoi[0].classList.toggle("dichphai");
    }
},false);