// 2022 10 07 D-day...
const timeD = document.getElementById("timeD")
const timeH = document.getElementById("timeH")
const timeM = document.getElementById("timeM")
const timeS = document.getElementById("timeS")

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

CountDownSet('10/04/2022 12:00:00', 'countdown');
CountDownTimer('10/04/2022 12:00:00', 'countdown');

    function CountDownTimer(dt, id){
        var end = new Date(dt);

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {
                clearInterval(timer);
                timeD.innerHTML = "00";
                timeH.innerHTML = "00";
                timeM.innerHTML = "00";
                timeS.innerHTML = "00";
            }else{   
                timeD.innerHTML = Math.floor(distance / _day);
                timeH.innerHTML = Math.floor((distance % _day) / _hour);
                timeM.innerHTML = Math.floor((distance % _hour) / _minute);
                timeS.innerHTML = Math.floor((distance % _minute) / _second);
            }
        }
        timer = setInterval(showRemaining, 1000);
    }
    function CountDownSet(dt, id){
        var end = new Date(dt);
        var now = new Date();

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;
        var distance = end - now;

        if (distance < 0) {
            timeD.innerHTML = "00";
            timeH.innerHTML = "00";
            timeM.innerHTML = "00";
            timeS.innerHTML = "00";
        }

        timeD.innerHTML = Math.floor(distance / _day);
        timeH.innerHTML = Math.floor((distance % _day) / _hour);
        timeM.innerHTML = Math.floor((distance % _hour) / _minute);
        timeS.innerHTML = Math.floor((distance % _minute) / _second);
    }