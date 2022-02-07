var evaluation = prompt("Enter your evaluation: ");
document.getElementById("demo").innerHTML = `Your evaluation: ${evaluation}`;
if (evaluation >= 5.50) {
    if (evaluation < 6) {
        document.writeln("Excellent!");

    }
    document.writeln("Excellent!");
} else if (evaluation >= 4.50) {
    document.writeln("Very good!");
} else if (evaluation >= 3.50) {
    document.writeln("Good!");
} else if (evaluation >= 3) {
    document.writeln("Middle!");

} else if (evaluation >= 2) {
    document.writeln("Weak!");
} else if (evaluation < 2) {
    document.writeln("Invalid evaluation!");
} else if (evaluation > 6) {
    document.writeln("Invalid evaluation!");
}