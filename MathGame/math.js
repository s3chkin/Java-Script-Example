var num1 = parseInt(Math.floor(Math.random() * 20));
var num2 = parseInt(Math.floor(Math.random() * 20));
document.getElementById("num1").innerHTML = parseInt(num1);
document.getElementById("num2").innerHTML = parseInt(num2);
var result = num1 + num2;


// document.getElementById("demo5").innerHTML = result;

let guess = document.getElementById('txtArea').value;
guess = Number(guess);
// document.getElementById("demo4").innerHTML = guess;

var start = Date.now();
setInterval(function() {
    var delta = Date.now() - start;
    output(Math.floor(delta / 1000));
    output(new Date().toUTCString());
}, 1000);

// if (guess === result) {

//     var scor = 0;
//     scor++;
//     document.getElementById("demo4").innerHTML = ` Scor: ${scor++}`;

// }


// const startingMinutes = 1;
// let time = startingMinutes * 60;

// const countdownEl = document.querySelector("#countdown");

// setInterval(updatecountdown, 1000);

// function updatecountdown() {
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;

//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     countdownEl.innerHTML = `${minutes}:${seconds}`;
//     time--;

//     if (time === 0) {
//         clearInterval(time);
//         clearTimeout(time);

//     } else {
//         clearInterval(time);
//         clearTimeout(time);

//     }
// }

var button = $('.increment-btn');
var counter = $('.counter');

button.click(function() {
    counter.val(parseInt(counter.val()) + 1);
});



document.getElementById("demo4").innerHTML = score2;


function Check() {
    let guess = document.getElementById("txtArea").value;
    guess = Number(guess);
    if (guess === result) {

        var button = $('.increment-btn');
        var counter = $('.counter');
        counter.val(parseInt(counter.val()) + 1);
        counter++;
        if (counter === 5) {
            alert("You Win!");

            setTimeout(function() {
                window.location.reload();

            }, 300);
        }




        // var score = 0;
        // score++;
        // var score2 = document.getElementById("demo4").innerHTML = ` Score: ${score++}`;

        document.getElementById("txtArea").style.border = "thick solid lightgreen";
        var num1 = parseInt(Math.floor(Math.random() * 20));
        var num2 = parseInt(Math.floor(Math.random() * 20));
        document.getElementById("num1").innerHTML = parseInt(num1);
        document.getElementById("num2").innerHTML = parseInt(num2);
        var millisecondsToWait = 500;
        guess = null;
        setTimeout(function() {
            // result === 0;
            // window.location.reload();
            guess.location.reload();
            guess = null;
        }, millisecondsToWait);



    } else if (guess !== result) {
        document.getElementById("txtArea").style.border = "thick solid red";
        // var num1 = parseInt(Math.floor(Math.random() * 20));
        // var num2 = parseInt(Math.floor(Math.random() * 20));
        // document.getElementById("num1").innerHTML = parseInt(num1);
        // document.getElementById("num2").innerHTML = parseInt(num2);

        alert("Wrong answer!");
        setTimeout(function() {
            // document.getElementById("txtArea").innerHTML = num1 + num2;
            window.location.reload();
            // alert('Sorry. Incorrect. The correct answer was ' + result + '.')

        }, 300);
    }

}
//document.getElementById("demo4").innerHTML = score2;