document.addEventListener("DOMContentLoaded",function(){
    var nut = document.getElementById("nut1");
    //phần tử
    console.log(nut);
    var khoi = document.getElementsByClassName("card");
    //mảng
    var hinh = document.getElementsByClassName("n1");

    console.log(khoi[0]);

    nut.onclick = function(){
        console.log("da click");
        khoi[0].classList.toggle("dichchuyen");
        hinh[0].classList.toggle("hinhanh");
    }


},false);