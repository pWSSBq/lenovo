const hot_swiper = document.getElementsByClassName('hot_swiper')[0]
const hot_img = hot_swiper.querySelectorAll(".hot_swiper_item")
const hot_item = document.getElementsByClassName('hot_item')
console.log(hot_item)
// console.log(hot_arrow)
//设置一个数组，用来存id
const idArr = ["first", "second", "right", "left", "left", "left", "left", "left", "left", "last"];
//设置一个变量用来当图片的索引
let hot_index = 0;
initialize();
hot_item_active()
//
console.log(hot_item[1].children[1])
function hot_arrow_block(hot_index) {
    for(let i = 0;i<hot_item.length;i++) {
        hot_item[i].className = 'hot_item'
    }
    console.log(hot_index + '改变')
    hot_item[hot_index].className = 'hot_item hot_item_hover'
}
//点击左侧列表item滑动到对应img
function hot_change(n) {
    if (hot_index === n) {
        return
    }
    if (hot_index > n) {
        hot_index = n
        hot_item_active()
        //切换上一张也就是让数组的最后一个元素变成第一个元素
        idArr.push(idArr.shift());
        initialize();
        return
    }
    if (hot_index < n) {
        hot_index = n
        hot_item_active()
        idArr.unshift(idArr.pop());
        initialize();
    }


}
//创建切换图片的函数
function hot_prev() {
    if (hot_index === 0) {
        hot_index = hot_item.length - 1;
    } else {
        hot_index--;
    }
    hot_item_active()
    //切换上一张也就是让数组的最后一个元素变成第一个元素
    idArr.push(idArr.shift());
    initialize();
}
function hot_next() {
    if (hot_index === hot_item.length - 1) {
        hot_index = 0;
    } else {
        hot_index++;
    }
    hot_item_active()
    idArr.unshift(idArr.pop());
    initialize();
}
function hot_item_active() {
    hot_arrow_block(hot_index)
    for (let i = 0; i < hot_item.length; i++) {
        hot_item[i].children[0].className = 'hot_li'
    }
    hot_item[hot_index].children[0].className = 'hot_li hot_item_active'
}
//初始化图片id样式
function initialize() {
    console.log('运行initialize')
    for (let i = 0; i < hot_img.length; i++) {
        hot_img[i].id = idArr[i];
    }
}




// console.log(hot_swiper.children)
// let hot_current = 0
// function hot_change() {
//     console.log('change执行', hot_current)
//     console.log((hot_current - 1 + hot_swiper.children.length) % hot_swiper.children.length)
//     const left = (hot_current - 1 + hot_swiper.children.length) % hot_swiper.children.length
//     console.log(left)
//     const right = (hot_current + 1) % hot_swiper.children.length
//     console.log(right)
//     Array.from(hot_swiper.children).forEach((ele, index) => {
//         ele.className = 'hot_swiper_item'
//     })
//     hot_swiper.children[left].className = 'hot_swiper_item right'
//     hot_swiper.children[hot_current].className = 'hot_swiper_item left'
//     hot_swiper.children[right].className = 'hot_swiper_item center'
// }
// function hot_next() {
//     console.log('next')
//     hot_current = (hot_current + 1) % hot_swiper.children.length
//     hot_change()
// }
// function hot_pre() {
//     hot_current = (hot_current + hot_swiper.children.length - 1) % hot_swiper.children.length
//     hot_change()
// }