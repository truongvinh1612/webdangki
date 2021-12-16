document.addEventListener("DOMContentLoaded", function() {
    var a = document.querySelector('.form1')
    var b = document.querySelector('.enter')
    var chon = document.querySelector('.chon');
    var all = document.querySelector('.form2')

    chon.onclick = function() {
        a.classList.add('form3');

    }

    b.onclick = function() {
        a.classList.remove('form3');
    }

    a.onclick = function() {
        a.classList.remove('form3');
    }

    all.onclick = function(e) {
        e.stopPropagation();
    }


}, false)