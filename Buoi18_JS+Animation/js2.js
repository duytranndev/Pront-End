
document.addEventListener("DOMContentLoaded",function(){
    var x = document.getElementById("nut");
    var y = document.getElementsByClassName("nd");
    var trangthai ="lan1";
    x.onclick = function(){
        if(trangthai=="lan1"){
            trangthai = "lan2";
            y[0].classList.remove("khongcd")
            y[0].classList.add("chieuxuoi");
            // y[0].classList.toggle("chieunguoc")
        }
        else if(trangthai=="lan2"){
            trangthai="lan1";
            y[0].classList.remove("chieuxuoi");
            // y[0].classList.toggle("chieunguoc")
        }
    }

},false);