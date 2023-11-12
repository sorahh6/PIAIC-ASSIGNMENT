// Unchanged Magicians: Using a copy of the magician names array and make_great function

// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define the make_great function to modify magician names
function make_great(magicians: string[]): string[] {
    // Create a new array with modified magician names
    const greatMagicians = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}

// Create an array of magician names
const magicianNames: string[] = ['Ian', 'David', 'Serah', 'Vivienne'];

// Call make_great with a copy of the magician names array
const greatMagicians = make_great([...magicianNames]); // Using the spread operator to create a copy

// Call show_magicians with the original and modified arrays
console.log("Original Magicians:");
show_magicians(magicianNames);

console.log("\nModified Magicians:");
show_magicians(greatMagicians);
