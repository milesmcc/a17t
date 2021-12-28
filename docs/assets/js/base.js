function highlightSearch() {
    document.querySelector("#search").select();
}

document.onkeydown = function(event) {
    if (event.key === "/") {
        highlightSearch();
        return false;
    }
}