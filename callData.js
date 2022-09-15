import data from './data.js'
const dataCount = data.length;
const $tcList = document.getElementById("tcList")

for(let i = 0; i < dataCount; i++){
    let $list = document.createElement("div")
    $list.classList.add("tc-listItem")
    let $link = document.createElement("a")
    $link.setAttribute("href",`/detail.html?id=${i}`)
    $link.innerHTML = data[i].clName1 + "..." + data[i].tcName
    
    $list.appendChild($link)
    $tcList.appendChild($list)
}