// This program intentionally introduces an array index error and corrects it.
// Define an array of favorite shows and movies with their information
var favoriteShowsAndMovies = [
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
        releaseYear: 2008,
        genre: "Drama, Fantasy, Romance"
    },
    {
        title: "Harry Potter",
        director: "Various Directors",
        releaseYear: 2001,
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
var invalidIndex = 10;
console.log("Attempting to access element at index ".concat(invalidIndex, ":"));
console.log(favoriteShowsAndMovies[invalidIndex]); // This line will cause an array index error
// Correct the error
if (invalidIndex >= 0 && invalidIndex < favoriteShowsAndMovies.length) {
    console.log("Array index is within bounds. Accessing corrected index:");
    console.log(favoriteShowsAndMovies[invalidIndex]);
}
else {
    console.log("Array index is out of bounds. Please provide a valid index.");
}
