//If darkmode was on last time keep it on
function switchTheme() {
    if (localStorage.getItem("darkmode") == "false") {
        localStorage.setItem("darkmode", true)
    } else {
        localStorage.setItem("darkmode", false)
    }
    checkTheme()

}

function checkTheme() {
    if (localStorage.getItem("darkmode") == "true") {
        document.documentElement.setAttribute('data-theme', 'dark');
        try {
            document.getElementById("theme").innerHTML = `<span class="material-icons">brightness_high</span> Enable Light mode`
        } catch (error) {}
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem("darkmode", false)
        try {
            document.getElementById("theme").innerHTML = `<span class="material-icons">nights_stay</span> Enable Dark mode`
        } catch (error) {}
    }
}
checkTheme()