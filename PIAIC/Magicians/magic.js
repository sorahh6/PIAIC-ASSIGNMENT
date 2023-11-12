// Magicians: Defining the show_magicians function to print magician names
// Define the show_magicians function
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Create an array of magician names
var magicianNames = ['Ian', 'David', 'Serah', 'Vivienne'];
// Call the show_magicians function with the array of magician names
show_magicians(magicianNames);
