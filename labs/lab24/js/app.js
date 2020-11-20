
function badWordCatch(i, curInput) {

    var txtString = document.getElementById("txtString");

    var inputTxt = txtString.value;
    var splitTxt = inputTxt.split(" ");
    const badWords = ["clear", "water", "tires"];

    var foundFlag = false;

    var tally = 0;

    for( var i = 0; i < splitTxt.length ; i++) {
        var curInput = splitTxt[i];

        for( var x = 0; x < badWords.length; x++) {
            if (curInput.includes(badWords[x])) {
                foundFlag = true;
                tally++;
            }

        }
        
    }

    document.getElementById("ifFound").innerHTML = foundFlag;
    document.getElementById("amtFound").innerHTML = tally;
}
