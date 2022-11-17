let display = document.querySelector('#display');
let operation1 = 0;
const number1 = 0;
const number2 = 0;

display.textContent.textContent.addEventListener('keydown', function(event){
    if(event.code == 'NumpadAdd'){
        number1 = Number(display.textContent)
        operation1 = 1;
    }
    if(event.code == 'NumpadSubtract'){
        number1 = Number(display.textContent)
        operation1 = 2;
    }
    if(event.code == 'NumpadDivide'){
        number1 = Number(display.textContent)
        operation1 = 3
    }
    if(event.code == 'NumpadMultiply'){
        number1 = Number(display.textContent)
        operation1 = 4
    }
    if(event.code == 'NumpadEnter'){
        number2 = Number(display.textContent)

    }
})