// This program intentionally introduces an array index error and corrects it.

// Define an array of favorite shows and movies with their information
let favoriteShowsAndMovies: { title: string; director: string; releaseYear: number; genre: string }[] = [
    {
        title: "The Vampire Diaries",
        director: "Various Directors",
        releaseYear: 2009,
        genre: "Drama, Fantasy, Horror"
    },
    {
        title: "The Originals",
        director: "Various Directors",
        releaseYear: 2013,
        genre: "Drama, Fantasy, Horror"
    },
    {
        title: "Twilight Series",
        director: "Various Directors",
        releaseYear: 2008, // Note: Use the release year of the first movie
        genre: "Drama, Fantasy, Romance"
    },
    {
        title: "Harry Potter",
        director: "Various Directors",
        releaseYear: 2001, // Note: Use the release year of the first movie
        genre: "Adventure, Family, Fantasy"
    },
    {
        title: "Teen Wolf",
        director: "Various Directors",
        releaseYear: 2011,
        genre: "Action, Drama, Fantasy"
    }
];

// Intentionally introduce an array index error
let invalidIndex = 10;
console.log(`Attempting to access element at index ${invalidIndex}:`);
console.log(favoriteShowsAndMovies[invalidIndex]); // This line will cause an array index error

// Correct the error
if (invalidIndex >= 0 && invalidIndex < favoriteShowsAndMovies.length) {
    console.log("Array index is within bounds. Accessing corrected index:");
    console.log(favoriteShowsAndMovies[invalidIndex]);
} else {
    console.log("Array index is out of bounds. Please provide a valid index.");
}
