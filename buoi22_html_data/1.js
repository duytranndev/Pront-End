
document.addEventListener('DOMContentLoaded',function(){
    var tongquat=document.getElementsByClassName("nut");
    for(var i=0;i<tongquat.length;i++){
        tongquat[i].onclick=function(){
            console.log(this.getAttribute("data-mk"));
        }
    }
},false);