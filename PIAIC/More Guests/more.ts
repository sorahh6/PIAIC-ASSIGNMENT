// Define the array of people to invite
let guests: string[] = ["Damon Salvatore", "Jane Gilbert", "Nelson Mandela"];

// Print the original invitation messages
console.log("Original Dinner Invitation Messages:");

for (let guest of guests) {
    console.log(`Dear ${guest},\nYou are invited to dinner. It would be an honor to have you join us.`);
}

// Handle a change in the guest list
let guestWhoCantMakeIt: string = "Jane Gilbert";
let newGuest: string = "Hera Einstein";

// Print the name of the guest who can't make it
console.log(`\nUnfortunately, ${guestWhoCantMakeIt} can't make it to dinner.`);

// Replace the guest who can't make it with the new guest
let indexOfGuestWhoCantMakeIt: number = guests.indexOf(guestWhoCantMakeIt);

if (indexOfGuestWhoCantMakeIt !== -1) {
    guests[indexOfGuestWhoCantMakeIt] = newGuest;
}

// Print the updated invitation messages
console.log("\nUpdated Dinner Invitation Messages:");

for (let guest of guests) {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner. It would be an honor to have you join us.`);
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
guests.push(newGuests[2]);

// Print a new set of invitation messages
console.log("\nAdditional Dinner Invitation Messages:");

for (let guest of guests) {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner. It would be an honor to have you join us.`);
}
