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
// Print the information about favorite shows and movies
console.log("Information about Favorite Shows and Movies:");
for (var _i = 0, favoriteShowsAndMovies_1 = favoriteShowsAndMovies; _i < favoriteShowsAndMovies_1.length; _i++) {
    var showOrMovie = favoriteShowsAndMovies_1[_i];
    console.log("Title: ".concat(showOrMovie.title));
    console.log("Director: ".concat(showOrMovie.director));
    console.log("Release Year: ".concat(showOrMovie.releaseYear));
    console.log("Genre: ".concat(showOrMovie.genre));
    console.log("\n");
}
