var left = 0;
var timer;
const success_swiper = document.querySelector('.success_swiper_ul')
console.log(success_swiper)
const success_box = document.querySelectorAll('.success_nav_box')
console.log(success_swiper,success_box)
let current_success = 0
let next_page,pre_page
function success_imgchange(n) {
    var lt = - ((n) * 1600);
    animate(success_swiper,lt)
    left = lt;
    current_success = n
}
for(let i = 0;i<success_box.length;i++) {
    success_box[i].onmouseover = function() {
        // success_box[i].style.height = 180 + 'px'
        success_imgchange(i)
    }
}
function success_next(current_success) {
    if(current_success === (success_box.length-1)) {
        next_page = 0
    } else {
        next_page = current_success + 1
    }
    success_imgchange(next_page)
}
function success_pre(current_success) {
    if(current_success === 0) {
        pre_page = success_box.length - 1
    } else {
        pre_page = current_success - 1
    }
    success_imgchange(pre_page)
}
