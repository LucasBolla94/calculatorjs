const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const ac = document.querySelector('#ac');
const point = document.querySelector('#point');
let display = document.querySelector('.display');
const subtraction = document.querySelector('#subtraction');
const addition = document.querySelector('#addition');
const multiplication = document.querySelector('#multiply');
const division = document.querySelector('#divide');
const equal = document.querySelector('#equal');

let operation1 = 0;
let numberOne = 0;
let numberTwo = 0;
let result = 0;

onkeydown = (event) => {
    if(event.code == 'NumpadEnter'){
        console.log('enter')
        numberTwo = Number(display.textContent)
        if(operation == '-'){
            result = numberOne - numberTwo
        }
        if(operation == '+'){
            result = numberOne + numberTwo
        }
        if(operation == '*'){
            result = (numberOne * numberTwo)
        }
        if(operation == '/'){
            result = (numberOne / numberTwo)
        }
        display.textContent = result
    }
    if(event.code == 'NumpadSubtract'){
        console.log('-')
        operation = '-'
        numberOne = Number(display.textContent)
        display.textContent = '';
    }
    if(event.code == 'NumpadAdd'){
        console.log('+')
        operation = '+'
        numberOne = Number(display.textContent)
        display.textContent = '';
    }
    if(event.code == 'NumpadMultiply'){
        console.log('*')
        operation = '*'
        numberOne = Number(display.textContent)
        display.textContent = '';
    }
    if(event.code == 'NumpadDivide'){
        console.log('/')
        operation = '/'
        numberOne = Number(display.textContent)
        display.textContent = '';
    }
    if(event.code == 'NumpadComma'){
        console.log('.')
        display.textContent += '.'
    }
    if(event.code == 'Space'){
        numberOne = 0;
        numberTwo = 0;
        display.textContent = '';
    }
    // Numbers KeyBoard
    if(event.code == 'Numpad1'){
        console.log('1')
        display.textContent += '1'
    }
    if(event.code == 'Numpad2'){
        console.log('2')
        display.textContent += '2'
    }
    if(event.code == 'Numpad3'){
        console.log('3')
        display.textContent += '3'
    }
    if(event.code == 'Numpad4'){
        console.log('4')
        display.textContent += '4'
    }
    if(event.code == 'Numpad5'){
        console.log('5')
        display.textContent += '5'
    }
    if(event.code == 'Numpad6'){
        console.log('6')
        display.textContent += '6'
    }
    if(event.code == 'Numpad7'){
        console.log('7')
        display.textContent += '7'
    }
    if(event.code == 'Numpad8'){
        console.log('8')
        display.textContent += '8'
    }
    if(event.code == 'Numpad9'){
        console.log('9')
        display.textContent += '9'
    }
    if(event.code == 'Numpad0'){
        console.log('0')
        display.textContent += '0'
    }
}

// Clicks Events


point.addEventListener('click', function(){
    display.textContent += '.'
})

equal.addEventListener('click', function(){
    numberTwo = Number(display.textContent)
        if(operation == '-'){
            result = numberOne - numberTwo
        }
        if(operation == '+'){
            result = numberOne + numberTwo
        }
        if(operation == '*'){
            result = (numberOne * numberTwo)
        }
        if(operation == '/'){
            result = (numberOne / numberTwo)
        }
        display.textContent = result
})

ac.addEventListener('click', function(){
    display.textContent = ''
})

zero.addEventListener('click', function(){
    display.textContent += '0'
});

one.addEventListener('click', function(){
    display.textContent += '1'
});

two.addEventListener('click', function(){
    display.textContent += '2'
});

three.addEventListener('click', function(){
    display.textContent += '3'
});

four.addEventListener('click', function(){
    display.textContent += '4'
});

five.addEventListener('click', function(){
    display.textContent += '5'
});

six.addEventListener('click', function(){
    display.textContent += '6'
});

seven.addEventListener('click', function(){
    display.textContent += '7'
});

eight.addEventListener('click', function(){
    display.textContent += '8'
});

nine.addEventListener('click', function(){
    display.textContent += '9'
})

// Operations Maths

multiplication.addEventListener('click', function(){
    operation = '*';
    numberOne = Number(display.textContent)
    display.textContent = ''

});

addition.addEventListener('click', function(){
    operation = '+';
    numberOne = Number(display.textContent)
    display.textContent = ''
});

divide.addEventListener('click', function(){
    operation = '/';
    numberOne = Number(display.textContent)
    display.textContent = ''
});

subtraction.addEventListener('click', function(){
    operation = '-'
    numberOne = Number(display.textContent)
    display.textContent = ''
});