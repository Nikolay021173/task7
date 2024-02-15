
window.onload = function()
{
    outputOfGenerPersonData();
};

const output = document.querySelector('.output');

output.addEventListener('click', function() {
    outputOfGenerPersonData();
});

const clear = document.querySelector('.clear');

clear.addEventListener('click', function() {
    deletinOfGenerPersonData();
});
/*Функция для вывода персональных данных*/
function outputOfGenerPersonData() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthDayOutput').innerText = initPerson.day;
    document.getElementById('birthMonthOutput').innerText = initPerson.month;
    document.getElementById('birthYearOutput').innerText = initPerson.year;
}
/*Функция удаления персональных данных*/
function deletinOfGenerPersonData() {
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('patronymicOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthDayOutput').innerText = '';
    document.getElementById('birthMonthOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';     
}
