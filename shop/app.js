let moneys = 24.55;
let egg = 0.35;
let wafer = 0.49;
let carrot = 0.55;
let apple = 0.80;
let croissant = 0.97;
let orange = 1.20;
let ruffles = 2.00;
let dessert = 3.80;
let oil = 7.65;
let baklava = 13.97;

// ============= \\

let tv = 18.00;
let radio = 12.20;
let microfon = 5.00;


let moneys2 = 0.00;

let productCount = 5;


document.getElementById("myMoneys").innerHTML = moneys + " лева";

function buy() {

    document.getElementById("productCount").innerHTML = productCount--;
    if (productCount == 0) {
        alert("sfdsf");
    }

    moneys2 = moneys - apple;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
    if (moneys <= 0) {
        alert("Парите свършиха! Продайте нещо!");
        document.getElementById("myMoneys").innerHTML = `0 лева`;
    }

    if (moneys < egg) {
        document.getElementById("product4").style.opacity = "0.5";
        document.getElementById("btn4").disabled = true;

    } else if (moneys < wafer) {
        document.getElementById("product6").style.opacity = "0.5";
        document.getElementById("btn6").disabled = true;
    } else if (moneys < carrot) {
        document.getElementById("product3").style.opacity = "0.5";
        document.getElementById("btn3").disabled = true;
    } else if (moneys < apple) {
        document.getElementById("product1").style.opacity = "0.5";
        document.getElementById("btn1").disabled = true;
    } else if (moneys < croissant) {
        document.getElementById("product8").style.opacity = "0.5";
        document.getElementById("btn8").disabled = true;
    } else if (moneys < orange) {
        document.getElementById("product2").style.opacity = "0.5";
        document.getElementById("btn2").disabled = true;
    } else if (moneys < ruffles) {
        document.getElementById("product7").style.opacity = "0.5";
        document.getElementById("btn7").disabled = true;
    } else if (moneys < dessert) {
        document.getElementById("product10").style.opacity = "0.5";
        document.getElementById("btn10").disabled = true;
    } else if (moneys < oil) {
        document.getElementById("product5").style.opacity = "0.5";
        document.getElementById("btn5").disabled = true;
    } else if (moneys < baklava) {
        document.getElementById("product9").style.opacity = "0.5";
        document.getElementById("btn9").disabled = true;
    }
    //  else {
    //     document.getElementById("product10").style.opacity = "1";
    //     document.getElementById("btn10").disabled = false;
    // }
}

function buy2() {
    moneys2 = moneys - orange;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
    if (moneys <= 0) {
        alert("Парите свършиха! Продайте нещо!");
        document.getElementById("myMoneys").innerHTML = `0 лева`;
    }

    if (moneys < egg) {
        document.getElementById("product4").style.opacity = "0.5";
        document.getElementById("btn4").disabled = true;

    } else if (moneys < wafer) {
        document.getElementById("product6").style.opacity = "0.5";
        document.getElementById("btn6").disabled = true;
    } else if (moneys < carrot) {
        document.getElementById("product3").style.opacity = "0.5";
        document.getElementById("btn3").disabled = true;
    } else if (moneys < apple) {
        document.getElementById("product1").style.opacity = "0.5";
        document.getElementById("btn1").disabled = true;
    } else if (moneys < croissant) {
        document.getElementById("product8").style.opacity = "0.5";
        document.getElementById("btn8").disabled = true;
    } else if (moneys < orange) {
        document.getElementById("product2").style.opacity = "0.5";
        document.getElementById("btn2").disabled = true;
    } else if (moneys < ruffles) {
        document.getElementById("product7").style.opacity = "0.5";
        document.getElementById("btn7").disabled = true;
    } else if (moneys < dessert) {
        document.getElementById("product10").style.opacity = "0.5";
        document.getElementById("btn10").disabled = true;
    } else if (moneys < oil) {
        document.getElementById("product5").style.opacity = "0.5";
        document.getElementById("btn5").disabled = true;
    } else if (moneys < baklava) {
        document.getElementById("product9").style.opacity = "0.5";
        document.getElementById("btn9").disabled = true;
    }
}

function buy3() {
    moneys2 = moneys - carrot;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
    if (moneys <= 0) {
        alert("Парите свършиха! Продайте нещо!");
        document.getElementById("myMoneys").innerHTML = `0 лева`;
    }

    if (moneys < egg) {
        document.getElementById("product4").style.opacity = "0.5";
        document.getElementById("btn4").disabled = true;

    } else if (moneys < wafer) {
        document.getElementById("product6").style.opacity = "0.5";
        document.getElementById("btn6").disabled = true;
    } else if (moneys < carrot) {
        document.getElementById("product3").style.opacity = "0.5";
        document.getElementById("btn3").disabled = true;
    } else if (moneys < apple) {
        document.getElementById("product1").style.opacity = "0.5";
        document.getElementById("btn1").disabled = true;
    } else if (moneys < croissant) {
        document.getElementById("product8").style.opacity = "0.5";
        document.getElementById("btn8").disabled = true;
    } else if (moneys < orange) {
        document.getElementById("product2").style.opacity = "0.5";
        document.getElementById("btn2").disabled = true;
    } else if (moneys < ruffles) {
        document.getElementById("product7").style.opacity = "0.5";
        document.getElementById("btn7").disabled = true;
    } else if (moneys < dessert) {
        document.getElementById("product10").style.opacity = "0.5";
        document.getElementById("btn10").disabled = true;
    } else if (moneys < oil) {
        document.getElementById("product5").style.opacity = "0.5";
        document.getElementById("btn5").disabled = true;
    } else if (moneys < baklava) {
        document.getElementById("product9").style.opacity = "0.5";
        document.getElementById("btn9").disabled = true;
    }
}

function buy4() {
    moneys2 = moneys - egg;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
    if (moneys <= 0) {
        alert("Парите свършиха! Продайте нещо!");
        document.getElementById("myMoneys").innerHTML = `0 лева`;
    }

    if (moneys < egg) {
        document.getElementById("product4").style.opacity = "0.5";
        document.getElementById("btn4").disabled = true;

    } else if (moneys < wafer) {
        document.getElementById("product6").style.opacity = "0.5";
        document.getElementById("btn6").disabled = true;
    } else if (moneys < carrot) {
        document.getElementById("product3").style.opacity = "0.5";
        document.getElementById("btn3").disabled = true;
    } else if (moneys < apple) {
        document.getElementById("product1").style.opacity = "0.5";
        document.getElementById("btn1").disabled = true;
    } else if (moneys < croissant) {
        document.getElementById("product8").style.opacity = "0.5";
        document.getElementById("btn8").disabled = true;
    } else if (moneys < orange) {
        document.getElementById("product2").style.opacity = "0.5";
        document.getElementById("btn2").disabled = true;
    } else if (moneys < ruffles) {
        document.getElementById("product7").style.opacity = "0.5";
        document.getElementById("btn7").disabled = true;
    } else if (moneys < dessert) {
        document.getElementById("product10").style.opacity = "0.5";
        document.getElementById("btn10").disabled = true;
    } else if (moneys < oil) {
        document.getElementById("product5").style.opacity = "0.5";
        document.getElementById("btn5").disabled = true;
    } else if (moneys < baklava) {
        document.getElementById("product9").style.opacity = "0.5";
        document.getElementById("btn9").disabled = true;
    }
}

function buy5() {
    moneys2 = moneys - oil;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
    if (moneys <= 0) {
        alert("Парите свършиха! Продайте нещо!");
        document.getElementById("myMoneys").innerHTML = `0 лева`;
    }

    if (moneys < egg) {
        document.getElementById("product4").style.opacity = "0.5";
        document.getElementById("btn4").disabled = true;

    } else if (moneys < wafer) {
        document.getElementById("product6").style.opacity = "0.5";
        document.getElementById("btn6").disabled = true;
    } else if (moneys < carrot) {
        document.getElementById("product3").style.opacity = "0.5";
        document.getElementById("btn3").disabled = true;
    } else if (moneys < apple) {
        document.getElementById("product1").style.opacity = "0.5";
        document.getElementById("btn1").disabled = true;
    } else if (moneys < croissant) {
        document.getElementById("product8").style.opacity = "0.5";
        document.getElementById("btn8").disabled = true;
    } else if (moneys < orange) {
        document.getElementById("product2").style.opacity = "0.5";
        document.getElementById("btn2").disabled = true;
    } else if (moneys < ruffles) {
        document.getElementById("product7").style.opacity = "0.5";
        document.getElementById("btn7").disabled = true;
    } else if (moneys < dessert) {
        document.getElementById("product10").style.opacity = "0.5";
        document.getElementById("btn10").disabled = true;
    } else if (moneys < oil) {
        document.getElementById("product5").style.opacity = "0.5";
        document.getElementById("btn5").disabled = true;
    } else if (moneys < baklava) {
        document.getElementById("product9").style.opacity = "0.5";
        document.getElementById("btn9").disabled = true;
    }
}

function buy6() {
    moneys2 = moneys - wafer;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
    if (moneys <= 0) {
        alert("Парите свършиха! Продайте нещо!");
        document.getElementById("myMoneys").innerHTML = `0 лева`;
    }
    if (moneys < egg) {
        document.getElementById("product4").style.opacity = "0.5";
        document.getElementById("btn4").disabled = true;

    } else if (moneys < wafer) {
        document.getElementById("product6").style.opacity = "0.5";
        document.getElementById("btn6").disabled = true;
    } else if (moneys < carrot) {
        document.getElementById("product3").style.opacity = "0.5";
        document.getElementById("btn3").disabled = true;
    } else if (moneys < apple) {
        document.getElementById("product1").style.opacity = "0.5";
        document.getElementById("btn1").disabled = true;
    } else if (moneys < croissant) {
        document.getElementById("product8").style.opacity = "0.5";
        document.getElementById("btn8").disabled = true;
    } else if (moneys < orange) {
        document.getElementById("product2").style.opacity = "0.5";
        document.getElementById("btn2").disabled = true;
    } else if (moneys < ruffles) {
        document.getElementById("product7").style.opacity = "0.5";
        document.getElementById("btn7").disabled = true;
    } else if (moneys < dessert) {
        document.getElementById("product10").style.opacity = "0.5";
        document.getElementById("btn10").disabled = true;
    } else if (moneys < oil) {
        document.getElementById("product5").style.opacity = "0.5";
        document.getElementById("btn5").disabled = true;
    } else if (moneys < baklava) {
        document.getElementById("product9").style.opacity = "0.5";
        document.getElementById("btn9").disabled = true;
    }
}

function buy7() {
    moneys2 = moneys - ruffles;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
    if (moneys <= 0) {
        alert("Парите свършиха! Продайте нещо!");
        document.getElementById("myMoneys").innerHTML = `0 лева`;
    }
    if (moneys < egg) {
        document.getElementById("product4").style.opacity = "0.5";
        document.getElementById("btn4").disabled = true;

    } else if (moneys < wafer) {
        document.getElementById("product6").style.opacity = "0.5";
        document.getElementById("btn6").disabled = true;
    } else if (moneys < carrot) {
        document.getElementById("product3").style.opacity = "0.5";
        document.getElementById("btn3").disabled = true;
    } else if (moneys < apple) {
        document.getElementById("product1").style.opacity = "0.5";
        document.getElementById("btn1").disabled = true;
    } else if (moneys < croissant) {
        document.getElementById("product8").style.opacity = "0.5";
        document.getElementById("btn8").disabled = true;
    } else if (moneys < orange) {
        document.getElementById("product2").style.opacity = "0.5";
        document.getElementById("btn2").disabled = true;
    } else if (moneys < ruffles) {
        document.getElementById("product7").style.opacity = "0.5";
        document.getElementById("btn7").disabled = true;
    } else if (moneys < dessert) {
        document.getElementById("product10").style.opacity = "0.5";
        document.getElementById("btn10").disabled = true;
    } else if (moneys < oil) {
        document.getElementById("product5").style.opacity = "0.5";
        document.getElementById("btn5").disabled = true;
    } else if (moneys < baklava) {
        document.getElementById("product9").style.opacity = "0.5";
        document.getElementById("btn9").disabled = true;
    }
}

function buy8() {
    moneys2 = moneys - croissant;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
    if (moneys <= 0) {
        alert("Парите свършиха! Продайте нещо!");
        document.getElementById("myMoneys").innerHTML = `0 лева`;
    }
    if (moneys < egg) {
        document.getElementById("product4").style.opacity = "0.5";
        document.getElementById("btn4").disabled = true;

    } else if (moneys < wafer) {
        document.getElementById("product6").style.opacity = "0.5";
        document.getElementById("btn6").disabled = true;
    } else if (moneys < carrot) {
        document.getElementById("product3").style.opacity = "0.5";
        document.getElementById("btn3").disabled = true;
    } else if (moneys < apple) {
        document.getElementById("product1").style.opacity = "0.5";
        document.getElementById("btn1").disabled = true;
    } else if (moneys < croissant) {
        document.getElementById("product8").style.opacity = "0.5";
        document.getElementById("btn8").disabled = true;
    } else if (moneys < orange) {
        document.getElementById("product2").style.opacity = "0.5";
        document.getElementById("btn2").disabled = true;
    } else if (moneys < ruffles) {
        document.getElementById("product7").style.opacity = "0.5";
        document.getElementById("btn7").disabled = true;
    } else if (moneys < dessert) {
        document.getElementById("product10").style.opacity = "0.5";
        document.getElementById("btn10").disabled = true;
    } else if (moneys < oil) {
        document.getElementById("product5").style.opacity = "0.5";
        document.getElementById("btn5").disabled = true;
    } else if (moneys < baklava) {
        document.getElementById("product9").style.opacity = "0.5";
        document.getElementById("btn9").disabled = true;
    }
}

function buy9() {
    moneys2 = moneys - baklava;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
    if (moneys <= 0) {
        alert("Парите свършиха! Продайте нещо!");
        document.getElementById("myMoneys").innerHTML = `0 лева`;
    }
    if (moneys < egg) {
        document.getElementById("product4").style.opacity = "0.5";
        document.getElementById("btn4").disabled = true;

    } else if (moneys < wafer) {
        document.getElementById("product6").style.opacity = "0.5";
        document.getElementById("btn6").disabled = true;
    } else if (moneys < carrot) {
        document.getElementById("product3").style.opacity = "0.5";
        document.getElementById("btn3").disabled = true;
    } else if (moneys < apple) {
        document.getElementById("product1").style.opacity = "0.5";
        document.getElementById("btn1").disabled = true;
    } else if (moneys < croissant) {
        document.getElementById("product8").style.opacity = "0.5";
        document.getElementById("btn8").disabled = true;
    } else if (moneys < orange) {
        document.getElementById("product2").style.opacity = "0.5";
        document.getElementById("btn2").disabled = true;
    } else if (moneys < ruffles) {
        document.getElementById("product7").style.opacity = "0.5";
        document.getElementById("btn7").disabled = true;
    } else if (moneys < dessert) {
        document.getElementById("product10").style.opacity = "0.5";
        document.getElementById("btn10").disabled = true;
    } else if (moneys < oil) {
        document.getElementById("product5").style.opacity = "0.5";
        document.getElementById("btn5").disabled = true;
    } else if (moneys < baklava) {
        document.getElementById("product9").style.opacity = "0.5";
        document.getElementById("btn9").disabled = true;
    }
}

function buy10() {
    moneys2 = moneys - dessert;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
    if (moneys <= 0) {
        alert("Парите свършиха! Продайте нещо!");
        document.getElementById("myMoneys").innerHTML = `0 лева`;
    }
    if (moneys < egg) {
        document.getElementById("product4").style.opacity = "0.5";
        document.getElementById("btn4").disabled = true;

    } else if (moneys < wafer) {
        document.getElementById("product6").style.opacity = "0.5";
        document.getElementById("btn6").disabled = true;
    } else if (moneys < carrot) {
        document.getElementById("product3").style.opacity = "0.5";
        document.getElementById("btn3").disabled = true;
    } else if (moneys < apple) {
        document.getElementById("product1").style.opacity = "0.5";
        document.getElementById("btn1").disabled = true;
    } else if (moneys < croissant) {
        document.getElementById("product8").style.opacity = "0.5";
        document.getElementById("btn8").disabled = true;
    } else if (moneys < orange) {
        document.getElementById("product2").style.opacity = "0.5";
        document.getElementById("btn2").disabled = true;
    } else if (moneys < ruffles) {
        document.getElementById("product7").style.opacity = "0.5";
        document.getElementById("btn7").disabled = true;
    } else if (moneys < dessert) {
        document.getElementById("product10").style.opacity = "0.5";
        document.getElementById("btn10").disabled = true;
    } else if (moneys < oil) {
        document.getElementById("product5").style.opacity = "0.5";
        document.getElementById("btn5").disabled = true;
    } else if (moneys < baklava) {
        document.getElementById("product9").style.opacity = "0.5";
        document.getElementById("btn9").disabled = true;
    }
}

function sell1() {
    moneys2 = moneys + tv;
    moneys = moneys2;
    document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
    document.getElementById("prdct1").style.display = "none";

    // setTimeout(function() {
    //     document.getElementById("myMoneys").innerHTML = `${moneys.toFixed(2)} лева`;
    //     document.getElementById("prdct1").style.display = "none";
    // }, 1000);


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