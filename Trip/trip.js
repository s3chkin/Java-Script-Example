var budget = prompt("Enter value for budget: ");

if (budget > 5000) {
    document.write("Invalid value!");
}

let season = prompt("Summer OR Winter");

if (budget <= 100) {
    if (season === "summer") {
        document.getElementById("demo").innerHTML = "Somewhere in Bulgaria!"
        var moneySpent = budget * 0.30;
        document.writeln(`Camp - ${moneySpent.toFixed(2)}`);
    } else {
        var moneySpent = budget * 0.70;
        document.getElementById("demo").innerHTML = "Somewhere in Bulgaria!"
        document.writeln(`Hotel - ${moneySpent.toFixed(2)}`);

    }
} else if (budget <= 1000.00) {
    if (season === "summer" || "Summer") {
        document.getElementById("demo").innerHTML = "Somewhere in Balkans!"
        var moneySpent = budget * 0.40;
        document.writeln(`Camp - ${moneySpent.toFixed(2)}`);
    } else if (season === "winter") {
        document.getElementById("demo").innerHTML = "Somewhere in Balkans!"
        var moneySpent = budget * 0.80;
        document.writeln(`Hotel - ${moneySpent.toFixed(2)}`);

    }

} else if (budget > 1000) {

    document.getElementById("demo").innerHTML = "Somewhere in Europe!"
    var moneySpent = budget * 0.90;
    document.writeln(`Hotel ${moneySpent.toFixed(2)}`);

}