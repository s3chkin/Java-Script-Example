let moneys = (Math.random() * 5).toFixed(2);
if (moneys == 0) {
    alert("Not Money!");
}
document.getElementById("money").innerHTML = `Moneys: ${moneys}`;
let coffee = parseFloat(0.70);
let tea = parseFloat(1.20);
let chocolate = parseFloat(1.50);
let threeInOne = parseFloat(1.00);
let sumCoffee = 0.00;
let sumTea = 0.00;
let sumChocolate = 0.00;
let sumThreeInOne = 0.00;
let sum = 0.00;

function CalculateCoffee() {
    sumCoffee = moneys - parseFloat(coffee);
    document.getElementById("money").innerHTML = `Moneys: ${sumCoffee.toFixed(2)}`;
    moneys = sumCoffee;
}

function CalculateTea() {
    sumCoffee = moneys - parseFloat(tea);
    document.getElementById("money").innerHTML = `Moneys: ${sumCoffee}`;

}

function CalculateChocoate() {
    sumCoffee = moneys - parseFloat(chocolate);
    document.getElementById("money").innerHTML = `Moneys: ${sumCoffee}`;
}

function CalculateThreeInOne() {
    sumCoffee = moneys - parseFloat(threeInOne);
    document.getElementById("money").innerHTML = `Moneys: ${sumCoffee}`;
}