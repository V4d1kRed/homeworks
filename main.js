// Task 1
while (true) {
    const form = document.querySelector('form');
    const number = Math.floor(prompt('Введите количество input:', 1));
    
    for (let i = number; i > 0; i--) {
        const input = document.createElement('input');
    
        input.setAttribute('type', 'text');
        input.setAttribute('value', `Input ${i}`);
        input.classList.add('input-item');
    
        if (i % 2) {
            input.classList.add('input-item--bg-color');
        }
    
        if (!(i % 3)) {
            input.removeAttribute('value');
            input.setAttribute('placeholder', 'Some text...');
        }
    
        if (i === number) {
            input.classList.add('margin-zero');
        }
    
        form.prepend(input);
    }

    if (!isNaN(number) && number > 0) break;
}
// Task 2
const time = document.createElement('div');
const h2 = document.createElement('h2');
const btnStop = document.createElement('button');
const btnStart = document.createElement('button');

time.classList.add('time');
btnStop.textContent = 'Stop';
btnStart.textContent = 'Start';

document.body.append(time);
time.prepend(h2, btnStop, btnStart);

const getTime = () => {
    h2.textContent = new Date().toLocaleTimeString();
}

btnStart.addEventListener('click', () => {
    const intervalId = setInterval(getTime, 1000);

    btnStop.addEventListener('click', () => {
        clearInterval(intervalId);
    })
})

getTime();