const tab_top_title = document.querySelectorAll('.tab_top_title')
const tab_main = document.querySelectorAll('.tab_main')
console.log(tab_main)
let tab_index, tab_item_index
for (let i = 0; i < tab_main.length; i++) {
    let tab_item = tab_main[i].querySelectorAll('.tab_nav_item')
    console.log(tab_item)
    for (let j = 0; j < tab_item.length; j++) {

        tab_item[j].onmouseover = () => {
            let tab_item_index = j
            for (let k = 0; k < tab_item.length; k++) {
                if (k !== tab_item_index) {
                    tab_item[k].children[0].style.display = 'block'
                    tab_item[k].children[1].style.display = 'none'
                } else {
                    tab_item[k].children[0].style.display = 'none'
                    tab_item[k].children[1].style.display = 'block'
                }
            }
        }


    }
}
function tab_item_select(tab_item_index) {
    
}
for (let i = 0; i < tab_top_title.length; i++) {
    tab_top_title[i].onmouseover = () => {
        let tab_index = i
        tab_top_title_select(tab_index)
    }
}
function tab_top_title_select(tab_index) {
    var pattern = /tab_top_title_hover/
    if (pattern.test(tab_top_title[tab_index].className)) {
        return
    }
    for (let i = 0; i < tab_top_title.length; i++) {
        if (i !== tab_index) {
            tab_main[i].style.display = 'none'
            tab_top_title[i].className = 'tab_top_title'
        } else {
            tab_main[i].style.display = 'block'
            tab_top_title[i].className = 'tab_top_title tab_top_title_hover'
        }
    }
}
