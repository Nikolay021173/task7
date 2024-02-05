const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

const modalMess = document.querySelector('.modalMess');
const message = document.querySelector('.message');
const okMessage = document.querySelector('.okMessage');

const modalInfo = document.querySelector('.modalInfo');
const info = document.querySelector('.info');
const okInfo = document.querySelector('.okInfo');

const modalInput = document.querySelector('.modalInput');
const inputNumber = document.querySelector('#inputNumber');
const inputNumber1 = document.querySelector('#inputNumber1');
const okInput = document.querySelector('.okInput');
const delValueInput = document.querySelector('.delValueInput');

let minValue, maxValue;


window.addEventListener('load', eventLoad);
okInput.addEventListener('click', eventClick);

delValueInput.addEventListener('click', function () {
    inputNumber.value = '';
    inputNumber1.value = ''; 
});

document.getElementById('btnRetry').addEventListener('click', function () {      
      eventLoad();      
  });

  function eventLoad() {
    modalInput.showModal();
    modalInput.classList.add('isOpen');
    inputNumber.value = '';
    inputNumber1.value = '';
}

  function eventClick(e) { 
    
    minValue = parseInt(inputNumber.value);
    maxValue = parseInt(inputNumber1.value);
    
 
    modalInput.close();
    modalInput.classList.remove('isOpen');
    e.preventDefault();
    e.stopPropagation();

okMessage.addEventListener('click', function (e) { 
    modalMess.close();
    modalMess.classList.remove('isOpen');
    e.preventDefault();
    e.stopPropagation();
    numVerificAndInput(minValue, maxValue);
});

okInfo.addEventListener('click', function (e) { 
    modalInfo.close();
    modalInfo.classList.remove('isOpen');
      e.preventDefault();
      e.stopPropagation();
  });

let answerNumber = numVerificAndCalcAnswerNum(minValue, maxValue, true);

let orderNumber = 1;
let gameRun = true;
orderNumberField.innerText = orderNumber;

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            answerField.innerText = gamePhrase(`Вы загадали неправильное число!\n\u{1F914}`, 
            `Я сдаюсь..\n\u{1F92F}`, `Сегодня увы не мой день.\n\u{1F914}`);

            gameRun = false;
        } else {
           minValue = answerNumber  + 1; 
            answerNumber  = numVerificAndCalcAnswerNum(minValue, maxValue, false);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            let wordOrNumber = answerIsWordOrNumber(answerNumber);  

     answerField.innerText = gamePhrase(`Вы  загадали число ${wordOrNumber}?`,
    `Наверное, это число ${wordOrNumber}?`, `Да это легко! Я думаю, что это число ${wordOrNumber}?`);

            if(answerNumber === minValue) {
            answerField.innerText = gamePhrase(`Вы загадали неправильное число!\n\u{1F914}`, 
            `Я сдаюсь..\n\u{1F92F}`, `Сегодня увы не мой день.\n\u{1F914}`);

                gameRun = false;
            }
        }
    }
});

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            answerField.innerText = gamePhrase(`Вы загадали неправильное число!\n\u{1F914}`, 
            `Я сдаюсь..\n\u{1F92F}`, `Сегодня увы не мой день.`);

            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber = numVerificAndCalcAnswerNum(minValue, maxValue, false);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            let wordOrNumber = answerIsWordOrNumber(answerNumber);
            
    answerField.innerText = gamePhrase(`Вы  загадали число ${wordOrNumber}?`,
     `Наверное, это число ${wordOrNumber}?`, `Да это легко! Я думаю, что это число ${wordOrNumber}?`);

           if(answerNumber === maxValue) {
               answerField.innerText = gamePhrase(`Вы загадали неправильное число!\n\u{1F914}`, 
               `Я сдаюсь..\n\u{1F92F}`, `Сегодня увы не мой день.\n\u{1F914}`);

                gameRun = false;
            }
        }
    }
});

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
            answerField.innerText = gamePhrase(`Я всегда угадываю\n\u{1F60E}`, 
            `Я чувствую, я всегда чувствую, какое число вы загадали\n\u{1F914}`, 
            `Да отгадать Ваше число даже первоклассник сможет\n\u{1F92F}`);

        gameRun = false;
    }
});
}

function openModalMess(textMessage) {
    modalMess.showModal();
    modalMess.classList.add('isOpen');
    message.textContent = textMessage;
   }

   function openModalInfo(textMessage) {
    if(!modalMess.classList.contains('isOpen')){
        modalInfo.showModal();
        modalInfo.classList.add('isOpen');
        info.textContent = textMessage;
    } 
   }

function numVerificAndInput(minValue, maxValue) {
     /*Ниже проводится проверка на корректность ввода данных (минимального и максимального знания чисел для игры)
        вводить нужно числа*/
    if(isNaN(minValue) && isNaN(maxValue)) {
        minValue = 0;
        maxValue = 100;
    } else if(isNaN(minValue)) {
        minValue = 0;
    } else if(isNaN(maxValue)) {
        maxValue = 100;
    }
    /*Ниже проводится проверка не превышают ли введённые данные допустимые минимальное -999 и максимальное 
       999 знания чисел для игры, в случае превышения допустимых значений, для них автоматически устанавливаются
       значения minValue = -999 и maxValue = 999 соответственно*/
    minValue = minValue < -999 ? -999 : minValue;
    maxValue = maxValue > 999 ? 999 : maxValue; 
    openModalInfo(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
}

function numVerificAndCalcAnswerNum(minValue, maxValue, flag) {
    /*Ниже проводится проверка на корректность ввода данных (минимального и максимального знания чисел для игры)
вводить нужно числа*/

if(isNaN(minValue) && isNaN(maxValue)) {
    /*flag - переменная, определяющая надо (значение true) или не надо (значение false) выводить предупреждающие 
    сообщения и для избежания дублирования сообщений в answerField.innerText*/
    if(flag) {
        openModalMess(`Введённое Вами минимальное и максимальное 
        \nзначения числа не являются числами, по умолчанию им будут установленны значения 0 и 100`);
   /* alert(`Введённое Вами минимальное и максимальное 
    \nзначения числа не являются числами, по умолчанию им будут установленны значения 0 и 100`);*/
    }
    minValue = 0;
    maxValue = 100;
} else if(isNaN(minValue)) {
    if(flag) {
        openModalMess(`Введённое Вами минимальное
        значение числа не является числом, \nпо умолчанию ему будет установленно значение 0`);
    /*alert(`Введённое Вами минимальное
    значение числа не является числом, \nпо умолчанию ему будет установленно значение 0`);*/
    }
    minValue = 0;
} else if(isNaN(maxValue)) {
    if(flag) {
        openModalMess(`Введённое Вами максимальное
        значение числа не является числом, \nпо умолчанию ему будет установленно значение 100`);
    /*alert(`Введённое Вами максимальное
    значение числа не является числом, \nпо умолчанию ему будет установленно значение 100`);*/
    }
    maxValue = 100;
} 

 /*Ниже проводится проверка не превышают ли введённые данные допустимые минимальное -999 и максимальное 
       999 знания чисел для игры, в случае превышения допустимых значений, для них автоматически устанавливаются
       значения minValue = -999 и maxValue = 999 соответственно*/
 minValue = minValue < -999 ? -999 : minValue;
 maxValue = maxValue > 999 ? 999 : maxValue;

 /* Ниже проводится проверка на правильность ввода минимального и максимального знания чисел для игры,
    если minValue > maxValue, то их значения автоматически меняются местами*/
  if(minValue > maxValue) {
    let temp = minValue;
    minValue = maxValue;
    maxValue = temp;
 }

 if(flag) {
    openModalInfo(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
 }
 let answerNumber  = Math.floor((minValue + maxValue) / 2);
 let wordOrNumber = answerIsWordOrNumber(answerNumber);
if(flag) {
 answerField.innerText = gamePhrase(`Вы  загадали число ${wordOrNumber}?`,
 `Наверное, это число ${wordOrNumber}?`, `Да это легко! Я думаю, что это число ${wordOrNumber}?`);
}
 return answerNumber;
}

function answerIsWordOrNumber(answerNumber) {
    let inputAnswerNumber;
    if(convertNumToWord(answerNumber).length < 20) {
        inputAnswerNumber = convertNumToWord(answerNumber);
    }
    else {
        inputAnswerNumber = answerNumber;
    }

return inputAnswerNumber;
}

function gamePhrase(phrase1, phrase2, phrase3) {
    const phraseRandom = Math.round( Math.random() * 2);
            let phrase = '';
            switch(phraseRandom) {
                case 0: phrase = phrase1;
                break;
                case 1: phrase = phrase2;
                break;
                case 2: phrase = phrase3;
                break;  
            }
            return phrase;
}


/* Ниже реализована функция позволяющая преобразовывать числа в слова (числительные)*/
function convertNumToWord(n) {

    const objNumWord = {
        0: 'нуль', 1: 'один', 2: 'два', 3: 'три', 4: 'четыре', 5: 'пять', 6: 'шесть', 7: 'семь', 8: 'восемь',
        9: 'девять', 10: 'десять', 11: 'одинадцать', 12: 'двенацать', 13: 'тринадцать', 14: 'четырнадцать',
        15: 'пятнадцать', 16: 'шестнадцать', 17: 'семнадцать', 18: 'восемнадцать', 19: 'девятнадцать',
        20: 'двадцать', 30: 'тридцать', 40: 'сорок', 50: 'пятьдесят', 60: 'шестьдесят', 70: 'семьдесят',
        80: 'восемьдесят', 90: 'девяносто', 100: 'сто', 200: 'двести', 300: 'триста', 400: 'четыреста',
        500: 'пятьсот', 600: 'шестьсот', 700: 'семьсот', 800: 'восемьсот', 900: 'девятьсот'
    };
    
    let numWord;

    if (n < 0) {
        numWord = 'минус '; 
    } else {
        numWord = ''; 
    }
    
    let x;
    let y;
    const num = Math.abs(n);
    
    if((num >= 0 && num <= 20) || num === 30 || num === 40 || num === 50 || num === 60 || num === 70 ||
        num === 80 || num === 90 || num === 100 || num === 200 || num === 300 || num === 400 || num === 500 ||
        num === 600 || num === 700 || num === 800 || num === 900) {
            numWord += objNumWord[`${num}`];
        }
    else if((num > 20 && num < 30) || (num > 30 && num < 40) || (num > 40 && num < 50) || (num > 50 && num < 60) ||
            (num > 60 && num < 70) || (num > 70 && num < 80) || (num > 80 && num < 90) || (num > 90 && num < 100) ||
            (num > 100 && num < 110) || (num > 200 && num < 210) || (num > 300 && num < 310) || 
            (num > 400 && num < 410) || (num > 500 && num < 510) || (num > 600 && num < 610) || 
            (num > 700 && num < 710) || (num > 800 && num < 810) || (num > 900 && num < 910)){
                x = num % 10;
                y = num - x;
                numWord += objNumWord[`${y}`] + ' ' + objNumWord[`${x}`];     
    }    
    else if((num >= 110 && num <= 120) || (num >= 210 && num <= 220) || (num >= 310 && num <= 320) || 
            (num >= 410 && num <= 420) || (num >= 510 && num <= 520) || (num >= 610 && num <= 620) || 
            (num >= 710 && num <= 720) || (num >= 810 && num <= 820) || (num >= 910 && num <= 920) ||
            num === 130 || num === 140 || num === 150 || num === 160 || num === 170 || num === 180 || 
            num === 190 || num === 230 || num === 240 || num === 250 || num === 260 || num === 270 || 
            num === 280 || num === 290 || num === 330 || num === 340 || num === 350 || num === 360 ||
            num === 370 || num === 380 || num === 390 || num === 430 || num === 440 || num === 450 || 
            num === 460 || num === 470 || num === 480 || num === 490 || num === 530 || num === 540 || 
            num === 560 || num === 570 || num === 580 || num === 590 || num === 630 || num === 640 ||
            num === 650 || num === 660 || num === 670 || num === 680 || num === 690 || num === 730 || 
            num === 740 || num === 750 || num === 760 || num === 770 || num === 780 || num === 790 || 
            num === 830 || num === 840 || num === 850 || num === 860 || num === 870 || num === 880 || 
            num === 890 || num === 930 || num === 940 || num === 950 || num === 960 || num === 970 || 
            num === 980 || num === 990) {
                x = num % 100;
                y = num - x;
                numWord += objNumWord[`${y}`] + ' ' + objNumWord[`${x}`];     
    } 
    else {
        x = num % 100;
        y = num - x;
        let z = x % 10;
        let w = x - z;
        numWord += objNumWord[`${y}`] + ' ' + objNumWord[`${w}`] + ' ' + objNumWord[`${z}`]; 
    }
    return numWord; 
}



