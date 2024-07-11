const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();   // evita envio do form
    const num = Number(frm.inNumero.value);   // obtém número informado
    let numDivisores = 0;   // declara e inicializa o contador
    for (let i = 1; i <= num; i++) {   // percorre todos os possíveis divisores de num
        if (num % i == 0) {
            numDivisores++;
        }
    }
    if (numDivisores == 2) {   // se possui apenas 2 divisores, é primo
        resp.innerText = `${num} é primo!`;
    } else {
        resp.innerText = `${num} não é primo.`;
    }
})