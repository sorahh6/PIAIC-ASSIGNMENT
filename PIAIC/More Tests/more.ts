// This program includes additional conditional tests.

// Test 11: Equality and inequality with strings
let fruit3 = 'banana';
let fruit4 = 'banana';
console.log("Is fruit3 == fruit4? I predict True.");
console.log(fruit3 == fruit4); // This should be true

let color1 = 'blue';
let color2 = 'red';
console.log("Is color1 != color2? I predict True.");
console.log(color1 != color2); // This should be true

// Test 12: Lower case function
let language3 = 'JavaScript';
let language4 = 'javascript';
console.log("Is language3.toLowerCase() == language4.toLowerCase()? I predict True.");
console.log(language3.toLowerCase() == language4.toLowerCase()); // This should be true

// Test 13: Numerical tests
let number3 = 42;
let number4 = 24;
console.log("Is number3 > number4? I predict True.");
console.log(number3 > number4); // This should be true

console.log("Is number3 <= number4? I predict False.");
console.log(number3 <= number4); // This should be false

// Test 14: Logical AND and OR operators
let sunnyDay = true;
let warmTemperature = true;
console.log("Is sunnyDay && warmTemperature? I predict True.");
console.log(sunnyDay && warmTemperature); // This should be true

let rainyDay = false;
let coldTemperature = true;
console.log("Is rainyDay || coldTemperature? I predict True.");
console.log(rainyDay || coldTemperature); // This should be true

// Test 15: Test whether an item is in an array
let fruits = ['apple', 'orange', 'banana', 'grape'];
let selectedFruit = 'banana';
console.log(`Is ${selectedFruit} in the fruits array? I predict True.`);
console.log(fruits.includes(selectedFruit)); // This should be true

// Test 16: Test whether an item is not in an array
let vegetables = ['carrot', 'broccoli', 'spinach'];
let selectedVegetable = 'cucumber';
console.log(`Is ${selectedVegetable} not in the vegetables array? I predict True.`);
console.log(!vegetables.includes(selectedVegetable)); // This should be true
