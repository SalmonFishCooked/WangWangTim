// 倒计时实现
var dateline = new Date("Mar 2, 2022 00:00:00")

var d = document.getElementById('d');
var h = document.getElementById('h');
var m = document.getElementById('m');
var s = document.getElementById('s');

function clockT() {
    var nowTime = new Date()
    var remainTime = dateline.getTime() - nowTime.getTime()
    var days = Math.floor(remainTime / (1000 * 60 * 60 * 24))
    var hours = Math.floor(remainTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    var minutes = Math.floor(remainTime % (1000 * 60 * 60) / (1000 * 60))
    var seconds = Math.floor(remainTime % (1000 * 60) / 1000)

    d.innerHTML = getRealNumber(days)
    h.innerHTML = getRealNumber(hours)
    m.innerHTML = getRealNumber(minutes)
    s.innerHTML = getRealNumber(seconds)

    return clockT
}

var clockNumber = setInterval(clockT(), 1000)

function getRealNumber(x) {
    if (x < 10) { return '0' + x }
    return x
}


// 过渡动画实现
var clock = document.getElementsByClassName('clock')
var clockletters = document.getElementsByClassName('clock-letters')
console.log(clock)
window.onload = function() {
    clock[0].style.top = '32%'
    clock[0].style.opacity = '1.0'

    clockletters[0].style.opacity = '1.0'
}