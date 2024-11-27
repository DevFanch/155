// // Function Simple
// function hello() {
//     console.log('Hello');
//     console.log('Hello');
// }
// hello()

// // Function Anonym
// const hello2 = function () {
//     console.log('Hello 2');
// }
// hello2()

// // Arrow Function
// const hello3 = () => console.log('Hello 2')
// hello3()

// // Closure
// // Computer
// const opeAdd = "+"
// function compute(operator) {
//     if (operator === "+") {
//         return (num1, num2) => num1 + num2
//     } else {
//         return () => console.log('Looser');
//     }
// }

// // Error
// const add = compute("-")
// add(1,2) // "Looser"
// // Ok
// const addWin = compute(opeAdd)
// addWin(1,2) // 3

// Timer manager
let counter = 5
// setTimeout(() => {
//     alert('Bouuuum !!!')
// }, 6000); // 6 au lieu de 5 car décallage avec le setinterval

// function display() {
//     console.log(`Il reste ${counter} seconde(s)`);
//     counter--
//     if (counter < 0) {
//         clearInterval(idInterval)
//     }
// }
// display()
// const idInterval = setInterval(display, 1000);

// Popup
// alert('Hello')
// prompt('Saisi ton blaze ?')
// const response = confirm('T\'es sur ?')
// console.log(response);

// Storage
// document.cookie = "promo=HD2WM155;max-age=30" // 30 sec

// Set data
// localStorage.setItem('promo', 'HD2WM155')

// // get data
// const promoCurrent = localStorage.getItem('promo')
// console.log(typeof promoCurrent);

// Faillle XSS

// const nom = prompt('Ton nom stp ?')
// // alert('C\'est bien ton nom ?', nom)
// console.log(nom);

// document.querySelector('h1').innerHTML = nom

// JSON
fetch('js/data/course.json')
.then(response => response.json())
.then(courses => {
    console.log(courses)
    console.log(courses.legume.espece)
    console.log("Ma banane est ", courses.fruits[1].couleur)
})