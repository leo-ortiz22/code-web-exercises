//
// function isAString(input) {
//     if (typeof input === "string"){
//         return true;
//     }
//      else{
//             return false;
//             return typeof input === "string"
//     }
// }
//
// function canBeANumber(input){
//     return !isNaN(Number(input));
// }
// function mulitplyByTen(input){
//     if(!canBeANumber(input)){
//         return false;
//     }else{
//         return input * 10;
//     }
// }
// function randomNumber(input){
//     return (Math.random() * input);
// }
// function stringLength(string){
//     return string.toString().length;
// }
// function indexOfCharacter(input1, input2){
//     if (input2.length > 1 || input1.indexOf(input2) === -1){
//         return input1.indexOf(input2); }}
//


// Create a function, createNumObject, that takes in two numbers and returns an object with the following properties:

{
//
//     lowest: LOWEST_NUMBER_HERE,
//         highest: HIGHEST_NUMBER_HERE
// }
//
// Assume both inputs are number data types. The first argument may or may not be higher than the second argument.
// If both number inputs are equal, return the same object but with the same number value for both the lowest and highest property values.
//
//
//     EXAMPLES...
//
//
// createNumObject(1, 3) // returns...
//
// /*
//   {
//     lowest: 1,
//     highest: 3
//   }
// */
//
// createNumObject(10, 5) // returns...
//
// /*
//   {
//     lowest: 5,
//     highest: 10
//   }
// */
//
// createNumObject(7, 7) // returns...
//
// /*
//   {
//     lowest: 7,
//     highest: 7
//   }
// */
//
// function creareNumberObject(num1, num2) {
//     if (num1 === num2) {
//         return
//             lowest: num1,
//             highest: num1
//         }
//     else
//         if (num1 > num2) {
//             return {
//                 lowest: num2,
//                 highest: num1
//             }
//         else
//             {
//                 return {
//                     lowest: num1,
//                     highest: num2
//                 }
//             }
//         }
//     }}}



