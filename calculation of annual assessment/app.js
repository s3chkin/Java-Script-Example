function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

function yearCountEvaluation() {
    prompt("Брой оценки: ");
}

function lesson() {
    // let lesson2 = prompt("Име на предмет: ");
    document.getElementById("result1").innerHTML = prompt("Име на предмет: ");
}