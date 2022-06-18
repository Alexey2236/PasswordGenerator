"use strict";
const numbers = document.querySelector('#input__numbers'),
    loverCase = document.querySelector('#input__loverase'),
    upperCase = document.querySelector('#input__uppercase'),
    symbol = document.querySelector('#input__symbol'),
    lengthPassword = document.querySelector('.input__length'),
    button = document.querySelector('.btn__password');

let p1 = '',
    p2 = "",
    p3 = "",
    p4 = "",
    p5 = "";

let randomIndex = 0;

let numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

let loverCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseArray = [];
loverCaseArray.forEach((item) => {
    upperCaseArray.push(item.toUpperCase());
});

let symbolArray = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '[', ']', '|', ':', ';', '"', '<', '>', '.', '?', '/'];

function generatorPassword() {
    for (let i = 0; i < lengthPassword.value; i++) {

        randomIndex = Math.floor(Math.random() * loverCaseArray.length);
        p1 += loverCaseArray[randomIndex];

        randomIndex = Math.floor(Math.random() * loverCaseArray.length);
        p2 += loverCaseArray[randomIndex];

        randomIndex = Math.floor(Math.random() * loverCaseArray.length);
        p3 += loverCaseArray[randomIndex];

        randomIndex = Math.floor(Math.random() * loverCaseArray.length);
        p4 += loverCaseArray[randomIndex];

        randomIndex = Math.floor(Math.random() * loverCaseArray.length);
        p5 += loverCaseArray[randomIndex];
    }
}

function showPassword() {
    document.querySelector('.wrapper__result').innerHTML = ` <hr>
    <div class="option__password">
        <h3 class="subtitle">Выберите выриант: </h3>
        <p class="password">${p1}</p>
        <p class="password">${p2}</p>
        <p class="password">${p3}</p>
        <p class="password">${p4}</p>
        <p class="password">${p5}</p>
    </div>`;
}
button.addEventListener('click', () => {
    if (numbers.querySelector('input:checked')) {
        loverCaseArray.push(...numberArray);
    }
    if (upperCase.querySelector('input:checked')) {
        loverCaseArray.push(...upperCaseArray);
    }
    if (symbol.querySelector('input:checked')) {
        loverCaseArray.push(...symbolArray);
    }
    generatorPassword();
    showPassword();
    p1 = '';
    p2 = '';
    p3 = '';
    p4 = '';
    p5 = '';
});