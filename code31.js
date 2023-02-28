"use strict";
let Age = 1;
if (Age < 2) {
    console.log("The person is a baby.");
}
else if (Age < 4) {
    console.log("The person is a toddler.");
}
else if (Age < 13) {
    console.log("The person is a kid.");
}
else if (Age < 20) {
    console.log("The person is a teenager.");
}
else if (Age < 65) {
    console.log("The person is an adult.");
}
else if (Age >= 65) {
    console.log("The person is an elder.");
}
else {
    console.log("We need to find some users!");
}
