// Unchanged Magicians: Using a copy of the magician names array and make_great function
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define the show_magicians function
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Define the make_great function to modify magician names
function make_great(magicians) {
    // Create a new array with modified magician names
    var greatMagicians = magicians.map(function (magician) { return "the Great ".concat(magician); });
    return greatMagicians;
}
// Create an array of magician names
var magicianNames = ['Ian', 'David', 'Serah', 'Vivienne'];
// Call make_great with a copy of the magician names array
var greatMagicians = make_great(__spreadArray([], magicianNames, true)); // Using the spread operator to create a copy
// Call show_magicians with the original and modified arrays
console.log("Original Magicians:");
show_magicians(magicianNames);
console.log("\nModified Magicians:");
show_magicians(greatMagicians);
