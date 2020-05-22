// define sample function to randomly return an item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}
// define generatePassword function
function generateShortURL() {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const shortURL = 5
  

  // create a collection to store things user picked up
  let collection = []
 
  collection = collection.concat(lowerCaseLetters.split(''))
  collection = collection.concat(upperCaseLetters.split(''))
  collection = collection.concat(numbers.split(''))
  
  // console.log('collection', collection)


  // start generating password
  let password = ''
  for (let i = 0; i < shortURL; i++) {
    password += sample(collection)
  }
  // return the generated password
  return password
  console.log('password = ', password)
}

// invoke generatePassword function
module.exports = generateShortURL