function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}


function yearCountEvaluation() {
    let sum = 0;
    let countEvaluation = prompt("Брой оценки: "); //2
    for (var i = 0; i < countEvaluation; i++) {
        let evaluations = prompt("Напишете си оценките! ");
        sum += parseFloat(evaluations);
    }
    let reslt = (parseFloat(sum) / countEvaluation).toFixed(2);
    if (reslt >= 5.50) {
        document.getElementById("result2").innerHTML = `Отличен ${reslt}`;
    } else if (reslt >= 4.50) {
        document.getElementById("result2").innerHTML = `Много добър ${reslt}`;
    } else if (reslt >= 3.50) {
        document.getElementById("result2").innerHTML = `Добър ${reslt}`;
    } else if (reslt == 3) {
        document.getElementById("result2").innerHTML = `Среден ${reslt}`;
    } else if (reslt < 3) {
        document.getElementById("result2").innerHTML = `Слаб ${reslt}`;
    } else {
        document.getElementById("result2").innerHTML = `Грешка!`;
    }

}

function totalEvaluation() {
    let sum = 0;
    let countEvaluation = prompt("Брой оценки: "); //2
    for (var i = 0; i < countEvaluation; i++) {
        let evaluations = prompt("Напишете си оценките! ");
        sum += parseFloat(evaluations);
    }
    let reslt = (parseFloat(sum) / countEvaluation).toFixed(2);
    if (reslt >= 5.50) {
        document.getElementById("result1").innerHTML = `Отличен ${reslt}`;
    } else if (reslt >= 4.50) {
        document.getElementById("result1").innerHTML = `Много добър ${reslt}`;
    } else if (reslt >= 3.50) {
        document.getElementById("result1").innerHTML = `Добър ${reslt}`;
    } else if (reslt == 3) {
        document.getElementById("result1").innerHTML = `Среден ${reslt}`;
    } else if (reslt < 3) {
        document.getElementById("result1").innerHTML = `Слаб ${reslt}`;
    } else {
        document.getElementById("result1").innerHTML = `Грешка!`;
    }

}