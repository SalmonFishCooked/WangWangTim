var goTop = document.getElementsByClassName('gototop')

window.onscroll = function() {
    var height = document.documentElement.scrollTop || document.body.scrollTop
    if (height >= 300) {
        goTop[0].style.bottom = '85px'
    } else {
        goTop[0].style.bottom = '-85px'
    }
}

goTop[0].onclick = function() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
}