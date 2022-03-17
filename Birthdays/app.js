var a = document.getElementsByTagName("value");

// let inputYear = document.getElementById('years').value;
// inputYear = Number(inputYear);


// document.getElementById("result").innerHTML = a;
function calculation() {
    document.getElementById("time").style.display = "block";
}
const d = new Date();
thisDate = d.getDate();
thisMonth = d.getMonth();
thisYear = d.getFullYear();
document.getElementById("demo1").innerHTML = thisDate + ".";
document.getElementById("demo2").innerHTML = thisMonth + 1 + ".";
document.getElementById("demo3").innerHTML = thisYear;

// document.getElementById("result").innerHTML = `През тази ${thisYear} година ще станете на: ${thisYear - 2004} години.`;
// document.getElementById("result").innerHTML = 12 - thisMonth;
// document.getElementById("result").innerHTML = 2004 - thisYear;


window.onload = substract();

function calculate() {
    let inputYear = Number(document.getElementById('firstNumber').value);

    // document.getElementById("result").innerHTML = `През тази ${thisYear} година ще станете на: ${thisYear - inputYear} години.`;
    document.getElementById("result").innerHTML = `През тази ${inputYear}`;

}