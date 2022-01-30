let nameLetterCounter = prompt("Write your name to find out how many letters are in your name: ");
document.getElementById("nameCount").innerHTML = "Your name is " + nameLetterCounter +
    ", has " + nameLetterCounter.length + " letter! <br> Thanks for using my app!";