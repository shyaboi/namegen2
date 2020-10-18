const fs = require ('fs')
const words = require("../server/dict")


let wordCache = []

for (let i = 0; i < 10; i++) {
    var randomWord = words[Math.floor(Math.random() * words.length)];
    wordCache.push(randomWord)
    // console.log(wordCache)
}
console.log(wordCache)

// fs.readFile('../src/words_dictionary.json', "utf-8", (err, data) => {
//   if (err) throw err;
// //   console.log(data);
//   var dictionary = data

// //   console.log(dictionary)
  fs.writeFile("../wordcache", wordCache,()=> {console.log('dictionary wrote')})
// });