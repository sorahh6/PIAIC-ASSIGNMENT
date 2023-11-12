// Large Shirts: Modifying the make_shirt function with default values

// Define the make_shirt function with default values
function make_shirt(size: string = 'Large', message: string = 'I love Adventures'): void {
    console.log(`You've ordered a ${size} shirt with the message: "${message}".`);
}

// Call the make_shirt function with different variations
make_shirt(); // Large shirt with default message
make_shirt('Medium'); // Medium shirt with default message
make_shirt('Small', 'Eagle Sight'); // Small shirt with a custom message including "Eagle Sight"
