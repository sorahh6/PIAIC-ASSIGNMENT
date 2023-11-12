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

for (let showOrMovie of favoriteShowsAndMovies) {
    console.log(`Title: ${showOrMovie.title}`);
    console.log(`Director: ${showOrMovie.director}`);
    console.log(`Release Year: ${showOrMovie.releaseYear}`);
    console.log(`Genre: ${showOrMovie.genre}`);
    console.log("\n");
}
