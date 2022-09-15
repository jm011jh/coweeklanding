import data from "./data.js"//45
import dataProfile from "./dataProfile.js"//45

let locationQuery = window.location.search;
let param = new URLSearchParams(locationQuery);
let thisData = data[param.get("id")]
let thisProfile = dataProfile[param.get("id")]


const clName1 = document.getElementById("clName1")
clName1.innerHTML = thisData.clName1
const clName2 = document.getElementById("clName2")
clName2.innerHTML = thisData.clName2
const clType = document.getElementById("clType")
clType.innerHTML = thisData.clType
const clSchool = document.getElementById("clSchool")
clSchool.innerHTML = thisData.clSchool
const clGoal = document.getElementById("clGoal")
clGoal.innerHTML = thisData.clGoal
const clData = document.getElementById("clData")
clData.innerHTML = thisData.clData
function forArrCopy($el,thisData){
    for(let i = 0; i<thisData.length; i++){
        console.log($el)
        let p = document.createElement("p")
        p.innerHTML = thisData[i]
        $el.appendChild(p)
    }
}
const clRecommendFor = document.getElementById("clRecommendFor")
forArrCopy(clRecommendFor, thisData.clRecommendFor)
const clExpection = document.getElementById("clExpection")
forArrCopy(clExpection, thisData.clExpection)
const clReference = document.getElementById("clReference")
forArrCopy(clReference, thisData.clReference)
const tcName = document.getElementById("tcName")
tcName.innerHTML = thisData.tcName
const tcWhere = document.getElementById("tcWhere")
tcWhere.innerHTML = thisData.tcWhere
const tcType = document.getElementById("tcType")
tcType.innerHTML = thisData.tcType
const tcTel = document.getElementById("tcTel")
tcTel.innerHTML = thisData.tcTel
const tcEmail = document.getElementById("tcEmail")
tcEmail.innerHTML = thisData.tcEmail

if(thisData.tc2 == true){//강사가 한 명일 경우
    console.log("tc2 is exist")
    const tcName2 = document.getElementById("tcName2")
    tcName2.innerHTML = thisData.tcName2
    const tcWhere2 = document.getElementById("tcWhere2")
    tcWhere2.innerHTML = thisData.tcWhere2
    const tcType2 = document.getElementById("tcType2")
    tcType2.innerHTML = thisData.tcType2
    const tcTel2 = document.getElementById("tcTel2")
    tcTel2.innerHTML = thisData.tcTel2
    const tcEmail2 = document.getElementById("tcEmail2")
    tcEmail2.innerHTML = thisData.tcEmail2

    const tcProfile = document.getElementById("tcProfile")
    forArrCopy(tcProfile, thisProfile[0])
    const tcProfile2 = document.getElementById("tcProfile2")
    forArrCopy(tcProfile2, thisProfile[1])
}else{//강사가 두 명일 경우
    const tc2 = document.getElementById("tc2")
    tc2.style.display = "none"
    const tcProfile = document.getElementById("tcProfile")
    forArrCopy(tcProfile, thisProfile)
}