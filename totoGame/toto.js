var a = prompt("Enter Number [1...6]");



document.getElementById("demo").innerHTML =
    `Your numbers: ${a}`;


function random() {
    var num = 3;



    var rndm = Math.floor(Math.random() * 6) + 1;
    document.getElementById("demo2").innerHTML = ` Random num: ${rndm}`;


    if (a == rndm) {
        document.getElementById("demo3").innerHTML = "Winn!";
    }
}