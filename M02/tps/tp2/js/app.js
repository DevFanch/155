// Enoncé 1
let perso = prompt('Quel est votre perso préféré des Simpsons?', "Mr. Burns")
console.log(perso);

localStorage.setItem('simpsonsPeople', perso)

// // Enoncé 2
const people = localStorage.getItem('simpsonsPeople')

if (people === "" || people === 'null') {
    perso = prompt('Quel est votre perso préféré des Simpsons?2', "Moe")
    localStorage.setItem('simpsonsPeople', perso)
    console.log(perso);
} else {
    // Enoncé 3
    alert(people)
    const response = confirm('Voulez-vous modifier vôtre choix ?')
    if (response) {
        perso = prompt('Quel est votre nouveau choix?', "Marge ?? Maggie")
        localStorage.setItem('simpsonsPeople', perso)
    }
}

// Enoncé 4-5
fetch('js/data/users.json')
    .then(response => response.json())
    .then(datas => localStorage.setItem('users', JSON.stringify(datas.users)))