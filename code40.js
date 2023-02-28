"use strict";
function makee_album(artist, album_title, tracks) {
    let album = {
        artist: artist,
        title: album_title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(makee_album('Atif Aslam', 'Aadat'));
console.log(makee_album('Junaid Jamshed', 'Dil Dil Pakistan'));
console.log(makee_album('Vital Signs', 'Aitebaar', 8));
