var news_left = 0;
var timer;
const news_swiper = document.querySelector('.news_swiper_ul')
console.log(news_swiper)
const lis = news_swiper.querySelectorAll('li')
console.log(news_swiper)
// run(index);
const newsCard = document.querySelectorAll('.news_nav_card')
for(let i = 0;i<newsCard.length;i++) {
    newsCard[i].onmouseover = function() {
        news_imgchange(i)
    }
}
// run()
function news_imgchange(n) {
    var pattern = /news_nav_card_active/
    if(pattern.test(newsCard[n].className)) {
        return
    }
    for(let i = 0;i<newsCard.length;i++) {
        if(i !== n) {
            newsCard[i].className = 'news_nav_card'
        } else {
            newsCard[i].className += ' news_nav_card_active'
        }
    }
    var lt = - ((n) * 1064);
    animate(news_swiper,lt)
    // news_swiper.style.marginLeft = lt + 'px';
    news_left = lt;
}
//设置参数
// let index = 0; //当前索引
// let width = 1064+'px'; //获取li宽度
// let timer = null;
//设置样式
// ul.style.width = lis.length * width + 'px';
//点击切换
// next.onclick = function () {
//     index++;
//     if (index >= lis.length - 1) {
//         index = lis.length - 1;
//     }
//     animate(ul, -index * width);
// }
// prev.onclick = function () {
//     index--;
//     if (index <= 0) {
//         index = 0;
//     }
//     animate(ul, -index * width);
// }
//自动轮播
// timer = setInterval(function () {
//     animate(ul, -index * width);
// }, 3000);
//鼠标移入移出
// box.onmouseover = function () {
//     clearInterval(timer);
// }
// box.onmouseout = function () {
//     timer = setInterval(function () {
//         next.onclick();
//     }, 3000);
// }
// function getCurrentStyle(element, attrString){
//     var css = element.currentStyle || window.getComputedStyle(element);
//     return css[attrString];//通过"[]"访问对象的某个字段	
// }
//运动函数
// function animate(ele, target) {
//     let ele_style = getCurrentStyle(ele, left)
//     clearInterval(ele.timer);
//     ele.timer = setInterval(function () {
//         let step = (target - ele.offsetLeft) / 10;
//         step = step > 0 ? Math.ceil(step) : Math.floor(step);
//         ele_style.left = ele.offsetLeft + step + 'px';
//         if (Math.abs(target - ele.offsetLeft) <= Math.abs(step)) {
//             ele.style.left = target + 'px';
//             clearInterval(ele.timer);
//         }
//     }, 15);
// }