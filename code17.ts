
let guests = ["SOHAIL JAVED ", "NAWAAZ JAVED", "SHAHZEB AZHAR\n"];


console.log("Great news, I found a bigger dinner table!\n");


guests.unshift('ALI ABBAS\n');


guests.splice(2, 0, 'M . AHMED \n');


guests.push('M . HAMMAD \n');


guests.forEach((guest) => {
  console.log(`Dear ${guest}, you are cordially invited to a dinner party at my house!\n`);
});


console.log(`Unfortunately, ${guests[3]} can't make it to the dinner.\n`);


guests[3] = "SHAHZEB AZHAR\n ";

// second set of invitation messages
guests.forEach((guest) => {
  console.log(`Dear ${guest}, you are still invited to the dinner party at my house!\n`);
});


console.log("Even better news, I found an even bigger dinner table!\n");


guests.push('BADAR DAR \n');
guests.splice(4, 0, 'ZAIN \n');
guests.push('ZUBAIR \n');


guests.forEach((guest) => {
  console.log(`Dear ${guest}, you are still invited to the dinner party at my house!\n`);
});


console.log("Sorry folks, it turns out I can only invite two people to dinner.\n");


while (guests.length > 2) {
  let removedGuest = guests.pop();
  console.log(`Sorry ${removedGuest}, it looks like there won't be enough room for you at the dinner.\n`);
}


guests.forEach((guest) => {
  console.log(`Dear ${guest}, you are still invited to the dinner party at my house!\n`);
});


guests.pop();
guests.pop();


console.log(guests); // Output: []
