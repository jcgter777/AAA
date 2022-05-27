var current = 0
const divs = [
    "intro",
    "intro2"
]
function next() {
    if (current == divs.length-1)
        return
    document.getElementById(divs[current]).style.display = "none"
    current++
    document.getElementById(divs[current]).style.display = "block"
}