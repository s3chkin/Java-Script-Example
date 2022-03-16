var a = document.getElementsByTagName("value");
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

document.getElementById("result").innerHTML = `През тази ${thisYear} година ще станете на: ${thisYear - 2004} години.`;
// document.getElementById("result").innerHTML = 12 - thisMonth;
// document.getElementById("result").innerHTML = 2004 - thisYear;