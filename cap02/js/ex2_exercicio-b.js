const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.valor15Min.value);
    const tempo = frm.tempoUso.value;

    const blocoTempo = Math.ceil(tempo / 15);
    const valorFinal = blocoTempo * valor;

    resp1.innerText = `Valor a Pagar R$: ${valorFinal.toFixed(2)}`;

    e.preventDefault();
});