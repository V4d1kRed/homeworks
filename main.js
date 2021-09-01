// Task 1
while (true) {
    const number = Math.floor(prompt('Введите количество input:', 1));

    for (let i = number; i > 0; i--) {
        const form = document.querySelector('form');
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
