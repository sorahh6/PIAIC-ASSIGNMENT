// Great Magicians: Modifying magician names with make_great function and displaying the result
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
// Call make_great to modify the array of magician names
var greatMagicians = make_great(magicianNames);
// Call show_magicians to see the modified list
show_magicians(greatMagicians);
