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
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn1").style.cursor = "not-allowed";
}
if (moneys < coffee) {
    window.location.reload();
}

function CalculateCoffee() {
    sumCoffee = moneys - parseFloat(0.70);
    document.getElementById("money").innerHTML = `Moneys: ${sumCoffee.toFixed(2)}`;
    // moneys = sumCoffee;
    document.getElementById("btn").disabled = true;
    document.getElementById("btn").style.cursor = "not-allowed";

    var img = new Image();
    var div = document.getElementById('image');
    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'coffee.jpg';


    moneys = sumCoffee;
    document.getElementById("money").innerHTML = `Moneys: ${moneys.toFixed(2)}`;
}

function CalculateTea() {
    // moneys = null;
    // moneys = sumCoffee;

    sumTea = moneys - parseFloat(1.20).toFixed(2);
    document.getElementById("money").innerHTML = `Moneys: ${sumTea.toFixed(2)}`;
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn2").style.cursor = "not-allowed";

    var img = new Image();
    var div = document.getElementById('image');
    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'tea.jpg';

    moneys = sumTea;
    document.getElementById("money").innerHTML = `Moneys: ${sumTea.toFixed(2)}`;
}

function CalculateChocoate() {
    sumChocolate = moneys - parseFloat(chocolate).toFixed(2);

    document.getElementById("money").innerHTML = `Moneys: ${sumChocolate.toFixed(2)}`;
    document.getElementById("btn3").disabled = true;
    document.getElementById("btn3").style.cursor = "not-allowed";

    var img = new Image();
    var div = document.getElementById('image');
    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'chocolate.jpg';

    moneys = sumChocolate;
    document.getElementById("money").innerHTML = `Moneys: ${sumChocolate.toFixed(2)}`;
}

function CalculateThreeInOne() {
    sumThreeInOne = moneys - parseFloat(threeInOne).toFixed(2);
    document.getElementById("money").innerHTML = `Moneys: ${sumThreeInOne.toFixed(2)}`;
    document.getElementById("btn4").disabled = true;
    document.getElementById("btn4").style.cursor = "not-allowed";

    var img = new Image();
    var div = document.getElementById('image');
    img.onload = function() {
        div.appendChild(img);
    };
    img.src = '3in1.jpg';

    moneys = sumThreeInOne;
    document.getElementById("money").innerHTML = `Moneys: ${sumThreeInOne.toFixed(2)}`;
}