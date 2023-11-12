// Cars: Defining the create_car function to store information about a car in an object
// Define the create_car function
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Assign additional options to the car object
    options.forEach(function (option) {
        var key = Object.keys(option)[0];
        car[key] = option[key];
    });
    return car;
}
// Call the create_car function with required information and additional options
var myCar = create_car('LEXUS', 'LX600 Ultra Luxury', { color: 'Titanium' }, { features: ['Night Vision', '360-Degree Camera System'] });
// Print the car object
console.log("Car Information:");
console.log(myCar);
