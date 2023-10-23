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
const userInput = document.querySelector('#guess');
buttonCheckNode.addEventListener('click', () => {
    if (total === +userInput.value) {
        messageNode.textContent = 'La suma es correcta! :)'
    } else if (userInput.value === '') {
        messageNode.textContent = 'Please enter a number'
    } else {
        messageNode.textContent = 'La suma es incorrecta... :('
    }
})

buttonNewGameNode.addEventListener('click', () => {
    userInput.value = '';
    messageNode.textContent = 'Please enter a number';
})




