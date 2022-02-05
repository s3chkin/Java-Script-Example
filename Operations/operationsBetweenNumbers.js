var n1 = prompt("Enter first value:");
var n2 = prompt("Enter last value:");
let operation = prompt(" `+`, `-`, `*`, `/`, `%` ");


if (operation === "+") {
    var sum = parseInt(n1) + parseInt(n2);
    if (sum % 2) {
        document.writeln(`${sum} - odd`);
    } else {
        document.writeln(`${sum} - even`);
    }
} else if (operation === "-") {
    var sum = n1 - n2;
    if (sum % 2) {
        document.writeln(`${sum} - odd`);
    } else {
        document.writeln(`${sum} - even`);
    }
} else if (operation === "*") {
    var sum = n1 * n2;
    if (sum % 2) {
        document.writeln(`${sum} - odd`);
    } else {
        document.writeln(`${sum} - even`);
    }
} else if (operation === "/") {
    if (n2 === 0) {
        document.writeln("Cannot divide" + n2 + "by zero");
    } else if (n2 > 0 || n2 < 0) {
        var sum = parseInt(n1) / parseInt(n2);
    }
} else if (operation === "%") {
    if (n2 === 0) {
        document.writeln("Cannot divide" + n2 + "by zero");
    } else if (n2 > 0 || n2 < 0) {
        var sum = n1 % n2;
    }
}

document.getElementById("demo").innerHTML = n1 + " " + operation + " " + parseInt(n2) + " = " + sum;