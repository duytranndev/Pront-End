// alert("aaaadddawdawdawdaawdawdawff  qqqqqqqqq");

// var a = 5;
// document.write("a = "+a);
// console.log("a");
// console.log(a);

// a3 ="xin chao";
// console.log(a3);
// console.log(a3+a);

// a2=8;
// console.log(a+a2);

// function dienTichHCN( rong, dai){
//     var ketQua=rong*dai;
//     return ketQua;
// }
// var dienTich = dienTichHCN(100,150);
// document.write("dien tich la "+dienTich);

// var diem=4;
// if(diem<=5){
//     console.log("NO");
// }
// else {
//     console.log("OK")
// }

// var list = ["mot","hai","ba"];
// console.log(list);
// console.log(list[1]);


// var meo1 = new Object();

// meo1={
//     mauLong:"trang",
//     canNang:10,
//     ten:"tom"
// }
// console.log(meo1);
// console.log(meo1.ten);

// var hocVien = new Object();

// hocVien= {
//     ten:"duy",
//     ho:"tran",
//     chieucao:"172",
//     nang:"57",
//     tenDayDu:function(){
//         return this.ho + " "+this.ten;
//     },
//     danhGia:function(){
//         if(this.chieucao/this.nang<3){
//             return "Duy dz vl";
//         }
//         else {
//             return "Duy dz";
//         }
//     }
// }

// console.log(hocVien.tenDayDu());
// console.log(hocVien.danhGia());

var sinhVien = ["viet","nam","que","huong","toi"];
console.log("cac phan tu trong mang la: ");
document.write("cac phan tu trong mang la: ");
for (var i = 0; i < sinhVien.length; i++) {
    document.write(sinhVien[i]);
}

var uutTien=0;
var mangSoIndex =0;
var mangSo = new Array();

//mảng ghi nhớ phép tính
var mangPtIndex=0;
var mangPt= new Array();

//cài đặt sự kiện

function clickButton(obj){
    var type = obj.innerHTML;

    //nhóm số
    
}