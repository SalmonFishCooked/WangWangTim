var createWidth = 1536
var c = ()=> {
	let width = document.documentElement.clientWidth
	let n = (16*(width/createWidth) > 40? 40+'px':(16*(width/createWidth)+'px'))
	document.documentElement.style.fontSize = n
}
window.addEventListener('load', c)
window.addEventListener('resize', c)