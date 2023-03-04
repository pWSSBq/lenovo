const commonweal_swiper = document.getElementsByClassName('commonweal_swiper')[0]
console.log(commonweal_swiper.children)
let commonweal_current = 0
function commonweal_change() {
    console.log('change执行',commonweal_current)
    console.log((commonweal_current - 1 + commonweal_swiper.children.length) % commonweal_swiper.children.length)
    const left = (commonweal_current - 1 + commonweal_swiper.children.length) % commonweal_swiper.children.length
    console.log(left)
    const right = (commonweal_current + 1) % commonweal_swiper.children.length
    console.log(right)
    Array.from(commonweal_swiper.children).forEach((ele,index)=>{
        ele.className = 'commonweal_swiper_item'
    })
    commonweal_swiper.children[left].className = 'commonweal_swiper_item right'
    commonweal_swiper.children[commonweal_current].className = 'commonweal_swiper_item left'
    commonweal_swiper.children[right].className = 'commonweal_swiper_item center'
}
function commonweal_next() {
    console.log('next')
    commonweal_current = (commonweal_current + 1) % commonweal_swiper.children.length
    commonweal_change()
}
function commonweal_pre() {
    commonweal_current = (commonweal_current + commonweal_swiper.children.length - 1) % commonweal_swiper.children.length
    commonweal_change()
}