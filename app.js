const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const StartPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
console.log(squares)
let currentIndex = 2

function moveFrog() {
    squares[currentIndex].classList.add('frog')
}

document.addEventListener('keyup', moveFrog)