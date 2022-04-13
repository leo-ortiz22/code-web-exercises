function getOddNumber(max) {
    var input = prompt("Input odd number less than " + max);

    var isInputInvalid = true;

    while (isInputInvalid){
        if ((parseInt(input) % 2 !== 0 && parseInt(input) <= max)) break;


        //input = prompt("Input odd number less than " + max);
    }
    return parseInt(input);
}
//getOddNumber(5);

function outputOddNumbers(max){

    var userInput = getOddNumber(max);
    console.log("number to skip is:" + userInput);

    for (var i = 1; i < max; i +=2) {

        if (i === userInput) {
            console.log("Yikes! Skipping number: " + userInput)
            continue;
        }
        console.log("Here is an odd Number: " + 1)
    }

}

outputOddNumbers(50)
// //
// //
// function getOddNumber(max) {
//     var input = prompt("Input odd number less than " + max);
//
//     var isInputInvalid = true;
//
//     while (isInputInvalid) {
//         // if its not valid, so not odd or over the max value
//         if ((parseInt(input) % 2 !== 0 && parseInt(input) <= max))  break;
//
//         // it will ask the prompt again. and it will keep doing this until its correct.
//         input = prompt("Input odd number less than " + max);
//
//     }
//     return parseInt(input);
// }
//
// // getOddNumber(5);
//
// function outputOddNumbers(max) {
//
//     var userInput = getOddNumber(max); // calling the odd number function we just made that handles the user input.
//
//     // Add number to skip
//     console.log("Number to skip is: " + userInput);
//
//
//     // += 2 stays on odd numbers.
//     for (var i = 1; i < max; i += 2) {
//
//         // ability to skip a number
//
//         // print that we skipped the number
//         // output the odd numbers
//
//         if(i === userInput) {
//             console.log("Yikes! Skipping number: " + userInput)
//             continue;
//         }
//
//         console.log("Here is an odd number: " + i);
//
//     }
//
//     // Here is an odd number: 1
//     // Yikes! Skipping number: 27
// }
//
// outputOddNumbers(50)
