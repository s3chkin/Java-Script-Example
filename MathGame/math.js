var num1 = parseInt(Math.floor(Math.random() * 20));
var num2 = parseInt(Math.floor(Math.random() * 20));
document.getElementById("num1").innerHTML = parseInt(num1);
document.getElementById("num2").innerHTML = parseInt(num2);
var result = num1 + num2;


// document.getElementById("demo5").innerHTML = result;

let guess = document.getElementById('txtArea').value;
guess = Number(guess);
// document.getElementById("demo4").innerHTML = guess;


function Check() {
    let guess = document.getElementById("txtArea").value;
    guess = Number(guess);

    if (guess === result) {
        document.getElementById("txtArea").style.border = "thick solid lightgreen";
        var millisecondsToWait = 1000;
        setTimeout(function() {
            window.location.reload();

        }, millisecondsToWait);
    } else {
        document.getElementById("txtArea").style.border = "thick solid red";

        setTimeout(function() {
            // document.getElementById("txtArea").innerHTML = num1 + num2;
            window.location.reload();
            // alert('Sorry. Incorrect. The correct answer was ' + result + '.')

        }, 600);
    }

}