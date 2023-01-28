window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsedh');
    const darkModeEnabled = getCookie("dark-mode");
    document.getElementById("darkModeInput").checked = Boolean(parseInt(darkModeEnabled));
    Boolean(parseInt(darkModeEnabled)) ? navbarDarkmodeEnableHandler() : navbarLightmodeEnableHandler();
    return
});


function modeChangeHandler(t, event) {
    t.checked ? navbarDarkmodeEnableHandler() : navbarLightmodeEnableHandler()
    setCookie("dark-mode", t.checked ? 1 : 0, 1)
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkIfDarkModeIsEnabled() {
    const darkModeEnabled = getCookie("dark-mode");
    console.log("darkModeEnabled")
    document.getElementById("darkModeInput").checked = Boolean(darkModeEnabled);
}

function darkModeDomChangeHandler(val) {
    document.getElementById("darkModeInput").checked = val;
}


function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function navbarDarkmodeEnableHandler() {
    console.log('dark mode enabled');
    const navbar = document.getElementById("almanav")
    navbar.classList.remove('bg-body-tertiary');
    navbar.classList.add('bg-dark');
    document.getElementById("lightLogo").style.display = "none";
    document.getElementById("darkLogo").style.display = "block";
    document.querySelectorAll('.nav-link').forEach(el => el.classList.add('text-light'));

    return
}

function navbarLightmodeEnableHandler() {
    console.log('light mode enabled');
    const navbar = document.getElementById("almanav")
    navbar.classList.remove('bg-dark');
    navbar.classList.add('bg-body-tertiary');
    document.getElementById("lightLogo").style.display = "block";
    document.getElementById("darkLogo").style.display = "none";
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('text-light'));
    return
}



