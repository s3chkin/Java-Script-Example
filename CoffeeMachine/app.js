let moneys = (Math.random() * 8).toFixed(2);
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
let sum = moneys;

if (moneys < 1.50) {
    document.getElementById("btn3").disabled = true;
    document.getElementById("btn3").style.cursor = "not-allowed";
}
if (moneys < 1.20) {
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn2").style.cursor = "not-allowed";
}
if (moneys < 1.00) {
    document.getElementById("btn4").disabled = true;
    document.getElementById("btn4").style.cursor = "not-allowed";
}
if (moneys < coffee) {
    // alert("Sorry Not Money!");
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn1").style.cursor = "not-allowed";
}
if (moneys < coffee) {
    // location.reload();
    window.location.reload();
}

function CalculateCoffee() {
    sumCoffee = moneys - parseFloat(coffee);
    document.getElementById("money").innerHTML = `Moneys: ${sumCoffee.toFixed(2)}`;
    // moneys = sumCoffee;
    document.getElementById("btn").disabled = true;
    document.getElementById("btn").style.cursor = "not-allowed";
    sumCoffee = moneys;
    if (sumCoffee <= 1.49) {
        document.getElementById("btn3").disabled = true;
    }

    var img = new Image();
    var div = document.getElementById('image');
    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'coffee.jpg';

}

function CalculateTea() {
    // sumCoffee = moneys;
    // moneys = sumCoffee;

    sumCoffee = moneys - parseFloat(tea).toFixed(2);
    // sumTea = moneys - parseFloat(tea).toFixed(2);

    document.getElementById("money").innerHTML = `Moneys: ${sumCoffee.toFixed(2)}`;
    // document.getElementById("money").innerHTML = `Moneys: ${sumTea-sumCoffee.toFixed(2)}`;
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn2").style.cursor = "not-allowed";


    var img = new Image();
    var div = document.getElementById('image');
    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'tea.jpg';
}

function CalculateChocoate() {
    sumCoffee = moneys;
    // moneys = moneys - parseFloat(chocolate);
    sumCoffee = moneys - parseFloat(chocolate).toFixed(2);

    document.getElementById("money").innerHTML = `Moneys: ${sumCoffee.toFixed(2)}`;
    document.getElementById("btn3").disabled = true;
    document.getElementById("btn3").style.cursor = "not-allowed";

    var img = new Image();
    var div = document.getElementById('image');
    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'chocolate.jpg';
}

function CalculateThreeInOne() {
    sumCoffee = moneys;
    sumCoffee = moneys - parseFloat(threeInOne).toFixed(2);
    document.getElementById("money").innerHTML = `Moneys: ${sumCoffee.toFixed(2)}`;
    document.getElementById("btn4").disabled = true;
    document.getElementById("btn4").style.cursor = "not-allowed";

    var img = new Image();
    var div = document.getElementById('image');
    img.onload = function() {
        div.appendChild(img);
    };
    img.src = '3in1.jpg';
}