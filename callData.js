import data from './data.js'
import dataSummary from './dataSummary.js'
const dataCount = data.length;
const $tcList = document.getElementById("tcList")
const $Pm01 = document.getElementById("Pm01")
const $Pm02 = document.getElementById("Pm02")
const $classPop = document.getElementById("classPop")
const $dataPopup = document.getElementById("dataPopup")
const $classPopClose = document.getElementById("classPopClose")
const $classPopBg = document.getElementById("classPopBg")
for(let i = 0; i < dataCount; i++){
    let date = data[i].date
    let timeNumber = data[i].timeNumber
    let clIndex = data[i].clIndex
    let clType = data[i].clType
    let tcName = data[i].tcName;
    var exp;
    for(let item of dataSummary){
        if(item.name == "정찬복" &&tcName == item.name){
                console.log("찬복좌")
                console.log(item.name)
        }
        if(tcName == item.name){
            exp = item.exp
        }
    }
    // #region chart list
    let $list = document.createElement("div")//리스트 아이넴만들기
    $list.classList.add("main--sect02-dataCol02item")
    $list.setAttribute("data-number",i)
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
    // #endregion chart list
    // #region popup list
    let $dataList = document.createElement("div")
    $dataList.classList.add("main--popup-listItem")
    $dataPopup.append($dataList)

    let $titlePop = document.createElement("div")
    $titlePop.classList.add("main--popup-title")
    $titlePop.innerHTML = "강의상세정보"
    $dataList.appendChild($titlePop)
    let $clNamePop = document.createElement("div")
    $clNamePop.classList.add("main--popup-name")
    $clNamePop.innerHTML = "" + data[i].clName1
    $dataList.appendChild($clNamePop)
    if(data[i].tcName2){
        let $tcNamePop2 = document.createElement("div")
        $tcNamePop2.classList.add("main--popup-tcName")
        $tcNamePop2.innerHTML ="<span>강사이름</span> : " +  data[i].tcName + ", " + data[i].tcName2
        $dataList.appendChild($tcNamePop2)
    }else{
        let $tcNamePop = document.createElement("div")
        $tcNamePop.classList.add("main--popup-tcName")
        $tcNamePop.innerHTML ="<span>강사이름</span> : " +  data[i].tcName
        $dataList.appendChild($tcNamePop)
    }
    let $tcWherePop2 = document.createElement("div")
    $tcWherePop2.classList.add("main--popup-tcWhere")
    $tcWherePop2.innerHTML ="<span>소속</span> : " +  data[i].tcWhere
    $dataList.appendChild($tcWherePop2)
    let $cltypePop = document.createElement("div")
    $cltypePop.classList.add("main--popup-type")
    $cltypePop.innerHTML = "<span>신기술 분야</span> : " +  data[i].clType
    $dataList.appendChild($cltypePop)
    // let $tcWherePop = document.createElement("div")
    // $tcWherePop.classList.add("main--popup-where")
    // $tcWherePop.innerHTML = data[i].tcWhere
    // $dataList.appendChild($tcWherePop)
    let $clGoalPop = document.createElement("div")
    $clGoalPop.classList.add("main--popup-goal")
    $clGoalPop.innerHTML ="<span>강의목표</span> " +  `<p>${data[i].clGoal}</p>`
    $dataList.appendChild($clGoalPop)

    let $expPop = document.createElement("div")
    $expPop.classList.add("main--popup-exp")
    $expPop.innerHTML ="<span>강의내용(요약)</span> " +  `<p>${exp}</p>`
    $dataList.appendChild($expPop)

    // let $clRecommendForPop = document.createElement("div")
    // $clRecommendForPop.classList.add("main--popup-recommend")
    // $clRecommendForPop.innerHTML ="<span>강의추천대상</span> : " +  data[i].clRecommendFor
    // $dataList.appendChild($clRecommendForPop)
    // let $clExpectionPop = document.createElement("div")
    // $clExpectionPop.classList.add("main--popup-expection")
    // $clExpectionPop.innerHTML ="<span>강의기대효과</span> : " +  data[i].clExpection
    // $dataList.appendChild($clExpectionPop)
    
    // let $1or2 = document.createElement("div")//분야1,2 만들기
    // $1or2.classList.add("main--sect02-dataCol02item-is")
    // $1or2.classList.add("main--sect02-dataCol02item-is" + String(timeNumber))
    // $types.appendChild($1or2)

    // let $clType = document.createElement("div")//신기술분야 만들기
    // $clType.classList.add("main--sect02-dataCol02item-type")
    // $clType.innerHTML = data[i].clType
    // $types.appendChild($clType)

    // let $title = document.createElement("div")//리스트제목 만들기
    // $title.classList.add("main--sect02-dataCol02item-title")
    // $title.innerHTML = data[i].clName1
    // $list.appendChild($title)

    // let $card = document.createElement("div")//호버카드 만들기
    // $card.classList.add("main--sect02-dataCol02itemOpen")
    // $list.appendChild($card)

    // let $tcName = document.createElement("div")//강사이름 만들기
    // $tcName.classList.add("main--sect02-dataCol02itemName")
    // $tcName.innerHTML = data[i].tcName
    // $card.appendChild($tcName)
    // let $tcWhere = document.createElement("div")//강사이름 만들기
    // $tcWhere.classList.add("main--sect02-dataCol02itemWhere")
    // $tcWhere.innerHTML = data[i].tcWhere
    // $card.appendChild($tcWhere)
    // let $clGoal = document.createElement("div")//강의목표 만들기
    // $clGoal.classList.add("main--sect02-dataCol02itemGoal")
    // $clGoal.innerHTML = data[i].clGoal
    // $card.appendChild($clGoal)
    // #endregion popup list
}
//날짜별 버튼 클릭 시 특정요소에게 클래스 부여
const $date26 = document.getElementById("date26")
const $date27 = document.getElementById("date27")
const $date28 = document.getElementById("date28")

const $itemAll = document.querySelectorAll(".main--sect02-dataCol02item")
const $items26 = document.querySelectorAll(".date26")
const $items27 = document.querySelectorAll(".date27")
const $items28 = document.querySelectorAll(".date28")

const $popList = document.querySelectorAll(".main--popup-listItem")
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
    // let child = el.querySelector(".main--sect02-dataCol02itemOpen")
    el.addEventListener("click",function(){
        var index = el.getAttribute("data-number")
        for(let  item of $popList){item.classList.remove("on")}
        $popList[index].classList.add("on")
        $classPop.classList.add("show")
        $("body").addClass("scrollOff")
    })
})

$classPopClose.addEventListener("click",function(){
    $classPop.classList.remove("show")
    $("body").removeClass("scrollOff")
})
$classPopBg.addEventListener("click",function(){
    $classPop.classList.remove("show")
    $("body").removeClass("scrollOff")
})