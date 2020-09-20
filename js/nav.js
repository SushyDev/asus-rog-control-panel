//Toggle for the side drawer

function drawer() {
    var nav = document.getElementById("nav")
    if (nav.classList.contains('nav-active')) {
        nav.classList.remove('nav-active')
    } else {
        nav.classList.add('nav-active')
    }
}