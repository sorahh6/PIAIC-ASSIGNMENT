"use strict";
let personName = "Anastasia";
// Print in lowercase
let lowercaseName = personName.toLowerCase();
let myUniqueText = "Hello World";
let lowercaseString = myUniqueText.toLowerCase();
console.log(lowercaseString); // Output: hello world
console.log(personName.toLowerCase());
// Print in uppercase
let someOtherText = "Hello World";
let uppercaseString = someOtherText.toUpperCase();
console.log(uppercaseString); // Output: HELLO WORLD
console.log(personName.toUpperCase());
// Print in titlecase
function toTitleCase(input) {
    return input.replace(/\w\S*/g, (word) => {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
}
let originalString = "hello world";
let titleCaseString = toTitleCase(originalString);
console.log(titleCaseString); // Output: Hello World
console.log(toTitleCase(personName));
