// Great Magicians: Modifying magician names with make_great function and displaying the result

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

// Call make_great to modify the array of magician names
const greatMagicians = make_great(magicianNames);

// Call show_magicians to see the modified list
show_magicians(greatMagicians);
