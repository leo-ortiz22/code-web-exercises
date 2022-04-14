// function doubleNumber(start,max){
//     while(start < max){
//         console.log(start);
//         start= start * 2;
//     }
// }
// doubleNumber(2,65536)


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
function generateRandomSales() {
    return Math.floor(Math.random() * 5) + 1;
}

function calculateConeSales(totalCones) {


    do {
        var totalToSell = Math.floor(Math.random() * 5) + 1;
        var totalToSell = generateRandomSales();

        var actualSoldAmount = (totalCones >= totalToSell) ? totalToSell : totalCones;

        if (totalToSell === actualSoldAmount) {
            console.log(actualSoldAmount + "cones sold... ");
        } else {
            console.log("Cannot sell you " + totalToSell + "cones I only have " + actualSoldAmount);
        }

        totalCones -= actualSoldAmount;


    } while (totalCones > 0);
    console.log("Yay! i sold them all");}

    calculateConeSales(allCones);
