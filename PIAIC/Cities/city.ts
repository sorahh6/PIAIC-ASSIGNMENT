// Cities: Defining the describe_city function and calling it for three different cities

// Define the describe_city function with a default country value
function describe_city(city: string, country: string = 'Unknown'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the describe_city function for three different cities
describe_city('Toronto', 'Canada');
describe_city('New York', 'USA');
describe_city('Seoul'); // Using the default country value
