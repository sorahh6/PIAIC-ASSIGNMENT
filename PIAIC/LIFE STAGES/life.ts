// Stages of Life: Determining a person's stage of life based on age

// Set values for the variable age
let ageBaby = 1;
let ageToddler = 3;
let ageKid = 8;
let ageTeenager = 15;
let ageAdult = 30;
let ageElder = 70;

// Determine the person's stage of life and print a message for each case
if (ageBaby < 2) {
    console.log("The person is a baby.");
}

if (ageToddler >= 2 && ageToddler < 4) {
    console.log("The person is a toddler.");
}

if (ageKid >= 4 && ageKid < 13) {
    console.log("The person is a kid.");
}

if (ageTeenager >= 13 && ageTeenager < 20) {
    console.log("The person is a teenager.");
}

if (ageAdult >= 20 && ageAdult < 65) {
    console.log("The person is an adult.");
}

if (ageElder >= 65) {
    console.log("The person is an elder.");
}
