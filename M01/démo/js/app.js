console.log('Hello from Js')

const totoAge = 17.5 // Number
const isMajor = true // boolean

console.log(totoAge, isMajor);
console.log('Majeur ou pas?', isMajor);

if (totoAge >= 18) {
    console.log('Youpi');
} else {
    console.log('Loooze');
}

const students = ['Toto', 'Dudule', 'Lala'] // Length 3
console.log('Nb de stagiaires :', students.length);
students.push('Lulu')
console.log(students);
console.log('Nb de stagiaires :', students.length);


// Collection Iterable
// for (let index = 0; index < students.length; index++) {
//     console.log(students[index])
// }

// for (const student of students) {
//     console.log(student);
//     if (student == 'Dudule') {
//         break
//     }
// }

// students.forEach(element => {
    
// });

// students.map(student => console.log(student))

// Set
const names = new Set
names.add('Dudule')
names.add('Toto')
names.add('Lala')
names.add('Lulu')
names.add('TOTO')
names.add('toto')
names.add('Toto')
names.add('Lala')
console.log(names);
console.log(Array.from(names));

const $h1 = document.querySelector('h1')
console.log($h1.id);

// Import
import { checkEmail } from "./modules/validate-form.js";

console.log(checkEmail('toto@toto.fr'));

// Exemple d'usage du Math.random()
const rand = Math.random()
console.log(rand);

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

console.log(getRandomIntInclusive(13,28));
