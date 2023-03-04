const top_nav_item = document.querySelectorAll('.navItem')
const selectNav = document.querySelectorAll('.selectNav')
const body = document.getElementsByTagName('body')
const mask = document.getElementsByClassName('mask')
console.log(body[0].clientHeight)
console.log(mask)
let top_index
let childItem_index
for (let i = 0; i < top_nav_item.length; i++) {
    top_nav_item[i].onmouseover = function () {
        mask[0].className = 'mask mask_block'
        let top_index = i
        const childItem = selectNav[i].querySelectorAll('.childItem')
        console.log(childItem)
        top_nav_block(top_index)
        for (let j = 0; j < childItem.length; j++) {
            childItem[j].onmouseover = function () {
                console.log(j)
                childItem_index = j
                for (let i = 0; i < childItem.length; i++) {
                    childItem[i].className = 'childItem'
                }
                childItem[childItem_index].className = 'childItem childItem_hover'
            }
        }
    }
    top_nav_item[i].onmouseleave = function () {
        mask[0].className = 'mask'
        for (let i = 0; i < top_nav_item.length; i++) {
            top_nav_item[i].children[1].className = 'select'
        }
    }
}
function childItem_hover(childItem_index) {
    for (let i = 0; i < childItem.length; i++) {
        childItem[i].className = 'childItem'
    }
    childItem[childItem_index] = 'childItem childItem_hover'
}
function top_nav_block(top_index) {
    for (let i = 0; i < top_nav_item.length; i++) {
        top_nav_item[i].children[1].className = 'select'
    }
    console.log(top_index + '执行block')
    top_nav_item[top_index].children[1].className = 'select select_hover'
}