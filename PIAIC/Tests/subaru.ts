// Test 1: Equality check for numbers
let number1 = 5;
let number2 = 5;
console.log("Is number1 == number2? I predict True.");
console.log(number1 == number2);

// Test 2: Equality check for strings
let language1 = 'JavaScript';
let language2 = 'TypeScript';
console.log("Is language1 == language2? I predict False.");
console.log(language1 == language2);

// Test 3: Inequality check for booleans
let isSunnyToday = true;
let isRainingNow = false;
console.log("Is isSunnyToday != isRainingNow? I predict True.");
console.log(isSunnyToday != isRainingNow);

// Test 4: Strict equality check for strings
let fruit1 = 'apple';
let fruit2 = 'apple';
console.log("Is fruit1 === fruit2? I predict True.");
console.log(fruit1 === fruit2);

// Test 5: Strict inequality check for numbers
let age1 = 25;
let age2 = '25';
console.log("Is age1 !== age2? I predict True.");
console.log(age1 !== age2);

// Test 6: Greater than comparison for numbers
let distance1 = 100;
let distance2 = 50;
console.log("Is distance1 > distance2? I predict True.");
console.log(distance1 > distance2);

// Test 7: Less than comparison for strings
let city1 = 'New York';
let city2 = 'San Francisco';
console.log("Is city1 < city2? I predict False.");
console.log(city1 > city2);

// Test 8: Logical AND for booleans
let isMonday = true;
let isWeekend = false;
console.log("Is isMonday && isWeekend? I predict False.");
console.log(isMonday && isWeekend);

// Test 9: Logical OR for booleans
let isHoliday = true;
let isWorkingDay = true;
console.log("Is isHoliday || isWorkingDay? I predict True.");
console.log(isHoliday || isWorkingDay);

// Test 10: Combined logical condition
let isMorning = true;
let isWeekday = true;
console.log("Is (isMorning && isWeekday) || isHoliday? I predict True.");
console.log((isMorning && isWeekday) || isHoliday);
