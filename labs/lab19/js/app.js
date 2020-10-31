let cost = document.getElementById("price")

function calc() {

    let tip = (cost.value * .2);

    let Tip = tip.toFixed(2);

    let total = (parseFloat(cost.value) + parseFloat(Tip));

    console.log("Tip: $" + Tip + ". " + "Total: $" + total +".");
}