//generate random numbers. Utilizo la biblioteca Chance !
// https://chancejs.com/basics/integer.html
const chance = new Chance();


let firstNumber = chance.integer({ min: 0, max: 10 });
let secondNumber = chance.integer({ min: 0, max: 10 });
let total = firstNumber + secondNumber;

const firstNumberNode = document.querySelector('#primary-number');
firstNumberNode.textContent = firstNumber;

const secondNumberNode = document.querySelector('#secondary-number');
secondNumberNode.textContent = secondNumber;

const buttonCheckNode = document.querySelector('#btn');
const buttonNewGameNode = document.querySelector('#new-game');
const messageNode = document.querySelector('#message');

buttonCheckNode.addEventListener('click', () => {
    const userInput = document.querySelector('#guess').value;
    if (total === parseInt(userInput)) {
        messageNode.textContent = 'La suma es correcta! :)'
    } else if (userInput === '') {
        messageNode.textContent = 'Please enter a number'
    } else {
        messageNode.textContent = 'La suma es incorrecta... :('
    }
})

buttonNewGameNode.addEventListener('click', () => {
    location.reload()
})




