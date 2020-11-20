var csvString = document.getElementById("csvString");
var csvOutput = document.getElementById("csvOutput");

var sum = 0;

function breakCSV() {
    var inputCSV = csvString.value;
    var splitCSV = inputCSV.split(",");

    var sum = 0;

    for( var i = 0; i < splitCSV.length; i++) {
        var curValues = parseInt(splitCSV[i]);
        
        sum = sum + curValues;
    }

    var total = 0;

    for( var i = 0; i < splitCSV.length; i++) {
        total += parseInt(splitCSV[i]);

        var avg = total / splitCSV.length;
    }

    csvOutput.innerHTML = "Sum: " + sum + "   " + "Average: " + avg;
}
