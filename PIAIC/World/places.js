var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define the array of travel destinations
var travelDestinations = [
    "New York",
    "Seattle",
    "California",
    "Paris",
    "Los Angeles",
    "Seoul",
    "Sydney"
];
// Print the original order
console.log("Original Order:");
console.log(travelDestinations);
// Print in alphabetical order without modifying the actual list
console.log("\nAlphabetical Order (without modifying the original list):");
console.log(__spreadArray([], travelDestinations, true).sort());
// Show that the array is still in its original order
console.log("\nArray is still in its original order:");
console.log(travelDestinations);
// Print in reverse alphabetical order without changing the order of the original list
console.log("\nReverse Alphabetical Order (without modifying the original list):");
console.log(__spreadArray([], travelDestinations, true).sort().reverse());
// Show that the array is still in its original order
console.log("\nArray is still in its original order:");
console.log(travelDestinations);
// Reverse the order of the list
travelDestinations.reverse();
console.log("\nReversed Order:");
console.log(travelDestinations);
// Reverse the order again to get back to the original order
travelDestinations.reverse();
console.log("\nBack to Original Order:");
console.log(travelDestinations);
// Sort the array in alphabetical order
travelDestinations.sort();
console.log("\nSorted in Alphabetical Order:");
console.log(travelDestinations);
// Sort to change the array to reverse alphabetical order
travelDestinations.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(travelDestinations);
