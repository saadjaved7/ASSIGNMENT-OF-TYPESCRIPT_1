"use strict";
function makeSandwich(sandwichItems) {
    console.log("Here's your sandwich with:");
    for (let i = 0; i < sandwichItems.length; i++) {
        console.log("- " + sandwichItems[i]);
    }
    console.log("Enjoy your sandwich!\n");
}
makeSandwich(['lettuce', 'tomato', 'mayo']);
makeSandwich(['peanut butter', 'jelly']);
makeSandwich(['ham', 'cheese']);
