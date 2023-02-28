"use strict";
let placesToVisit = ['Japan', 'Italy', 'Australia', 'Thailand', 'Brazil'];
// original order
console.log("Original order:", placesToVisit);
//  in alphabetical order without modifying the original list
console.log("Alphabetical order:", placesToVisit.slice().sort());
// array is still in its original order
console.log("Original order after sort:", placesToVisit);
//  reverse alphabetical order without modifying the original list
console.log("Reverse alphabetical order:", placesToVisit.slice().sort().reverse());
// Show that the array is still in its original order
console.log("Original order after reverse sort:", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
// Reverse the order of the list again to show it's back to its original order
placesToVisit.reverse();
console.log("Original order after double reverse:", placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Alphabetical order after sort:", placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("Reverse alphabetical order after sort:", placesToVisit);
