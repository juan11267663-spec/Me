
function goToNext() {
    document.getElementById("screen1").classList.add("hidden");
    document.getElementById("screen2").classList.remove("hidden");
}

function revealMessage() {
    document.getElementById("screen2").classList.add("hidden");
    document.getElementById("screen3").classList.remove("hidden");
    document.getElementById("bg-music").play();
}
