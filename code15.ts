// original guest list
let GuestList = ["SOHAIL JAVED ", "NAWAAZ JAVED","SHAHZEB AZHAR"];

// message to each guest
GuestList.forEach((guest) => {
  console.log(`Dear ${guest},\n\nYou are cordially invited to a dinner at my home on Friday, March 3rd. We hope you can attend.\n\nBest regards,\n[ SAAD JAVED\n ]`);
});

//  guest who can't make it
let CancelGuest = "SHAHZEB AZHAR";
console.log(`Unfortunately, ${CancelGuest} can't make it to the dinner.`);

// Replace the cancelled guest with a new guest
let NewGuest = "ALI ABBAS";
GuestList[GuestList.indexOf(CancelGuest)] = NewGuest;

// Print a message to each remaining guest
GuestList.forEach((guest) => {
  console.log(`Dear ${guest},\n\nYou are cordially invited to a dinner at my home on Friday, March 3rd. We hope you can attend.\n\nBest regards,\n[ SAAD JAVED\n ]`);
});

