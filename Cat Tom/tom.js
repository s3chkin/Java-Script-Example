var holidays = prompt("Enter days [0-365]");
var gameSum1 = 365 - holidays;
var gameSum2 = gameSum1 * 63 + holidays * 127;
var gameSum3 = 30000 - gameSum2;

var hours = gameSum3 / 60;
var minutes = gameSum3 % 60;

if (gameSum2 > 30000) {
    document.write("Tom sleeps well!");
    document.getElementById("demo").innerHTML = `${Math.floor(hours *= -1)} hours and ${Math.floor(minutes*= -1)} minutes more for play`;
} else {
    document.write("Tom will run away!");
    document.getElementById("demo").innerHTML = `${Math.floor(hours)} hours and ${Math.floor(minutes)} minutes less for play`;
}