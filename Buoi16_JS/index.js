var x1=document.getElementsByTagName("h1");//lất tất cả thẻ h1
console.log(x1);//trả về là 1 mảng

var p1 = document.getElementsByTagName("p");
console.log(p1[1]);
console.log(p1[1].innerHTML);

var x2=document.getElementsByTagName('h2');
console.log(x2[0]);

//gán giá trị mới cho thẻ
p1[1].innerHTML = "con thinh ngu vl";


//đổi tiêu đề của card
var h4 = document.getElementsByTagName("h4");
console.log(h4);

//h4[1].innerHTML = "<div class='btn btn-info'>DM THINH</div>";

//sử dụng vòng lặp
for(var i = 0; i<h4.length;i++){
    h4[i].innerHTML = "<div class='btn btn-info'>DM THINH</div>";
}

var x4 = document.getElementsByClassName("card-title");
console.log(x4);
console.log(x4.length);
x4[1].innerHTML ="di nhau khong";


//
var a = document.querySelector(".abc");
console.log(a);

var b = document.querySelectorAll(".abc");//nếu muốn lấy class thì thêm dấu chấm
//trả về mảng
console.log(b);
//sử dụng vòng lặp để truy cập đến các phần tử
for(var i =0;i<b.length;i++){
    console.log(b[1]);
    b[1].innerHTML = "cap nhat sau nhe";
}