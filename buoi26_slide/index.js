// var thoigian = setInterval(function(){
//     console.log("abc");
// },4000);


document.addEventListener('DOMContentLoaded',function(){
    var nut = document.querySelectorAll(".nutchuyen ul li");
    //console.log(nut);
    for(var i = 0;i<nut.length;i++){
        nut[i].addEventListener("click",function(){
            //console.log(nut[i]);
            for(var i = 0;i<nut.length;i++){
                nut[i].classList.remove("active");
            }this.classList.add("active");
            //xử lý tính vị trí
            //console.log(this.previousElementSibling);
        })
        
    }
    
})

setTimeout(() => {
    
}, timeout);