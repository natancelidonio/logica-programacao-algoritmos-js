/*Elaborar um programa que leia um número. Informe se ele é par ou ímpar. Faça com o if... else... 
tradicional e, após, tente criar a condição com o operador ternário.*/

const prompt = require("prompt-sync")();

const num = Number(prompt("Digite um número: "));

// if (num % 2 == 0) {
//     console.log(`O número ${num} é par.`);
// } else {
//     console.log(`O número ${num} é ímpar.`);
// };

const parImpar = num % 2 == 0 ? console.log(`${num} é par.`) : console.log(`${num} é ímpar.`);