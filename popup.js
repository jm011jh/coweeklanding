$(document).ready(function () {
    cookiedata = document.cookie;
    if (cookiedata.indexOf("ncookie01=done") < 0) {
        document.getElementById('eventPopup').style.display = "block";    //  팝업창 아이디
    } else {
        document.getElementById('eventPopup').style.display = "none";    // 팝업창 아이디
    }
    if (cookiedata.indexOf("ncookie02=done") < 0) {
        document.getElementById('eventPopup02').style.display = "block";    //  팝업창 아이디
    } else {
        document.getElementById('eventPopup02').style.display = "none";    // 팝업창 아이디
    }

});



function setCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function closeWin01() {
    document.getElementById('eventPopup').style.display = "none";    // 팝업창 아이디
}
function closeWin02() {
    document.getElementById('eventPopup02').style.display = "none";    // 팝업창 아이디
}



function todaycloseWin01() {
    setCookie("ncookie01", "done", 1);     // 저장될 쿠키명 , 쿠키 value값 , 기간( ex. 1은 하루, 7은 일주일)
    document.getElementById('eventPopup').style.display = "none";    // 팝업창 아이디
}
function todaycloseWin02() {
    setCookie("ncookie02", "done", 1);     // 저장될 쿠키명 , 쿠키 value값 , 기간( ex. 1은 하루, 7은 일주일)
    document.getElementById('eventPopup02').style.display = "none";    // 팝업창 아이디
}