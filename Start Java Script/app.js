function Button() {
    document.getElementById("demo2").innerHTML = "";
    var input = prompt("What's your name?");
    // alert(`Your name is ${input}`);
    document.getElementById("demo2").innerHTML = "Hello " + input;

}