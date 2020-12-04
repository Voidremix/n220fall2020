let element = document.getElementById("divRed");
element.addEventListener("click", redClicked);

function redClicked(event) {
    event.target.style.backgroundColor = "#FF0000";
}

let element2 = document.getElementById("divBlue");
element2.addEventListener("click", blueClicked);

function blueClicked(event) {
    event.target.style.backgroundColor = "#0000FF";
}

let element3 = document.getElementById("divGreen");
element3.addEventListener("click", greenClicked);

function greenClicked(event) {
    event.target.style.backgroundColor = "#00FF00";
}