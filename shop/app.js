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

let productCount1 = 4;
let productCount2 = 4;
let productCount3 = 4;
let productCount4 = 4;
let productCount5 = 4;
let productCount6 = 4;
let productCount7 = 4;
let productCount8 = 4;
let productCount9 = 4;
let productCount10 = 4;


document.getElementById("myMoneys").innerHTML = moneys + " лева";

function buy() {
    document.getElementById("celledProducts1").style.display = "block";

    document.getElementById("productCount").innerHTML = productCount1--;
    if (productCount1 == -2) {
        alert("Продуктите свършиха!");
        document.getElementById("productCount").innerHTML = "0";
        document.getElementById("product1").style.opacity = "0.5";
        document.getElementById("btn1").disabled = true;

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
    document.getElementById("celledProducts2").style.display = "block";


    document.getElementById("productCount2").innerHTML = productCount2--;
    if (productCount2 == -2) {
        alert("Продуктите свършиха!");
        document.getElementById("productCount2").innerHTML = "0";
        document.getElementById("product2").style.opacity = "0.5";
        document.getElementById("btn2").disabled = true;

    }

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
    document.getElementById("celledProducts3").style.display = "block";

    document.getElementById("productCount3").innerHTML = productCount3--;
    if (productCount3 == -2) {
        alert("Продуктите свършиха!");
        document.getElementById("productCount3").innerHTML = "0";
        document.getElementById("product3").style.opacity = "0.5";
        document.getElementById("btn3").disabled = true;

    }

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
    document.getElementById("celledProducts4").style.display = "block";

    document.getElementById("productCount4").innerHTML = productCount4--;
    if (productCount4 == -2) {
        alert("Продуктите свършиха!");
        document.getElementById("productCount4").innerHTML = "0";
        document.getElementById("product4").style.opacity = "0.5";
        document.getElementById("btn4").disabled = true;

    }

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
    document.getElementById("celledProducts5").style.display = "block";

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

    document.getElementById("productCount5").innerHTML = productCount5--;
    if (productCount5 == -2) {
        alert("Продуктите свършиха!");
        document.getElementById("productCount5").innerHTML = "0";
        document.getElementById("product5").style.opacity = "0.5";
        document.getElementById("btn5").disabled = true;

    }
}

function buy6() {

    document.getElementById("celledProducts6").style.display = "block";

    document.getElementById("productCount6").innerHTML = productCount6--;
    if (productCount6 == -2) {
        alert("Продуктите свършиха!");
        document.getElementById("productCount6").innerHTML = "0";
        document.getElementById("product6").style.opacity = "0.5";
        document.getElementById("btn6").disabled = true;

    }

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
    document.getElementById("celledProducts7").style.display = "block";

    document.getElementById("productCount7").innerHTML = productCount7--;
    if (productCount7 == -2) {
        alert("Продуктите свършиха!");
        document.getElementById("productCount7").innerHTML = "0";
        document.getElementById("product7").style.opacity = "0.5";
        document.getElementById("btn7").disabled = true;

    }

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
    document.getElementById("celledProducts8").style.display = "block";

    document.getElementById("productCount8").innerHTML = productCount8--;
    if (productCount8 == -2) {
        alert("Продуктите свършиха!");
        document.getElementById("productCount8").innerHTML = "0";
        document.getElementById("product8").style.opacity = "0.5";
        document.getElementById("btn8").disabled = true;

    }

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

    document.getElementById("celledProducts9").style.display = "block";

    document.getElementById("productCount9").innerHTML = productCount9--;
    if (productCount9 == -2) {
        alert("Продуктите свършиха!");
        document.getElementById("productCount9").innerHTML = "0";
        document.getElementById("product9").style.opacity = "0.5";
        document.getElementById("btn9").disabled = true;

    }

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

    document.getElementById("celledProducts10").style.display = "block";

    document.getElementById("productCount10").innerHTML = productCount10--;
    if (productCount10 == -2) {
        alert("Продуктите свършиха!");
        document.getElementById("productCount10").innerHTML = "0";
        document.getElementById("product10").style.opacity = "0.5";
        document.getElementById("btn10").disabled = true;

    }

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