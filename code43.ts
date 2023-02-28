function make_album(artist_name :string , album_title : string,) {
    let album = {
      artist: artist_name,
      title: album_title,
      
    }
    return album;
  }
  
  let albums = [
    make_album('Atif Aslam', 'Aadat'),
   make_album('Junaid Jamshed', 'Dil Dil Pakistan'),
   make_album('Vital Signs', 'Aitebaar'),
  ];
  
  console.log(albums);
  
  let Magicians = ["David Blaine", "Dynamo", "Penn Jillette"];
  let ggreat_magicians : string[] = [];
  
  function makeee_great (magicians_array : string[]) {
    for (let i = 0; i < magicians_array.length; i++) {
      ggreat_magicians.push("Great " + magicians_array[i]);
    }
    return ggreat_magicians;
  }
  
  function showee_magicians(magicians_array : string[]) {
    for (let i = 0; i < magicians_array.length; i++) {
      console.log(magicians_array[i]);
    }
  }
  
  
  let new_magicians = makeee_great(Magicians.slice());
  showee_magicians(Magicians);
  showee_magicians(new_magicians);
  