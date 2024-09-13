const frm = document.querySelector("form");     // obtém elementos da página
const resp = document.querySelector("pre");
const aviso = document.querySelector("#aviso")

const numeros = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();     // evita o envio do form
    const numeroDigitado = frm.inNumero.value;
    if (numeros.includes(numeroDigitado)) {
        alert('Número já digitado. Tente novamente, por favor.');
        return;
    } else {
        numeros.push(numeroDigitado);
    }
    frm.reset();     // limpa campos do form
    frm.inNumero.focus();     // posiciona no campo de formulário
    let lista = `Números: ${numeros.join(", ")}`;     // para concatenar lista de números
    resp.innerText = lista;     // exibe a lista
})


frm.btVerificarOrdem.addEventListener("click", () => {
    let alerta = '';
    for (let i=0; i<numeros.length -1; i++) {
        if (numeros[i] > numeros[i+1]) {
            alerta = 'Atenção... Números não estão em ordem crescente. :/'
        } else {
            alerta = 'Números estão em ordem! :)'
        }
    }
    aviso.innerText = alerta;
})

