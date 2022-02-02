let PriceInKgOfVegetable = prompt("Enter price for vegetables: ");
var kilogramsOfFruits = prompt("How many pounds you want: ");
let PriceInKgOfFruits = prompt("Enter price for fruits: ");
var kilogramsOfVeg = prompt("How many pounds you want: ");

var sum1 = PriceInKgOfVegetable * kilogramsOfVeg;
var sum2 = PriceInKgOfFruits * kilogramsOfFruits;

var sum3 = parseInt(sum1) + parseInt(sum2);

var result = sum3 / 1.94;

document.write(result);