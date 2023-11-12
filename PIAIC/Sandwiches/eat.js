// Sandwiches: Defining the order_sandwich function to print a summary of the sandwich
// Define the order_sandwich function
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please choose some items.");
    }
    else {
        console.log("Items:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- ".concat(item));
        }
        console.log("Enjoy your sandwich!");
    }
    console.log("----------------------");
}
// Call the order_sandwich function with different numbers of arguments
order_sandwich('Turkey', 'Swiss Cheese', 'Lettuce', 'Tomato');
order_sandwich('Ham', 'Cheddar Cheese');
order_sandwich(); // Empty sandwich order
