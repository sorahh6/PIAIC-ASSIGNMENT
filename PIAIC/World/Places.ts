// Define the array of travel destinations
let travelDestinations: string[] = [
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
console.log([...travelDestinations].sort());

// Show that the array is still in its original order
console.log("\nArray is still in its original order:");
console.log(travelDestinations);

// Print in reverse alphabetical order without changing the order of the original list
console.log("\nReverse Alphabetical Order (without modifying the original list):");
console.log([...travelDestinations].sort().reverse());

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
travelDestinations.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(travelDestinations);
