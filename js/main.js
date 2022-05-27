var current = 0
const divs = [
    "intro1",
    "intro2",
    "puzzle1",
]
function next() {
    if (current == divs.length-1)
        return
    document.getElementById(divs[current]).style.display = "none"
    current++
    document.getElementById(divs[current]).style.display = "block"
}