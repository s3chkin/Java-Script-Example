function All() {
    document.getElementById("BreakfastsWindow").style.display = "block";
    document.getElementById("LunchWindow").style.display = "block";
    document.getElementById("ShakesSection").style.display = "none";
    document.getElementById("DinnerSection").style.display = "block";
    // document.getElementById("all").style.color = "green";
    // document.getElementById("all").style.borderColor = "green";

    // document.getElementById("breakfast").style.color = "#c59d5f";
    // document.getElementById("breakfast").style.borderColor = "#c59d5f";
    // document.getElementById("breakfast").style.onmouseover().color = "#c59d5f";
}

function Breakfast() {
    document.getElementById("BreakfastsWindow").style.display = "block";
    document.getElementById("LunchWindow").style.display = "none";
    document.getElementById("ShakesSection").style.display = "none";
    document.getElementById("DinnerSection").style.display = "none";

    // document.getElementById("breakfast").style.color = "green";
    // document.getElementById("breakfast").style.borderColor = "green";
}

function Lunch() {
    document.getElementById("LunchWindow").style.display = "block";
    document.getElementById("BreakfastsWindow").style.display = "none";
    document.getElementById("ShakesSection").style.display = "none";
    document.getElementById("DinnerSection").style.display = "none";
    // document.getElementById("lunch").style.backgroundColor = "#c59d5f";
    // document.getElementById("lunch").style.color = "white";
}

function Dinner() {
    document.getElementById("DinnerSection").style.display = "block";
    document.getElementById("ShakesSection").style.display = "none";
    document.getElementById("BreakfastsWindow").style.display = "none";
    document.getElementById("LunchWindow").style.display = "none";
    // document.getElementById("dinner").style.backgroundColor = "#c59d5f";
    // document.getElementById("dinner").style.color = "white";
}


function Shakes() {
    document.getElementById("DinnerSection").style.display = "none";
    document.getElementById("BreakfastsWindow").style.display = "none";
    document.getElementById("LunchWindow").style.display = "none";
    document.getElementById("ShakesSection").style.display = "block";
    // document.getElementById("shakes").style.backgroundColor = "#c59d5f";
    // document.getElementById("shakes").style.color = "white";
}