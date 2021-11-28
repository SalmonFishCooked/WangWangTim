var createWidth = 1899
var c = ()=> {
	let width = document.documentElement.clientWidth
	let n = (20*(width/createWidth) > 40? 40+'px':(20*(width/createWidth)+'px'))
	document.documentElement.style.fontSize = n
}
window.addEventListener('load', c)
window.addEventListener('resize', c)