var counter = 0;


function Increase() {

    document.getElementById("counter").innerHTML = counter += 1;

}

function Decrease() {
    document.getElementById("counter").innerHTML = counter -= 1;
}

function Reset() {
    location.reload();

}