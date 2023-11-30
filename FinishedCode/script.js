'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highscore = 0;
let trith = 0;

const displayGuessMessage = function (message) {
    document.querySelector('.guess-message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guessingNumber = Number(document.querySelector('.number-input').value);
    if(guessingNumber > 100 || guessingNumber < 0) {
        displayGuessMessage('Число вне диапазона!')
        return
    }

    // No input
    if (!guessingNumber) {
        displayGuessMessage('Введите число!');

        // Player won
    } else if (guessingNumber === secretNumber) {
        displayGuessMessage('Правильно!');
        document.querySelector('.question').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
        document.querySelector('.question').style.width = '50rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // Number from input is wrong
    } else if (guessingNumber !== secretNumber) {
        if (score > 1) {
            trith++;
            if(trith === 3) {
                displayGuessMessage(
                    secretNumber % 2 ? 'Число нечетное! ' : 'Число четное!'
                );
                trith = 1;
            } else {
                displayGuessMessage(
                    guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!'
                );
            }
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayGuessMessage('Game Over!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('.question').textContent = '???';
    document.querySelector('.question').style.width = '25rem';

    displayGuessMessage('Начни угадывать!');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number-input').value = '';

    document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
    document.querySelector('.modal').style.display = 'flex';
});

document.querySelector('.check-for-choose').addEventListener('click', () => {
    const input_choose = document.querySelector('.number-input-for-choose').value;
    console.log(input_choose);
    if(input_choose < 1 || input_choose > 1000) {
        document.querySelector('.choosen_mesage').textContent = 'Минимальное число 1, максимум 1000!'
        return 
    }

    document.querySelector('.modal').style.display = 'none';
    secretNumber = Math.trunc(Math.random() * input_choose) + 1;
    document.querySelector('.current_number').textContent = input_choose;
});

document.querySelector('.check-for-choose-no').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('.current_number').textContent = 100;
    console.log(secretNumber);
});
