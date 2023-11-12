// Greetings to Users: Printing greetings based on usernames

// Make an array of usernames
let usernames: string[] = ['admin', 'Asrahan', 'Lariette', 'Zayn', 'Pearl'];

// Loop through the array and print greetings
for (let username of usernames) {
    if (username.toLowerCase() === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
