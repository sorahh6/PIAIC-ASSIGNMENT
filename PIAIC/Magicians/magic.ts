// Magicians: Defining the show_magicians function to print magician names

// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Create an array of magician names
const magicianNames: string[] = ['Ian', 'David', 'Serah', 'Vivienne'];

// Call the show_magicians function with the array of magician names
show_magicians(magicianNames);
