var x  = 0;
var y = 0;
var z = 0;

function addRed1() {
    x = x + 1;
    updateColor();
    console.log(x,y,z);
};

function addRed5() {
    x = x + 5;
    updateColor();
};

function addRed10() {
    x = x + 10;
    updateColor();
};

function addGreen1() {
    y = y + 1;
    updateColor();
};

function addGreen5() {
    y = y + 5;
    updateColor();
};

function addGreen10() {
    y = y + 10;
    updateColor();
};

function addBlue1() {
    z = z + 1;
    updateColor();
};

function addBlue5() {
    z = z + 5;
    updateColor();
};

function addBlue10() {
    z = z + 10;
    updateColor();
};

function updateColor() {

    document.getElementById("mixerDisplay").style.backgroundColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    document.getElementById("currentColor").innerHTML = "current color: rgb(" + x + "," + y + "," + z + ")";
};