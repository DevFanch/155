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

setTimeout(() => {
    alert('Bouuuum !!!')
}, counter * 1000);

const idInterval = setInterval(() => {
    console.log(`Il reste ${counter} seconde(s)`);
    if (counter === 0) {
        clearInterval(idInterval)
    } else {
        counter--
    }
}, 1000);