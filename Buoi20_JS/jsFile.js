
document.addEventListener("DOMContentLoaded",function(){
    var nut = document.getElementsByClassName("nut");
    var nen = document.querySelector(".den");
    var khoi = document.querySelector(".noidung");

    nut[0].onclick = function(){
        nen.classList.add("nenden");
        khoi.classList.add("dichphai");
    }
    nen.onclick = function(){
        nen.classList.remove("nenden");
        khoi.classList.remove("dichphai");
    }
},false);