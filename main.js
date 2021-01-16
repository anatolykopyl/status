function showHint() {
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

var xhttp = new XMLHttpRequest();

function send() {
    xhttp.open("GET", "http://status.anatolykopyl.ru:5001/update", true);
    xhttp.send();
}