var available = 500;

function Withdraw() {
    var sum = prompt("Enter a withdrawal amount:");
    document.getElementById("demo1").innerHTML = `You have:  $ ${available}`;
    document.getElementById("demo2").innerHTML = `You want to withdraw: $ ${sum}`;
    document.getElementById("demo3").innerHTML = `After the transaction: $ ${available-sum}`;

    if (sum > available) {

        document.getElementById("demo4").innerHTML = `Error! Insufficient balance! You have $ ${available}`;

    }


}