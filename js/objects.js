// Create a few beverage objects and assign values to each object for the following properties:
//
//
//     - brandName
//     - type
//     - volumeInLiters
//     - priceInCents
//     - expirationDate
//     - datesOfPreviousSips (use an array of strings)
// - isOpen
// Define your objects using both literal syntax to create all properties and values at once and also try defining empty objects and assign property values in separate statements using the dot notation.

// var soda1 = {
//     brandName: 'coke cola',
//     type: 'vanilla coke',
//     volumeInLiters: '1',
//     priceInCents: '80',
//     expirationDate: '02/22',
//     datesOfpPreviousSips: '04/22',
//     isOpen: true,
//
// }
// var soda2 = {
//     brandName: 'dr pepper',
//     type: 'cherry',
//     volumeInLiters: '1',
//     priceInCents: '75',
//     expirationDate: '02/24',
//     datesOfpPreviousSips: 'none',
//     isOpen: false,
// }
// var soda3 = {
//     brandName: 'RC',
//     type: ['cherry vanilla', 'cherry'],
//     volumeInLiters: '1',
//     priceInCents: '68',
//     expirationDate: '06/22',
//     datesOfpPreviousSips: 'none',
//     isOpen: true,
// }
//
//
//
// var beverageOptions = [soda1, soda2, soda3];
//
// console.log(beverageOptions)
//
// console.log(soda3.type)
// console.log(soda2.brandName)
// console.log(soda3.priceInCents)
// console.log(soda3.type[1]);

// -- Mini Exercise 2
//
// var users = [
//     {
//         givenName: 'Sam',
//         age: 21
//     },
//     {
//         givenName: 'Cathy',
//         age: 34
//     },
//     {
//         givenName: 'Karen',
//         age: 43
//     }
// ];

// 1. Log the names of all users in a single console log separated by spaces. // output = "Sam Cathy Karen"
// 2. Change the names of all users to "John Doe"
// 3. Increase the current age of all users by 1
//
// Can you accomplish each step using iteration?
//1.
// console.log("Sam ","Cathy ","Karen")
// var output = ' ';
// users.forEach(function(user){
//     output += user.givenName + ' '});
//
// console.log(output.trim());

//2.

//
// users.forEach(function(user) {
//     // users.givenName = 'John Doe'
//     console.log(user.givenName = 'John Doe')
//
// })
// console.log(users)
// //


//
// console.log(users)


//3.
// for (var i = 0; i < users.length; i += 1) {
//     users[i].age += 1;
// }
// console.log(users)

// users.forEach(function(user){
//     user.age +=1;
// })
// console.log(users)





    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
//      */
// var person = {
//         firstName: 'Leo',
//         lastName: 'Ortiz',
//         sayHello: function () {
//             return "Hello from " + this.firstName +' '+ this.lastName;
//         }
//     }
//
//         console.log(person.firstName);
//         console.log(person.lastName);
//         console.log(person);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
//
// console.log(person.sayHello())

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

//     var shoppers = [
//         {name: 'Cameron', amount: 180},
//         {name: 'Ryan', amount: 250},
//         {name: 'George', amount: 320}
//     ];
// for (var i = 0; i < shoppers.length; i += 1){
// var discountedAmmount = 0;
// if (shoppers[i].amount > 200){
//     discountedAmmount = shoppers[i].amount * .12;
// }
// var shopperMessage = shoppers[i].name + ' purchased ' +
//     shoppers[i].amount + ' and will get ' + discountedAmmount + ' off the final amount to pay a total of ' +
//     (shoppers[i].amount - discountedAmmount)
//
// console.log(shopperMessage)}
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


// var book = {
//     title:'The Salmon of Doubt',
//     author: {
//         firstName:'Douglas',
//         lastName:'Adams'
//     }}
//
//
//     var book1 = {
//     title:'The Sky',
//     author: {
//         firstName:'me',
//         lastName:'you'
//     }}
//
//     var book2 = {
//     title:'Lord of the rings',
//     author: {
//         firstName:'idk',
//         lastName:'nope'
//     }}
//     var book3 = {
//     title:'Purple',
//     author: {
//         firstName:'You',
//         lastName:'Who'
//     }}
//     var book4 = {
//     title:'The What',
//     author: {
//         firstName:'Him',
//         lastName:'De'
//     }
//
//
// }
// var books = [book, book1, book2, book3, book4];
// console.log(books)
//  console.log(books[1].title) // "The Salmon of Doubt"
//  console.log(books[3].author.firstName) // "Douglas"
//  console.log(books[4].author.lastName) // "Adams"

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
// books.forEach(function(book){
//     console.log('book #' + books.indexOf(book) + ' title: ' + book.title + ' by ' + book.author.firstName + ' ' + book.author.lastName)
// })
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

