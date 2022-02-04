let months = prompt("May, June, July, August, September or October").toUpperCase();

let nights = prompt("Enter nights [0...200]");

document.writeln(months.toUpperCase() + " - " + nights);

let studioPrice = 50.00;
let apartmentPrice = 65.00;
let studioRent = 0.00;
let apartmentRent = 0.00;

switch (months) {
    case "May".toUpperCase():
    case "October".toUpperCase():

        studioPrice = 50.00;
        apartmentPrice = 65.00;

        studioRent = studioPrice * nights;
        apartmentRent = apartmentPrice * nights;

        if (nights > 14) {
            studioRent *= 0.70;
            apartmentRent *= 0.90;
        } else if (nights > 7) {
            studioRent *= 0.95;
        }
        break;


    case "June".toUpperCase():
    case "September".toUpperCase():

        studioPrice = 75.20;
        apartmentPrice = 68.70;

        studioRent = studioPrice * nights;
        apartmentRent = apartmentPrice * nights;

        if (nights > 14) {
            studioRent *= 0.80;
            apartmentRent *= 0.90;
        }
        break;

    case "July".toUpperCase():
    case "August".toUpperCase():

        studioPrice = 76.00;
        apartmentPrice = 77.00;

        studioRent = studioPrice * nights;
        apartmentRent = apartmentPrice * nights;

        if (nights > 14) {
            apartmentRent *= 0.90;
        }
        break;
}
let studiInfo = "Studio: " +
    studioRent.toFixed(2) + " lv."

let apartmentInfo = "Apartment: " +
    apartmentRent.toFixed(2) + " lv."

document.write("<br>" + apartmentInfo + "<br>" + studiInfo);