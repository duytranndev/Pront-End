document.addEventListener('DOMContentLoaded',function(){
    var nut=document.getElementsByClassName("nut");
    nut[0].onclick=function(){
        console.log(this.getAttribute("data-hieuung"));
        var taohieuung=this.getAttribute("data-hieuung");
        // lay doi tượng tương ứng đê xử lý
        var thuchien=document.getElementById(taohieuung);
        //console.log(thuchien);
        thuchien.classList.toggle("taohieuung");
    }
},false);