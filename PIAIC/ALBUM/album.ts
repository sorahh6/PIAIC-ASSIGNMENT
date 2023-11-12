// Album: Defining the make_album function to create album objects

// Define the make_album function
function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
    const album: Record<string, any> = {
        artist: artist,
        title: title
    };

    // Add tracks to the album object if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Call the make_album function with different album information
const album1 = make_album('SORAHH', 'Album1', 10);
const album2 = make_album('PEARL', 'Album2');
const album3 = make_album('LARIETTE', 'Album3', 15);

// Print the album objects
console.log(album1);
console.log(album2);
console.log(album3);
