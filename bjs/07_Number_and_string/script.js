let lastOperand = 0;
let operation = null;

let newInput;
/* Переменная newInput введена на случай если пользователь после выполнения арифметической операции
    (нажатия на клавишу "="), позабудет сбросить результат (нажать на клавишу "с") и начнёт производить
    новый набор цифр для проведения новой арифметической операции. */

const inputWindow = document.getElementById('inputWindow');

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
});

document.getElementById('btn_1').addEventListener('click', function () {
    if(newInput === true) {
        inputWindow.value = '';
         
    }
    newInput = false;

    if(inputWindow.value[0] === '0')
    inputWindow.value = inputWindow.value.replace('0', '');
    /* Выше стоящие условие применено, чтобы в поле ввода-вывода калькулятора осуществлялся 
       корректный ввод цифр (чтобы не отображались числа вида: 023, 0054, а вместо них отображались
       правильные числа 23, 54). */

    inputWindow.value += '1';
});

document.getElementById('btn_2').addEventListener('click', function () {
    if(newInput === true) {
        inputWindow.value = ''; 
       
    }
    newInput = false;

    if(inputWindow.value[0] === '0')
    inputWindow.value = inputWindow.value.replace('0', '');

    inputWindow.value += '2';
});

document.getElementById('btn_3').addEventListener('click', function () {
    if(newInput === true) {
        inputWindow.value = ''; 
        
    }
    newInput = false;

    if(inputWindow.value[0] === '0')
    inputWindow.value = inputWindow.value.replace('0', '');

    inputWindow.value += '3';
});

document.getElementById('btn_4').addEventListener('click', function () {
    if(newInput === true) {
        inputWindow.value = ''; 
        
    }
    newInput = false;

    if(inputWindow.value[0] === '0')
    inputWindow.value = inputWindow.value.replace('0', '');

    inputWindow.value += '4';
});

document.getElementById('btn_5').addEventListener('click', function () {
    if(newInput === true) {
        inputWindow.value = ''; 
        
    }
    newInput = false;

    if(inputWindow.value[0] === '0')
    inputWindow.value = inputWindow.value.replace('0', '');

    inputWindow.value += '5';
});

document.getElementById('btn_6').addEventListener('click', function () {
    if(newInput === true) {
        inputWindow.value = ''; 
        
    }
    newInput = false;

    if(inputWindow.value[0] === '0')
    inputWindow.value = inputWindow.value.replace('0', '');

    inputWindow.value += '6';
});

document.getElementById('btn_7').addEventListener('click', function () {
    if(newInput === true) {
        inputWindow.value = ''; 
       
    }
    newInput = false;

    if(inputWindow.value[0] === '0')
    inputWindow.value = inputWindow.value.replace('0', '');

    inputWindow.value += '7';
});

document.getElementById('btn_8').addEventListener('click', function () {
    if(newInput === true) {
        inputWindow.value = ''; 
        
    }
    newInput = false;

    if(inputWindow.value[0] === '0')
    inputWindow.value = inputWindow.value.replace('0', '');

    inputWindow.value += '8';
});

document.getElementById('btn_9').addEventListener('click', function () {
    if(newInput === true) {
        inputWindow.value = ''; 
       
    }
    newInput = false;

    if(inputWindow.value[0] === '0')
    inputWindow.value = inputWindow.value.replace('0', '');

    inputWindow.value += '9';
});

document.getElementById('btn_0').addEventListener('click', function () {
   if(newInput === true) {
        inputWindow.value = ''; 
        
    }
    newInput = false;

    if(inputWindow.value[0] === '0')
    inputWindow.value = inputWindow.value.replace('0', '');

    inputWindow.value += '0';
});

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = Number(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
});

document.getElementById('btn_diff').addEventListener('click', function () {
    lastOperand = Number(inputWindow.value);
    operation = 'diff';
    inputWindow.value = '';
});

document.getElementById('btn_prod').addEventListener('click', function () {
    lastOperand = Number(inputWindow.value);
    operation = 'prod';
    inputWindow.value = '';
});

document.getElementById('btn_divid').addEventListener('click', function () {
    lastOperand = Number(inputWindow.value);
    operation = 'divid';
    inputWindow.value = '';
});

document.getElementById('btn_square-root').addEventListener('click', function () {
    lastOperand = Number(inputWindow.value);
    operation = 'square-root';
    inputWindow.value = '';
});

let result = 0;

document.getElementById('btn_calk').addEventListener('click', function () {
    if(operation === 'sum') {
        result = lastOperand + Number(inputWindow.value);
        /*operation = null;
        lastOperand = 0;
        inputWindow.value = result;*/
    } 
    if(operation === 'diff') {
        result = lastOperand - Number(inputWindow.value);
       /* operation = null;
        lastOperand = 0;
        inputWindow.value = result;*/
    }
    if(operation === 'prod') {
        result = lastOperand * Number(inputWindow.value);
       /* operation = null;
        lastOperand = 0;
        inputWindow.value = result;*/
    }
    if(operation === 'divid') {
        result = lastOperand / Number(inputWindow.value);
       /* operation = null;
        lastOperand = 0;
        inputWindow.value = result;*/
    }
    if(operation === 'square-root') {

       /* lastOperand = Number(inputWindow.value);*/

        result = Math.sqrt(lastOperand);
      /*  operation = null;
        lastOperand = 0;
        inputWindow.value = result;*/
    }
        operation = null;
        inputWindow.value = result;
        lastOperand = 0;
        newInput = true;
});

