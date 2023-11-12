// Define the array of people to invite
let guests: string[] = ["Damon Salvatore", "Jane Gilbert", "Nelson Mandela"];

// Print invitation messages
console.log("Dinner Invitation Messages:");

for (let guest of guests) {
    console.log(`Dear ${guest},\nYou are invited to dinner. It would be an honor to have you join us.`);
}
