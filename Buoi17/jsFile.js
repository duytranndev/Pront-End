// var x1= document.querySelectorAll('.n1')
// console.log(x1);
// x1[0].classList.remove("btn-outline-info")
// x1[0].classList.add("btn-warning")
// x1[0].classList.add("s1")

// var x3=document.querySelectorAll(".n3")
// x3[0].classList.toggle("btn-outline-success")
// x3[0].classList.toggle("btn-danger")
// x3[0].classList.toggle("btn-block")

//thêm 1 sự kiện nghe ngóng để xử lý
//DOM: document, Content: Nội dung
//loaded: đã được tải, thì gọi function

document.addEventListener("DOMContentLoaded", function () {
    var x = document.getElementsByClassName("n1");
    console.log(x);
    x[1].onclick = function () {
        x[1].classList.toggle("doimau");
    }
    x[2].onclick = function () {
        x[2].classList.toggle("doimau");
    }
    x[3].onclick = function () {
        x[3].classList.toggle("doimau");
    }
    x[4].onclick = function () {
        x[4].classList.toggle("doimau");
    }
}, false);
