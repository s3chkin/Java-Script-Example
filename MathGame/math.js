var num1 = parseInt(Math.floor(Math.random() * 20));
var num2 = parseInt(Math.floor(Math.random() * 20));
document.getElementById("num1").innerHTML = parseInt(num1);
document.getElementById("num2").innerHTML = parseInt(num2);
var result = num1 + num2;


document.getElementById("demo5").innerHTML = result;

let guess = document.getElementById('txtArea').value;
guess = Number(guess);
document.getElementById("demo4").innerHTML = guess;


function Check() {
    // if (guess === result) {
    //     document.getElementById("num3").innerHTML = "true";
    // } else if (guess != result) {
    //     document.getElementById("num3").innerHTML = "false";

    // }


    let guess = document.getElementById("txtArea").value;
    guess = Number(guess);

    if (guess === result) {
        // alert('Correct');
        window.location.reload();
    } else {
        alert('Sorry. Incorrect. The correct answer was ' + result + '.')
        window.location.reload();

    }

}