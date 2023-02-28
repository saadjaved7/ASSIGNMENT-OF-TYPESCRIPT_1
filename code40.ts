interface Album {
    artist: string;
    title: string;
    tracks?: number;
  }
  
  function makee_album(artist: string, album_title: string, tracks?: number): Album {
    let album: Album = {
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
    