function sendMsg() {
    var messageBox = prompt("What is your name? ");
    document.getElementById("myMsg").innerHTML = messageBox;

    const myName = setTimeout(msg, 1200);

    function msg() {
        document.getElementById("myMsg3").innerHTML = `Ou, so cute name bro! Nice to meet you, ${messageBox} !`;
        document.getElementById("myMsg4").innerHTML = myName;
    }

    var x = document.getElementById("myMsg2");
    if (x.style.display === "none") {
        // x.style.display = "block";
    } else {
        x.style.display = "block";
    }

    var x2 = document.getElementById("myMsg3");
    var x3 = document.getElementById("myMsg4");

    if (x2.style.display === "none" && x3.style.display === "none") {
        // x.style.display = "block";
    } else {
        x2.style.display = "block";
        x3.style.display = "block";
    }
}