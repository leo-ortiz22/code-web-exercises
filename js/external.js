"strict";
console.log("Hello from inline JavaScript")
alert('Welcome to my Website!');
let favortiteColor = prompt("what is your favorite color?")
     alert('My favorite color is also ' + favortiteColor);

let    littleMermaidRentalDays = Number(prompt('how many days did you rent little Mermaid ')),
    brotherBearRentalDays = Number(prompt('how many days did you rent brother bear')),
    herculesRentalDays = Number(prompt('how many days did you rent hercules'));


let rentalPricePerDayDollars= 3;

let totalPrice = (littleMermaidRentalDays + brotherBearRentalDays + herculesRentalDays) * rentalPricePerDayDollars;

alert(totalPrice);


