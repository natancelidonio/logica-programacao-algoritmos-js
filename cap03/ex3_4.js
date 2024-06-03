/*Elaborar um prorgama para uma veterinária, que leia o peso de uma ração em kg e o quanto um gato consome
por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto sobra da ração (em gramas).
*/
// adiciona o pacote ao programa
const prompt = require("prompt-sync")();

// lê os dados de entrada
const pesoSaco = Number(prompt("Qual o peso do saco de ração (kg): "));
const consumoDiarioGato = Number(prompt("Consumo diário de ração (g) pelo gato: "));

// calculo de duração e sobra
const duracaoSaco = Math.floor((pesoSaco * 1000) / consumoDiarioGato);
const sobraRacao = (pesoSaco * 1000) % consumoDiarioGato;

// exibe as informações
console.log(`O saco de ração tinha ${pesoSaco}kg.`);
console.log(`Seu gato consome ${consumoDiarioGato}g de ração por dia.`);
console.log(`Então, o saco de ração vai durar ${duracaoSaco} dias e sobrará ${sobraRacao}g de ração.`);
