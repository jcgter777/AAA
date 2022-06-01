var current = 0
const divs = [
    "intro1",
    "intro2",
    "puzzle1",
    "open1",
    "puzzle2"
]
function next() {
    if (current == divs.length-1)
        return
    document.getElementById(divs[current]).style.display = "none"
    current++
    document.getElementById(divs[current]).style.display = "block"

    let div = document.getElementById(divs[current])
    if (div.classList.contains("locked")) {
        document.getElementById("continue").style.display = "none"
    }
}

function elev1() {
    elevFail()
}

function elev2() {
    if (document.getElementById("elevSucc").style.display === "block")
        return
    document.getElementById("continue").style.display = "block"
    document.getElementById("elevSucc").style.display = "block"
    elevLock()
}

function elev3() {
    elevFail()
}

function elevFail() {
    let bar = document.getElementById("elevError")
    if (bar != null)
        bar.style.display = "block"
}

function elevLock() {
    document.getElementById("elevError").remove()
}