
var home = document.getElementsByClassName("transavialogomenu")

var gordijn = document.querySelector("java")

function change() {
    gordijn.innerHTML ="Je bent al op homepage... Hier vind je alle categorien!"
}

home.addEventListener("mouseenter", change, false)