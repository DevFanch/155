// Enoncé 1 foreach
console.log('Enoncé 1 foreach');
const words = ['lulu', 'lala', 'lili', 'tata', 'titi']
words.forEach(word => console.log(word))

// Enoncé 2
console.log('Enoncé 2 filter');
// Arrow fn
const withoutAFn = mots => mots.filter(word => !word.includes('a'))
console.log(withoutAFn(words));

// Enoncé 3
console.log('Enoncé 3 Timers');
// let count = 3
// // Dans 3 sec, ca va péter
// setTimeout((counter) => {
//     // Mise en place du décompte 3,2,1,0 => Boom
//     // A chaque seconde
//     const idInterval = setInterval(() => {
//         // Display
//         console.log(counter);
//         // Decrement
//         counter--
//         // Test if it's the end
//         if (counter < 0) {
//             // Stop repeat
//             clearInterval(idInterval)
//             // Fatality
//             console.log('Baboom');
//         }
//     }, 1000);
// }, 3000, count);

// Enoncé 4
console.log('Enoncé 4 Closure');
const compute = operator => {
    switch (operator) {
        case '+':
            return num => num + 10
        case '-':
            return num => num - 10
        case '*':
            return num => num * 10
        case '/':
            return num => num / 10
        default:
            return num => 'Escroc'
    }   
}
// Closure call
/**
 * 1st Call => compute : define operation
 * 2nd subFn => varName : define number to compute
 */
const add = compute('+') // addition
console.log(add(3));
const sub = compute('-') // soustraction
console.log(sub(3));
const shit = compute('z') // boom
console.log(shit(3));

