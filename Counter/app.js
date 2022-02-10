// function Decrease() {
//     dec = 0;
//     for (var i = 0; i < 5; i--) {
//         dec--;

//         document.getElementById("counter").innerHTML = dec;
//     }
// }

// function Increase(selectObject) {
//     dec = 0;
//     //dec++;
//     if (dec === Increase) {
//         document.getElementById("counter").innerHTML = dec++;
//     }
//     for (var i = 0; i < 5; i++) {
//         document.getElementById("counter").innerHTML = dec;
//     }
//     for (var i = 0; i < 6; i++) {
//         document.getElementById("counter").innerHTML = dec;
//     }
// }

// function Reset() {
//     dec = 0;

//     document.getElementById("counter").innerHTML = dec;


// }

var counter = 0;
var deger = document.getElementById('deger');
var interval;

function Increase() {
    clearInterval(interval);
    interval = setInterval(function() {
        counter += 1;
        deger.innerHTML = counter;
    }, 1000);

}

function Decrease() {
    clearInterval(interval);
    interval = setInterval(function() {
        counter--;
        deger.innerHTML = counter;
    }, 1000);

}

function Reset() {
    counter = 0;

}