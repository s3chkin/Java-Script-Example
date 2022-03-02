function Cart() {
    document.getElementById("pswrd").style.display = "block";
    document.getElementById("cart").style.display = "none";
}

function Password() {
    let pin = prompt("Въведете пин");
    if (pin == 1234) {
        document.getElementById("moneyWindow").innerHTML = "<img src='moneys.jpg' />";

        setTimeout(function() {
            alert("Вече сте богат!");
        }, 2000)
    }
}

function Pin() {
    document.getElementById("pin").style.backgroundColor = "white";
}

function Pin2() {
    document.getElementById("pin").style.backgroundColor = "black";
}