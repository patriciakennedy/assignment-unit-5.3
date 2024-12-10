console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

// REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array - PK
// REF: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays - PK

// TASK1: Creating arrays, objects, accessing & assigns values, return - PK
let myCollection = [];

// Reuse code for adding albums - PK
function addToCollection(collection, title, artist, yearPublished) {
  
  const newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };

  collection.push(newAlbum);

  return newAlbum;
}

// TASK2: Using and testing addToCollection function: - PK

console.log(addToCollection(myCollection, 'Trusting God', 'Sam James', 2021));
console.log(addToCollection(myCollection, 'Obey', 'Mark Johnson', 1987));
console.log(addToCollection(myCollection, 'God is able', 'Grace Miller', 2021));
console.log(addToCollection(myCollection, 'Never', 'Emily Smith', 2021));
console.log(addToCollection(myCollection, 'What a world', 'Jay Martinez', 2024));
console.log(addToCollection(myCollection, 'Trusting God Always', 'Sophia Anderson', 2019));

console.log(myCollection);


// TASK3:

function showCollection(collection) {
  for (const album of collection) {
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
}

console.log(showCollection(myCollection));


// TASK4:Use and test the showCollection function.
// showCollection(myCollection);










//--------------------------------- NO CODE ZONE -----------------------------------------  - PK


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
