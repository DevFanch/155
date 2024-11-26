// Enoncé 1 [0,100]
const tirageUnique = new Set
let count = 0

while (tirageUnique.size < 101) {
    // Generate random number
    const randomNumber = Math.floor(Math.random() * 101)
     // Add
    tirageUnique.add(randomNumber)
    // Increment round
    count++
}

console.log('Mon tirage : ',tirageUnique);
console.log('Nombre de tirages : ',count);

// Enoncé 2
const sentence = "une chaine avec des lettres dans un certain ordre pour donner du sens"
// convert String to Array
const sentenceArray  = sentence.split('')
// Sort
sentenceArray.sort()
// Display join to a string without spaces
console.log(sentenceArray.join('').trim());

// Enoncé 3
const sentence2 = "une phrase sans majuscule"
// Convert String to Array
const words = sentence2.split(' ')

// Callback
function upperCaseFirst(word) {
    return word[0].toUpperCase() + word.slice(1)
}
// Loop to apply the callback
const wordsConverted = words.map(upperCaseFirst)
// Display to string
console.log(wordsConverted.join(' '));

// Enoncé 4
const colorsDico = new Map([
    ["j","jaune"],
    ["r","rouge"],
    ["v","violet"],
    ["b","bleu"],
])
console.log(colorsDico);
const keys = Array.from(colorsDico.keys()) // get Keys array

for (let index = 0; index < 5; index++) {
    // Gen random id
    const key = Math.floor(Math.random() * 4)
    // Identify key from id => alpha
    const alphaKey = keys[key]
    console.log(colorsDico.get(alphaKey));
}