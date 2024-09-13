const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const candidatos = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const candidato = frm.inCandidato.value;
    const nAcertos = Number(frm.inNAcertos.value);
    candidatos.push({nome: candidato, acertos: nAcertos});
    let lista = '';
    for (const pessoa of candidatos) {
        lista += `${pessoa.nome} - ${pessoa.acertos} acertos\n`;
    }
    inCandidato.focus();
    resp.innerText = lista;
})

frm.btAprovados.addEventListener("click", () => {
    const notaDeAprovacao = Number(prompt("Número de acertos para aprovação?"));
    const aprovados = [];
    for (const pessoa of candidatos) {
        if (pessoa.acertos >= notaDeAprovacao) {
            aprovados.push(pessoa);
        }
    }
    aprovados.sort().reverse();
    let listaAprovados = '';
    for (const pessoa of aprovados) {
        listaAprovados += `${pessoa.nome} - ${pessoa.acertos} acertos\n`;
    }
    if (aprovados.length == 0) {
        alert('Nenhum candidato aprovado.')
        frm.btListarTodos.dispatchEvent(new Event("click"));
    } else {
        resp.innerText = listaAprovados;
    };
})

frm.btListarTodos.addEventListener("click", () => {
    let lista = '';
    for (const pessoa of candidatos) {
        lista += `${pessoa.nome} - ${pessoa.acertos} acertos\n`;
    }
    resp.innerText = lista;
})

