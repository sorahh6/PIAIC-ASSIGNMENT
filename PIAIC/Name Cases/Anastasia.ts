let personName: string = "Anastasia";
// Print in lowercase
let lowercaseName: string = personName.toLowerCase()
let myUniqueText: string = "Hello World";
let lowercaseString: string = myUniqueText.toLowerCase();

console.log(lowercaseString); // Output: hello world
console.log(personName.toLowerCase())
// Print in uppercase
let someOtherText: string = "Hello World";
let uppercaseString: string = someOtherText.toUpperCase();

console.log(uppercaseString); // Output: HELLO WORLD
console.log(personName.toUpperCase())
// Print in titlecase
function toTitleCase(input: string): string {
    return input.replace(/\w\S*/g, (word) => {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
  }
  
  let originalString: string = "hello world";
  let titleCaseString: string = toTitleCase(originalString);
  
  console.log(titleCaseString); // Output: Hello World
console.log(toTitleCase(personName));