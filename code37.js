"use strict";
function makee_shirt(size = "large", message = "I love TypeScript") {
    console.log(`You have ordered a ${size} shirt with the message: "${message}"`);
}
makee_shirt();
makee_shirt("medium");
makee_shirt("small", "I love C++ too!");
