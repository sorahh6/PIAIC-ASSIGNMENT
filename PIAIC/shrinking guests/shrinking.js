// guestList.ts
// Created by: Your Name
// Date: November 15, 2023
// This program defines an array of people to invite to dinner, handles changes in the guest list, and prints invitation messages.
// Define the array of people to invite
var guests = [
    "Damon Salvatore",
    "Jane Gilbert",
    "Nelson Mandela",
];
// Print the original invitation messages
console.log("Original Dinner Invitation Messages:");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner. It would be an honor to have you join us."));
}
// Inform about the bigger dinner table
console.log("\nGood news! We found a bigger dinner table.");
// Add three more guests
var newGuests = ["lariette lawrence", "Asrahan Keres", "Amelia Zachary"];
// Add one new guest to the beginning of the array
guests.unshift(newGuests[0]);
// Add one new guest to the middle of the array
guests.splice(Math.floor(guests.length / 2), 0, newGuests[1]);
// Use append() to add one new guest to the end of the array
guests.push("Amelia Zachary");
// Print a new set of invitation messages
console.log("\nAdditional Dinner Invitation Messages:");
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("Dear ".concat(guest, ",\nYou are invited to dinner. It would be an honor to have you join us."));
}
// Inform that Jane can't make it and invite Hera Einstein instead
var guestWhoCantMakeIt = "Jane Gilbert";
var newGuest = "Hera Einstein";
// Print the name of the guest who can't make it
console.log("\nUnfortunately, ".concat(guestWhoCantMakeIt, " can't make it to dinner."));
// Replace the guest who can't make it with Hera Einstein
var indexOfGuestWhoCantMakeIt = guests.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guests[indexOfGuestWhoCantMakeIt] = newGuest;
}
// Print the updated invitation messages
console.log("\nUpdated Dinner Invitation Messages:");
for (var _b = 0, guests_3 = guests; _b < guests_3.length; _b++) {
    var guest = guests_3[_b];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner. It would be an honor to have you join us."));
}
// Inform that only two people can be invited for dinner
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
// Remove guests until only two names remain in the list
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print a message to each of the two people still on the list
console.log("\nInvitation Messages for the Two Remaining Guests:");
for (var _c = 0, guests_4 = guests; _c < guests_4.length; _c++) {
    var guest = guests_4[_c];
    console.log("Dear ".concat(guest, ",\nYou are still invited to dinner. We look forward to having you join us."));
}
// Remove the last two names from the list to make it empty
guests.pop();
guests.pop();
// Print the list to make sure it's empty
console.log("\nFinal Guest List:", guests);
