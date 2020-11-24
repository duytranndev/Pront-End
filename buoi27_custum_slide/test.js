document.addEventListener('DOMContentLoaded',function(){
    var nut = document.querySelector(".nut");
    var khoi = document.querySelector(".hom");

    nut.addEventListener("click",function(){
        khoi.classList.add("chuyendong");
        //khoi.classList.add("dixuong");
    })
    // chờ Animation của khối kết thúc thì mới thực hiện sự kiện tiếp theo
    khoi.addEventListener("webkitAnimationEnd",function(){
        console.log("da ket thuc");
        this.classList.add("dixuong");
    })

},false)