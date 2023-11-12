// Define the array of people to invite
let guests: string[] = [
    "Damon Salvatore", 
    "Hera Einstein", 
    "Nelson Mandela", 
];

// Print the number of people invited to dinner
console.log(`Number of People Invited to Dinner: ${guests.length}`);

// Print the original invitation messages
console.log("\nOriginal Dinner Invitation Messages:");

for (let guest of guests) {
    console.log(`Dear ${guest},\nYou are invited to dinner. It would be an honor to have you join us.`);
}

// Inform about the bigger dinner table
console.log("\nGood news! We found a bigger dinner table.");

// Add three more guests
let newGuests: string[] = ["lariette lawrence", "Asrahan Keres", "Amelia Zachary"];

// Add one new guest to the beginning of the array
guests.unshift(newGuests[0]);

// Add one new guest to the middle of the array
guests.splice(Math.floor(guests.length / 2), 0, newGuests[1]);

// Use append() to add one new guest to the end of the array
guests.push("Amelia Zachary");

// Print a new set of invitation messages
console.log("\nAdditional Dinner Invitation Messages:");

for (let guest of guests) {
    console.log(`Dear ${guest},\nYou are invited to dinner. It would be an honor to have you join us.`);
}

// Inform that only two people can be invited for dinner
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");

// Remove guests until only two names remain in the list
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print a message to each of the two people still on the list
console.log("\nInvitation Messages for the Two Remaining Guests:");

for (let guest of guests) {
    console.log(`Dear ${guest},\nYou are still invited to dinner. We look forward to having you join us.`);
}

// Remove the last two names from the list to make it empty
guests.pop();
guests.pop();

// Print the list to make sure it's empty
console.log("\nFinal Guest List:", guests);
