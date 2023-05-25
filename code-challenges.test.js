// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:
// input: array of numbers
// output: array with numbers * 3
// iterate through array using .map since .map will return an array by default
// each value in the iteration needs to be multiplied by 3

// a) Create a test with expect statements for each of the variables provided.

// describe("exampleFunction", () => {
//   it("takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
//     const numbersArray1 = [6, 7, 8, 9, 10]
//     // Expected output: [18, 21, 24, 27, 30]
//     const numbersArray2 = [24, 27, 30, 33, 36]
//     // Expected output: [72, 81, 90, 99, 108]
//     expect(exampleFunction(numbersArray1)).toEqual([18, 21, 24, 27, 30])
//     expect(exampleFunction(numbersArray2)).toEqual([72, 81, 90, 99, 108])
//   })
// })

// FAIL  ./code-challenges.test.js
// exampleFunction
//   ✕ takes in an array of numbers and returns an array with all the numbers multiplied by 3

// ● exampleFunction › takes in an array of numbers and returns an array with all the numbers multiplied by 3

//   ReferenceError: exampleFunction is not defined

// b) Create the function that makes the test pass.

// const exampleFunction = (arr) => {
//   return arr.map(num => num * 3)
// }

// PASS  ./code-challenges.test.js
// exampleFunction
//   ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

describe('byThree', () => {
  it('takes a object as an argument and decides if the number inside it is evenly divisible by three or not', () => {
    const object1 = { number: 15 }
    // Expected output: "15 is divisible by three"
    const object2 = { number: 0 }
    // Expected output: "0 is divisible by three"
    const object3 = { number: -7 }
    // Expected output: "-7 is not divisible by three"
    expect(byThree(object1)).toEqual("15 is divisible by three")
    expect(byThree(object2)).toEqual("0 is divisible by three")
    expect(byThree(object3)).toEqual("-7 is not divisible by three")
  })
})

// b) Create the function that makes the test pass.

// function byThree, takes param num1
// use conditionals
// object - key value pair
// use dot notation to access value in object
// use modulo and strict equality operators
// return string interpolation with expected output

const byThree = (num1) => {
  if(num1.number % 3 === 0) {
    return `${num1.number} is divisible by three`
  } else if(num1.number % 3 !== 0) {
    return `${num1.number} is not divisible by three`
  } else {
    return "Something went wrong"
  }
}


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

describe('allCapWords', () => {
  it('takes in an array of words and returns an array with all the words capitalized', () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
    expect(allCapWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(allCapWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
  })
})

// b) Create the function that makes the test pass.

const allCapWords = (nounList) => {
  // .map to iterate through array
  return nounList.map((word) => {
    // each string's index 0, upper case that character
    // concat rest of the word using .slice
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
}


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.



describe('vowelChecker', () => {
  it('takes in a string and logs the index of the first vowel', () => {
    const vowelTester1 = "learn"
    // Expected output: 1
    const vowelTester2 = "academy"
    // Expected output: 0
    const vowelTester3 = "challenges"
    // Expected output: 2
    expect(vowelChecker(vowelTester1)).toEqual(1)
    expect(vowelChecker(vowelTester2)).toEqual(0)
    expect(vowelChecker(vowelTester3)).toEqual(2)
  })
})

// b) Create the function that makes the test pass.

const vowelChecker = (string) => {
  // made array containing vowels
  const vowelArray = ['a', 'e', 'i', 'o', 'u']
  // use for loop to iterate
  for(let i = 0; i < string.length; i++) {
    // if the current letter is in our vowel array, return index
    if(vowelArray.includes(string[i])) {
      return i
    }
  }
}