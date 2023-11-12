// Checking Usernames: Simulating checking for unique usernames

// Make a list of current users
let current_users: string[] = ['kaylee', 'sophie', 'chloe', 'Max', 'Hermione'];

// Make a list of new users
let new_users: string[] = ['Diana', 'David', 'Max', 'Serah', 'Wren'];

// Loop through the new users list to check for uniqueness
for (let new_username of new_users) {
    // Check if the new username is already in the current users list (case-insensitive)
    let isUsernameTaken = current_users.some(username => username.toLowerCase() === new_username.toLowerCase());

    // Print messages based on the result
    if (isUsernameTaken) {
        console.log(`Sorry, the username '${new_username}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${new_username}' is available.`);
    }
}
