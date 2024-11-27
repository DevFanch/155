// Enoncé 1 foreach
console.log('Enoncé 1 foreach');
const words = ['lulu', 'lala', 'lili', 'tata', 'titi']
words.forEach(word => console.log(word))

// Enoncé 2
console.log('Enoncé 2 filter');
const withoutA = words.filter(word => !word.includes('a'))
console.log(withoutA);

