// transport.ts
// Created by: SORAHH
// Date: November 10, 2023
// This program defines an array of favorite modes of transportation and prints statements about each item.
// Define the array of favorite modes of transportation
var favoriteTransportation = ["Private JET", "Car", "Maybach", "Helicopter", "Yachts"];
// Print statements about each item in the array
console.log("Favorite Modes of Transportation:");
for (var _i = 0, favoriteTransportation_1 = favoriteTransportation; _i < favoriteTransportation_1.length; _i++) {
    var mode = favoriteTransportation_1[_i];
    console.log("I would like to own a ".concat(mode, "."));
}
