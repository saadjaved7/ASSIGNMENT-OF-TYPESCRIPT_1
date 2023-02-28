"use strict";
let current_users = ['SOHAIL', 'SAAD', 'SHAHZEB', 'ALI', 'NAWAZ'];
let new_users = ['SHAHID', 'AHMED', 'SAAD', 'NAWAZ', 'JAVED'];
console.log("Current Users: " + current_users);
console.log("New Users: " + new_users);
for (let i = 0; i < new_users.length; i++) {
    let username = new_users[i];
    let username_exists = false;
    for (let j = 0; j < current_users.length; j++) {
        if (username.toLowerCase() === current_users[j].toLowerCase()) {
            username_exists = true;
            break;
        }
    }
    if (username_exists) {
        console.log("Sorry, the username '" + username + "' is already taken. Please enter a new username.");
    }
    else {
        console.log("Congratulations, the username '" + username + "' is available!");
    }
}
