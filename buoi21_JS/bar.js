

var a=document.querySelector(".abc");
//  console.log(a);

var y=document.querySelectorAll(".btn");
//console.log(y)

for (var i = 0; i < y.length; i++) {
    console.log(y[i])
    y[i].innerHTML="thinh ngu";
}