// Define the array of people to invite
var guests = ["Damon Salvatore", "Jane Gilbert", "Nelson Mandela"];
// Print invitation messages
console.log("Dinner Invitation Messages:");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ",\nYou are invited to dinner. It would be an honor to have you join us."));
}
