"use strict";
let magicians = ["Harry Houdini", "David Copperfield", "Teller"];
function make_greatt(magicians_array) {
    for (let i = 0; i < magicians_array.length; i++) {
        magicians_array[i] = "the Great " + magicians_array[i];
    }
}
function show_magicianss(magicians_array) {
    for (let i = 0; i < magicians_array.length; i++) {
        console.log(magicians_array[i]);
    }
}
make_greatt(magicians);
showee_magicians(magicians);
