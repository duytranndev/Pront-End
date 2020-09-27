// alert("nội dung hiển thị");;
console.log('đã kết nối ');
var n=5;
console.log("n");
console.log(n);
n3 ="Xin chào";
console.log(n3);
console.log(n3+n);
var n2=8;
console.log(n+n2);

function test()
    {
        console.log('test ham');
        
    }

function dienTichHinhChuNhat(rong ,dai ){
    var ketQua= rong * dai;
    return ketQua;
}
  var dientich=dienTichHinhChuNhat(3,6);
  document.write(`dien tich hinh chu nhat la:${dientich}`);


  var diem=4;
  if(diem<5)
  {
      console.log("không đạt");
  }
else{
    console.log("đạt");  
}

var M=["một","hai","ba"];
console.log(M);
console.log(M[1]);

var conmeo={
    maulong:"trang",
    ten:"Tom",
    camnang:"3 ký"
}
console.log(conmeo);
console.log(conmeo.ten);


// đối tượng học viên
 var hocvien={
     ten: "Huy",
     ho: "Nguyen",
     chieucao: "173",
     nang:"40",
     tendaydu:function(){return this.ho +  "" + this.ten;}, //phương thức 
     danhgia: function(){
        if( this.chieucao/this.nang < 3)
            {return "dáng chuẩn đấy";}
        else
        {return "m gầy vãi cà lone";}
     }
 }
 console.log(hocvien.tendaydu());
 console.log(hocvien.danhgia());


 //vòng lặp
 var sv=['viet','nam','que','huong','toi'];
 console.log('các phần tử trong mảng');
 for (var i = 0; i < sv.length; i++) {
     console.log(sv[i]);   
 }
 
 
 








