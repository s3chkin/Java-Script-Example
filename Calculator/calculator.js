var num1 = prompt("Enter value1:");
var num2 = prompt("Enter value2:");


document.getElementById("numbers").innerHTML =
    "Your numbers: " + num1 + ", " + num2;

function minus() {
    var rslt = num1 - num2;
    var y = document.getElementById("result").innerHTML =
        rslt;
}

function plus() {

    var rslt = parseInt(num1) + parseInt(num2);
    var y = document.getElementById("result").innerHTML =
        rslt;
}

function multiplication() {
    var rslt = num1 * num2;
    var y = document.getElementById("result").innerHTML =
        rslt;
}

function division() {
    var rslt = num1 / num2;
    var y = document.getElementById("result").innerHTML =
        rslt;
}