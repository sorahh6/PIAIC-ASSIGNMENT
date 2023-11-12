// conditionalTests.ts
// Created by: Your Name
// Date: November 15, 2023
// This program includes a series of conditional tests.
// Test 1: Equality check for numbers
var number1 = 5;
var number2 = 5;
console.log("Is number1 == number2? I predict True.");
console.log(number1 == number2);
// Test 2: Equality check for strings
var language1 = 'JavaScript';
var language2 = 'TypeScript';
console.log("Is language1 == language2? I predict False.");
console.log(language1 == language2);
// Test 3: Inequality check for booleans
var isSunnyToday = true;
var isRainingNow = false;
console.log("Is isSunnyToday != isRainingNow? I predict True.");
console.log(isSunnyToday != isRainingNow);
// Test 4: Strict equality check for strings
var fruit1 = 'apple';
var fruit2 = 'apple';
console.log("Is fruit1 === fruit2? I predict True.");
console.log(fruit1 === fruit2);
// Test 5: Strict inequality check for numbers
var age1 = 25;
var age2 = '25';
console.log("Is age1 !== age2? I predict True.");
console.log(age1 !== age2);
// Test 6: Greater than comparison for numbers
var distance1 = 100;
var distance2 = 50;
console.log("Is distance1 > distance2? I predict True.");
console.log(distance1 > distance2);
// Test 7: Less than comparison for strings
var city1 = 'New York';
var city2 = 'San Francisco';
console.log("Is city1 < city2? I predict False.");
console.log(city1 > city2);
// Test 8: Logical AND for booleans
var isMonday = true;
var isWeekend = false;
console.log("Is isMonday && isWeekend? I predict False.");
console.log(isMonday && isWeekend);
// Test 9: Logical OR for booleans
var isHoliday = true;
var isWorkingDay = true;
console.log("Is isHoliday || isWorkingDay? I predict True.");
console.log(isHoliday || isWorkingDay);
// Test 10: Combined logical condition
var isMorning = true;
var isWeekday = true;
console.log("Is (isMorning && isWeekday) || isHoliday? I predict True.");
console.log((isMorning && isWeekday) || isHoliday);
