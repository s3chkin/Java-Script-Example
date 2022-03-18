var a = document.getElementsByTagName("value");

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


function result() {
    let inputDays = Number(document.getElementById("days").value);
    let inputMonths = Number(document.getElementById("months").value);
    let inputYear = Number(document.getElementById("years").value);

    document.getElementById("result").innerHTML = `През тази ${thisYear} година ще станете на: ${thisYear - inputYear} години.`;

}