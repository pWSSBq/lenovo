let banner_left = 0;
let banner_timer;
const banner_swiper = document.querySelector('.banner_swiper_ul')
console.log(banner_swiper)
const banner_lis = banner_swiper.querySelectorAll('li')
let banner_width = banner_lis[0].clientWidth; //获取li宽度
//底部dots
const banner_span = document.querySelectorAll('.banner_dot_container span')
const banner_dots = document.querySelectorAll('.banner_dot_container i')
banner_swiper.onmouseover = function() {
    clearTimeout(banner_timer)
}
banner_swiper.onmouseenter = function() {
    banner_timer = setInterval(banner_imgchange, 5000);
}
console.log(banner_dots)
let banner_index = 0;
for(let i =0;i<banner_span.length;i++) {
    banner_span[i].onmouseover = function() {
        console.log(i)
        banner_index = i
        clearTimeout(banner_timer)
        banner_imgchange()
        banner_timer = setInterval(banner_imgchange, 5000);
    }
}
banner_timer = setInterval(banner_imgchange, 5000);
function banner_imgchange() {
    console.log('bannerchange')
    console.log((banner_index) > banner_lis.length-1)
    if((banner_index) > banner_lis.length-1) {
        banner_index = 0
    }
    if((banner_index) < 0) {
        banner_index = banner_lis.length-1
    }
    for(let i =0;i<banner_dots.length;i++) {
        banner_dots[i].className = 'banner_dot'
    }
    banner_dots[banner_index].className = 'banner_dot_selected'
    animate(banner_swiper, -banner_width * (banner_index))
    banner_index++
}
function banner_next() {
    clearTimeout(banner_timer)
    console.log(banner_index)
    banner_imgchange()
    banner_timer = setInterval(banner_imgchange, 5000);
}
function banner_pre() {
    console.log('pre调用')
    banner_index -= 2
    console.log(banner_index)
    clearTimeout(banner_timer)
    banner_imgchange()
    banner_timer = setInterval(banner_imgchange, 5000);
}