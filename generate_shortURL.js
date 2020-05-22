// define sample function to randomly return an item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}
// define generatePassword function
function generateShortURL(url) {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const shortUrlLength = 5
  

  // create a collection to store things user picked up
  let collection = []
 
  collection = collection.concat(lowerCaseLetters.split(''))
  collection = collection.concat(upperCaseLetters.split(''))
  collection = collection.concat(numbers.split(''))


  // start generating password
  let shortURL = ''
  for (let i = 0; i < shortUrlLength; i++) {
    shortURL += sample(collection)
  }
  // return the generated shortURL
  return shortURL
  console.log('shortURL = ', shortURL)
}

// invoke generateshortURL function
module.exports = generateShortURL