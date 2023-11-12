// City Country: Defining the city_country function and calling it with three city-country pairs

// Define the city_country function
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the city_country function with three different city-country pairs and print the results
console.log(city_country('Seattle', 'USA'));
console.log(city_country('Toronto', 'Canada'));
console.log(city_country('Seoul', 'S.Korea'));
