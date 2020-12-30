function getDefaultTheme() {
    return {
        name: "Default",
        rules: "",
        time: new Date().getTime()
    };
}


function loadThemeFromStorage() {
    let theme = getDefaultTheme();

    if (window.localStorage.getItem("theme") !== null) {
        let storedTheme = JSON.parse(window.localStorage.getItem("theme"));

        // If the theme doesn't have an associated time or was set more than 24h ago,
        // reset.
        if (("time" in storedTheme) && new Date().getTime() < storedTheme.time + 24*60*60*1000) {
            theme = storedTheme;
        }
    }
    document.querySelector("#custom-theme").textContent = theme.rules;
}

function writeThemeToStorage(name, rules) {
    window.localStorage.setItem("theme", JSON.stringify({
        name: name,
        rules: rules,
        time: new Date().getTime()
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