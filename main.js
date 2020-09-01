function showHint() {
    console.log(document.getElementById("hint-div").style.display);

    if (document.getElementById("hint-div").style.display == "block") {
        document.getElementById("hint-div").style.display = "none";
        document.getElementById("hint-link").innerHTML = "Что это?";
        document.getElementById("hint-link").style.color = "#dddddd";
    } else {
        document.getElementById("hint-div").style.display = "block";
        document.getElementById("hint-link").innerHTML = "Понял";
        document.getElementById("hint-link").style.color = "black";
    }
}