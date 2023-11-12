// Checking Usernames: Simulating checking for unique usernames
// Make a list of current users
var current_users = ['kaylee', 'sophie', 'chloe', 'Max', 'Hermione'];
// Make a list of new users
var new_users = ['Diana', 'David', 'Max', 'Serah', 'Wren'];
var _loop_1 = function (new_username) {
    // Check if the new username is already in the current users list (case-insensitive)
    var isUsernameTaken = current_users.some(function (username) { return username.toLowerCase() === new_username.toLowerCase(); });
    // Print messages based on the result
    if (isUsernameTaken) {
        console.log("Sorry, the username '".concat(new_username, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_username, "' is available."));
    }
};
// Loop through the new users list to check for uniqueness
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    _loop_1(new_username);
}
