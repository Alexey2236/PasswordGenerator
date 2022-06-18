"use strict";
const numbers = document.querySelector('#input__numbers'),
    lowercase = document.querySelector('#input__lowercase'),
    uppercase = document.querySelector('#input__uppercase'),
    symbol = document.querySelector('#input__symbol'),
    lengthPassword = document.querySelector('.input__length'),
    button = document.querySelector('.btn__password');

let p1 = '',
    p2 = "",
    p3 = "",
    p4 = "",
    p5 = "";
let randomIndex = 0;

let result = [];

let numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

let lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'X', 'Y', 'Z', 'J', 'U', 'W'];


let symbolArray = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '[', ']', '|', ':', ';', '"', '<', '>', '.', '?', '/'];



function generatorPassword(arr) {
    for (let i = 0; i < lengthPassword.value; i++) {

        randomIndex = Math.floor(Math.random() * arr.length);
        p1 += arr[randomIndex];

        randomIndex = Math.floor(Math.random() * arr.length);
        p2 += arr[randomIndex];

        randomIndex = Math.floor(Math.random() * arr.length);
        p3 += arr[randomIndex];

        randomIndex = Math.floor(Math.random() * arr.length);
        p4 += arr[randomIndex];

        randomIndex = Math.floor(Math.random() * arr.length);
        p5 += arr[randomIndex];
    }


}

function showPassword() {
    let display = '';
    if (result.length == 0) {
        display = `<h2 class="subtitle">Заполните форму</h2>`;
    } else {
        display = ` <hr>
        <div class="option__password">
            <h3 class="subtitle">Выберите выриант: </h3>
            <p class="password">${p1}</p>
            <p class="password">${p2}</p>
            <p class="password">${p3}</p>
            <p class="password">${p4}</p>
            <p class="password">${p5}</p>
        </div>`;
    }
    document.querySelector('.wrapper__result').innerHTML = display;
}

button.addEventListener('click', () => {
    if (numbers.querySelector('input:checked')) {
        result.push(...numberArray);
    }

    if (lowercase.querySelector('input:checked')) {
        result.push(...lowercaseArray);
    }

    if (uppercase.querySelector('input:checked')) {
        result.push(...upperCaseArray);
    }

    if (symbol.querySelector('input:checked')) {
        result.push(...symbolArray);
    }

    if (numbers.querySelector('input:checked') && uppercase.querySelector('input:checked') && lowercase.querySelector('input:checked') && symbol.querySelector('input:checked')) {
        result.push(...numberArray, ...upperCaseArray, ...lowercaseArray, ...symbolArray);
    }


    generatorPassword(result);
    showPassword();
    p1 = '';
    p2 = '';
    p3 = '';
    p4 = '';
    p5 = '';
    result.splice(0, result.length);
});
