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

// ============= \\

let tv = 450.00;
let radio = 100.20;
let microfon = 25.00;


let moneys2 = 0.00;


document.getElementById("myMoneys").innerHTML = moneys + " лева";

function buy() {
    moneys2 = moneys - apple;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
}

function buy2() {
    moneys2 = moneys - orange;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
}

function buy3() {
    moneys2 = moneys - carrot;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
}

function buy4() {
    moneys2 = moneys - egg;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
}

function buy5() {
    moneys2 = moneys - oil;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
}

function buy6() {
    moneys2 = moneys - wafer;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
}

function buy7() {
    moneys2 = moneys - ruffles;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
}

function buy8() {
    moneys2 = moneys - croissant;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
}

function buy9() {
    moneys2 = moneys - baklava;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
}

function buy10() {
    moneys2 = moneys - dessert;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
}

function sell1() {
    moneys2 = moneys + tv;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
    document.getElementById("prdct1").style.display = "none";
}

function sell2() {
    moneys2 = moneys + radio;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
    document.getElementById("prdct2").style.display = "none";

}

function sell3() {
    moneys2 = moneys + microfon;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
    document.getElementById("prdct3").style.display = "none";

}

function productsForSell() {
    document.getElementById("myProducts-z").style.display = "block";
    document.getElementById("productsContainer").style.display = "none";
    document.getElementById("productsContainer2").style.display = "block";
    document.getElementById("productsForBuying").style.display = "none";
}

function productsForBuying() {
    document.getElementById("myProducts-z").style.display = "none";
    document.getElementById("productsContainer").style.display = "block";
    document.getElementById("productsContainer2").style.display = "none";
    document.getElementById("productsForBuying").style.display = "block";
}