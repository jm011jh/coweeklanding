import data from './data.js'
const dataCount = data.length;
const $tcList = document.getElementById("tcList")
const $Pm01 = document.getElementById("Pm01")
const $Pm02 = document.getElementById("Pm02")
for(let i = 0; i < dataCount; i++){
    let date = data[i].date
    let timeNumber = data[i].timeNumber
    let clIndex = data[i].clIndex
    let clType = data[i].clType
    
    let $list = document.createElement("div")//리스트 아이넴만들기
    $list.classList.add("main--sect02-dataCol02item")
    $list.classList.add(`date` + date)
    if(date == 26){$list.classList.add("show")}//처음에는 26만 보여주기 위해 show 클래스 부여...


    let $types = document.createElement("div")//신기술분야 만들기
    $types.classList.add("main--sect02-dataCol02types")
    $list.appendChild($types)
    
    let $1or2 = document.createElement("div")//분야1,2 만들기
    $1or2.classList.add("main--sect02-dataCol02item-is")
    $1or2.classList.add("main--sect02-dataCol02item-is" + String(timeNumber))
    $types.appendChild($1or2)

    let $clType = document.createElement("div")//신기술분야 만들기
    $clType.classList.add("main--sect02-dataCol02item-type")
    $clType.innerHTML = data[i].clType
    $types.appendChild($clType)

    let $title = document.createElement("div")//리스트제목 만들기
    $title.classList.add("main--sect02-dataCol02item-title")
    $title.innerHTML = data[i].clName1
    $list.appendChild($title)

    let $card = document.createElement("div")//호버카드 만들기
    $card.classList.add("main--sect02-dataCol02itemOpen")
    $list.appendChild($card)

    let $tcName = document.createElement("div")//강사이름 만들기
    $tcName.classList.add("main--sect02-dataCol02itemName")
    $tcName.innerHTML = data[i].tcName
    $card.appendChild($tcName)
    let $tcWhere = document.createElement("div")//강사이름 만들기
    $tcWhere.classList.add("main--sect02-dataCol02itemWhere")
    $tcWhere.innerHTML = data[i].tcWhere
    $card.appendChild($tcWhere)
    let $clGoal = document.createElement("div")//강의목표 만들기
    $clGoal.classList.add("main--sect02-dataCol02itemGoal")
    $clGoal.innerHTML = data[i].clGoal
    $card.appendChild($clGoal)


    if( timeNumber == 1 ){//리스트타입에 따라 오후파트 1,2 로 나뉘어서 보내기
        $Pm01.appendChild($list)
        $1or2.innerHTML = `신기술 분야 I`
    }
    else if ( timeNumber == 2 ){
        $Pm02.appendChild($list)
        $1or2.innerHTML = `신기술 분야 II`
    }
}
//날짜별 버튼 클릭 시 특정요소에게 클래스 부여
const $date26 = document.getElementById("date26")
const $date27 = document.getElementById("date27")
const $date28 = document.getElementById("date28")

const $itemAll = document.querySelectorAll(".main--sect02-dataCol02item")
const $items26 = document.querySelectorAll(".date26")
const $items27 = document.querySelectorAll(".date27")
const $items28 = document.querySelectorAll(".date28")
$date26.addEventListener("click",function(el){
    console.log($items26)
    $date26.classList.add("on")
    $date27.classList.remove("on")
    $date28.classList.remove("on")
    for(let el of $itemAll){el.classList.remove("show")}
    for(let el of $items26){el.classList.add("show")}
    document.querySelector(".onlyData").classList.remove("hide")
})
$date27.addEventListener("click",function(){
    $date26.classList.remove("on")
    $date27.classList.add("on")
    $date28.classList.remove("on")
    for(let el of $itemAll){el.classList.remove("show")}
    for(let el of $items27){el.classList.add("show")}
    document.querySelector(".onlyData").classList.add("hide")
})
$date28.addEventListener("click",function(){
    $date26.classList.remove("on")
    $date27.classList.remove("on")
    $date28.classList.add("on")
    for(let  el of $itemAll){el.classList.remove("show")}
    for(let  el of $items28){el.classList.add("show")}
    document.querySelector(".onlyData").classList.add("hide")
})

$itemAll.forEach(function(el,i){
    let child = el.querySelector(".main--sect02-dataCol02itemOpen")
    el.addEventListener("mouseenter",function(){
        child.classList.add("show")
    })
    el.addEventListener("mouseleave",function(){
        child.classList.remove("show")
    })
})