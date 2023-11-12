// Animals: Printing statements about animals with a common characteristic
// Store three animals with a common characteristic in an array
var animals = ['Panther', 'Leopard', 'Jaguar'];
// Use a for loop to print the name and a statement for each animal
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log("A ".concat(animal, " would make a great pet."));
}
// Print an additional sentence outside the for loop
console.log("Any of these animals would make a great pet!");
