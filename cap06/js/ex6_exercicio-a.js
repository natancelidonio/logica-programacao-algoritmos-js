const frm = document.querySelector("form");     // obtém elementos da página
const resp = document.querySelector("pre");

const clubes = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();     // evita o envio do form
    const nomeClube = frm.inClube.value;
    clubes.push(nomeClube)    
    frm.reset();     // limpa campos do form
    frm.inClube.focus();     // posiciona no campo de formulário
    frm.btListar.dispatchEvent(new Event("click"));     // dispara click em btListar
})

frm.btListar.addEventListener("click", () => {
    if (clubes.length == 0) {     // se vazio, exibe alerta
        alert("Não há clubes na lista.");
        return;
    }
    let lista = "";     // para concatenar lista de clubes
    for (const clube of clubes) {
        lista += clube + "\n";
    }
    resp.innerText = lista;     // exibe a lista
})

frm.btTabela.addEventListener("click", () => {
    if (clubes.length == 0) {
        alert("Não há clubes na lista");
        return;
    } else if (clubes.length % 2 != 0) {
        alert("Número de clubes informados é ímpar. Adicione mais um para ficar par.");
        return;
    }
    let tabelaJogos = "";
    let primeiro = clubes[0];
    let ultimo = clubes[clubes.length -1];
    const metadeClubes = (clubes.length / 2);
    for (let i = 1; i <= metadeClubes; i++) {
        tabelaJogos += `${primeiro} x ${ultimo}\n`;
        primeiro = clubes[i];
        ultimo = clubes[clubes.length -(i+1)]
    }
    resp.innerText = tabelaJogos;    
})

