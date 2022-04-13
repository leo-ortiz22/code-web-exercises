function getOddNumber(max) {
    var input = prompt("Input odd number less than " + max);

    var isInputInvalid = true;

    while (isInputInvalid){
        if (Number((input) % 2 !== 0 && Number(input) <= max)) break;


        input = prompt("Input odd number less than " + max);
    }
    return input;
}
//getOddNumber(5);

function outputOddNumbers(max){

    var userInput = getOddNumber(max);
    console.log("number to skip is:" + userInput);

    for (var i = 1; i < max; i +=2) {

        if (i === userInput) {
            console.log("Yikes! Skipping number: " + userInput);
            continue;
        }
        console.log("Here is an odd Number: " + 1)
    }
}
