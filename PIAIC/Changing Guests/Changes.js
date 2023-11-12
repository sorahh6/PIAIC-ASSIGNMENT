// Define the array of people to invite
var guests = ["Damon Salvatore", "Jane Gilbert", "Nelson Mandela"];
// Print the original invitation messages
console.log("Original Dinner Invitation Messages:");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ",\nYou are invited to dinner. It would be an honor to have you join us."));
}
// Handle a change in the guest list
var guestWhoCantMakeIt = "Jane Gilbert";
var newGuest = "Hera Einstein";
// Print the name of the guest who can't make it
console.log("\nUnfortunately, ".concat(guestWhoCantMakeIt, " can't make it to dinner."));
// Replace the guest who can't make it with the new guest
var indexOfGuestWhoCantMakeIt = guests.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guests[indexOfGuestWhoCantMakeIt] = newGuest;
}
// Print the updated invitation messages
console.log("\nUpdated Dinner Invitation Messages:");
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner. It would be an honor to have you join us."));
}
