const d = new Date();
let days = d.getDate();
let month = d.getMonth() + 1;
let year = d.getFullYear();
let seconds = d.getSeconds();
let minutes = d.getMinutes();
let hours = d.getHours();


document.getElementById("date").innerHTML = days + "." + month + "." + year;
document.getElementById("seconds").innerHTML = seconds;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("hours").innerHTML = hours;

var day;
var date = new Date();
switch (date.getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;

}

document.getElementById('days').innerHTML = day