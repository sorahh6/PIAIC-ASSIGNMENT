// Large Shirts: Modifying the make_shirt function with default values
// Define the make_shirt function with default values
function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love Adventures'; }
    console.log("You've ordered a ".concat(size, " shirt with the message: \"").concat(message, "\"."));
}
// Call the make_shirt function with different variations
make_shirt(); // Large shirt with default message
make_shirt('Medium'); // Medium shirt with default message
make_shirt('Small', 'Eagle Sight'); // Small shirt with a custom message including "Eagle Sight"
