"use strict";
let guestLists = ["SOHAIL JAVED ", "NAWAAZ JAVED", "SHAHZEB AZHAR"];
guestLists.forEach((guest) => {
    console.log(`Dear ${guest},\n\nYou are cordially invited to a dinner at my home on Friday, March 3rd. We hope you can attend.\n\nBest regards,\n[SAAD JAVED ]`);
});
console.log("Good news! We found a bigger dinner table!");
guestLists.unshift("ALI ABBBAS");
guestLists.splice(2, 0, "M . AHMED ");
guestLists.push("M . HAMMAD ");
guestLists.forEach((guest) => {
    console.log(`Dear ${guest},\n\nYou are cordially invited to a dinner at my home on Friday, March 3rd. We hope you can attend.\n\nBest regards,\n[SAAD JAVED]`);
});
