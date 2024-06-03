/* Elaborar um programa para uma empresa que leia o salário e o tempo que um funcionário trabalha na empresa.
Sabendo que a cada 4 anos (quadriênio) o funcionário recebe um acréscimo de 1% no salário, calcule e informe 
o número de quadriênios a que o funcionário tem direito e o salário final.*/
const prompt = require("prompt-sync")();     // adiciona o pacote ao programa

const empresa = prompt("Empresa: ");     // lê os dados de entrada
const funcionario = prompt("Funcionário: ");
const salarioInicial = Number(prompt("Salário base: "));
const tempoContrato = Number(prompt("Há quantos anos ele trabalha na empresa? "));

// calcula o número de quadriênios a que o funcionário tem direito
const numQuadri = tempoContrato / 4;

// calcula o aumento salarial de acordo com o número de quadriênios do funcionário
const salarioFinal = salarioInicial + (salarioInicial * ((Math.floor(numQuadri) / 100)));

// exibe as informações
console.log(`Relatório da ${empresa}\nO funcionário ${funcionario}, trabalha há ${tempoContrato} anos.`);
console.log(`O salário atual dele é R$${salarioFinal.toFixed(2)}`);