let moneys = 24.55;
let apple = 0.80;
let orange = 1.20;
let carrot = 0.55;
let egg = 0.35;
let oil = 7.65;
let wafer = 0.49;
let ruffles = 2.00;
let croissant = 0.97;
let baklava = 13.97;
let dessert = 3.80;

let moneys2 = 0.00;


document.getElementById("myMoneys").innerHTML = moneys + " лева";

function sell() {
    moneys2 = moneys - apple;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
}

function sell2() {
    moneys2 = moneys - orange;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
}

function sell3() {
    moneys2 = moneys - carrot;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
}

function sell4() {
    moneys2 = moneys - egg;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
}

function sell5() {
    moneys2 = moneys - oil;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
}

function sell6() {
    moneys2 = moneys - wafer;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
}

function sell7() {
    moneys2 = moneys - ruffles;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
}

function sell8() {
    moneys2 = moneys - croissant;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
}

function sell9() {
    moneys2 = moneys - baklava;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
}

function sell10() {
    moneys2 = moneys - dessert;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
}