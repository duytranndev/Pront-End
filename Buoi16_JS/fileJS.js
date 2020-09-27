var x = "dien thoai iphone";
console.log(x.length);
document.write(x.length);


var vitriX = x.indexOf("iphone");
console.log(vitriX);
if(vitriX == -1){
    console.log("khong tin thay");
}
else{
    console.log("co tim thay");
    var x1=x.replace("iphone","samsung");
    console.log(x1);
}


var s = "iphone, samsung, oppo, nokia";
var array = s.split(",");
console.log(array);
console.log(array[1]);


var so1 =10;
var so2 =3;
console.log(so1+so2);
so2 = so2.toString();
console.log(so1+so2);


var chu1 ="10";
console.log(chu1+5);
chu1= Number(chu1);
console.log(chu1+5);


function tingtong(a1,a2){
    var s = a1+a2;
    return console.log("tong 2 so la: "+s);
}
tingtong(1,2);


//hàm vô danh amonymous
var n = function(n1,n2){
    return (n1+n2)/2;
}
console.log(n(2,5));


