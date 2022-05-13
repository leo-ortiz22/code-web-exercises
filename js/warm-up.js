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

// {
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
//
//     let classes = [
//     {class: "6th grade history", students: 18},
//     {class: "7th grade history", students: 20},
//     {class: "8th grade history", students: 22}
// ];}

// Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.

// function calculateTotalStudents(classes) {
// return classes
// }
// Bonus: instead of the total students, return the highest number of students in any class

// Write a function called convertToObject that takes in a string that is the name of a class, and a number that is the number of students, and returns an object with the properties `class` and `students`

//convertToObject("Intro to Programming", 20) returns {class: "Intro to Programming", students: 20} 
function convertToProject() {
    
}
var neighborhood1 ={
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 6},
        {name: "HS3", rating: 8}
    ]
}

var neighborhood2 ={
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 8},
        {name: "HS3", rating: 8}
    ]
}

var neighborhood3 ={
    neighborhood: "Ginormous Ego Estates",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 9},
        {name: "MS2", rating: 9},
        {name: "HS3", rating: 9}
    ]
}

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.