// Sandwiches: Defining the order_sandwich function to print a summary of the sandwich

// Define the order_sandwich function
function order_sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please choose some items.");
    } else {
        console.log("Items:");
        for (let item of items) {
            console.log(`- ${item}`);
        }
        console.log("Enjoy your sandwich!");
    }
    console.log("----------------------");
}

// Call the order_sandwich function with different numbers of arguments
order_sandwich('Turkey', 'Swiss Cheese', 'Lettuce', 'Tomato');
order_sandwich('Ham', 'Cheddar Cheese');
order_sandwich(); // Empty sandwich order
