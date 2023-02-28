"use strict";
const usernames = ['SAAD', 'ADMIN', 'SHAHZEB', 'ALI', 'RAHIM'];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'ADMIN') {
        console.log(`\n Hello ${usernames[i]}, would you like to see a status report?\n`);
    }
    else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.\n`);
    }
}
