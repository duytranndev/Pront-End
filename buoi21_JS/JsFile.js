document.addEventListener("DOMContentLoaded", function() {
    var nut = document.querySelector('.nut');
    var menutrai = document.querySelector('.menutrai');
    var den = document.querySelector('.den'),
        khoi = document.querySelector('.noidung'),
        nentrang = document.querySelector('.nentrang');
    //click vao nut
    nut.onclick = function() {
        console.log('abc');
        den.classList.add('hienden');
        nentrang.classList.add('hieuungnen');
        menutrai.classList.remove('dichtrai');
    }
    den.onclick = function() {
        den.classList.remove('hienden');
        khoi.classList.remove('dichphai');
        nentrang.classList.remove('hieuungnen');
        menutrai.classList.add('dichtrai');
    }
}, false);