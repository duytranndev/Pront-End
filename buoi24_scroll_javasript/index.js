document.addEventListener('DOMContentLoaded',function(){
    //conso.log("da load")
    // 
    window.addEventListener('scroll',function(){
        // page: trang, y trục oy, offset vị trí theo trục oy
        console.log(window.pageYOffset);
        // trả về vị trí cuộn
        if(window.pageYOffset >300){
            this.console.log("dang o vi tri lon hon 300");
        }
    });
},false);
