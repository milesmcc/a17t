const REMOTE_THEMES = [
    {
        name: "Default",
        url: "/assets/css/themes/default.css",
    },
    {
        name: "Solarized Light",
        url: "/assets/css/themes/solarized-light.css",
    }
]

function getDefaultTheme() {
    return {
        name: "Default",
        rules: "",
    };
}

let theme = getDefaultTheme();

function loadThemeFromStorage() {
    theme = {
        name: "Default",
        rules: "",
    };
    if (window.localStorage.getItem("theme") !== null) {
        theme = JSON.parse(window.localStorage.getItem("theme"));
    }
    document.querySelector("#custom-theme").textContent = theme.rules;
}

function writeThemeToStorage(name, rules) {
    window.localStorage.setItem("theme", JSON.stringify({
        name: name,
        rules: rules,
    }));
    loadThemeFromStorage();
}

async function loadRemoteTheme(remoteTheme) {
    let response = await fetch(remoteTheme.url);
    let text = await response.text();
    writeThemeToStorage(remoteTheme.name, text);
}

function resetTheme() {
    window.localStorage.removeItem("theme");
    loadThemeFromStorage();
}

loadThemeFromStorage();