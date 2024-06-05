/*Elaborar um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor.
Se a velocidade for inferior ou igual à permitida, exiba "Sem Multa". Se a velocidade for de até 20% 
maior que a permitida, exiba "Multa Leve". E, se a velocidade for superior a 20% da velocidade permitida,
exiba "Multa Grave".*/

const prompt = require("prompt-sync")();

const veloMax = Number(prompt("Velocidade permitida: "));
const veloAtual = Number(prompt("Velocidade do veículo: "));

if (veloAtual <= veloMax) {
    console.log("Situação: Sem Multa")
} else if (veloAtual <= (veloMax * 1.2)) {
    console.log("Situação: Multa Leve")
} else {
    console.log("Situação: Multa Grave")
};