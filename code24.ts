let str1 = "SAAD";
let str2 = "JAVED";

//Tests for equality and inequality with strings

console.log("Is str1 equal to 'SAAD'? I predict True.\n");
console.log(str1 == "SAAD");

console.log("Is str1 equal to str2? I predict Flase.\n");
console.log(str1 == str2);
//Tests using numerical comparisons

let num1 = 10;
let num2 = 5;
let num3 = 10

console.log("Is num1 greater than num2? I predict True.\n");
console.log(num1 > num2);

console.log("Is num1 less than num3? I predict False.\n");
console.log(num1 < num3);

//Tests using "and" and "or" operators
let bool1 = true;
let bool2 = false;

console.log("Is bool1 true and bool2 false? I predict False.\n");
console.log(bool1 && bool2);

console.log("Is bool1 true or bool2 false? I predict True.\n");
console.log(bool1 || bool2);

//Tests for items in an array
let fruits = ["apple", "banana", "orange", "grape"];

console.log("Is APPLE in the fruits array? I predict True.\n");
console.log(fruits.includes("apple"));

console.log("Is 'WATERMELON in the fruits array? I predict True.\n");
console.log(fruits.includes("watermelon"));