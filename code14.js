"use strict";
let guestList = ["SOHAIL JAVED ", "NAWAAZ JAVED", "SHAHZEB AZHAR"];
let cancelGuest = "SHAHZEB AZHAR";
guestList = guestList.filter((guest) => guest !== cancelGuest);
let newGuest = "ALI  ABBAS ";
guestList.push(newGuest);
console.log("Updated Guest List:");
guestList.forEach((guest) => console.log(guest));
