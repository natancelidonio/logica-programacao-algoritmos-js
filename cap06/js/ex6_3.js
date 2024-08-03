const frm = document.querySelector("form");     // obtém elementos da página
const resp = documento.querySelector("pre");
const carros = [];     // declara array global

frm.addEventListener("submit", (e) => {     // "escuta" evento submit do form
    e.preventDefault();     // evita envio do form
    const modelo = frm.inModelo.value;     //obtém dados do form
    const preco = Number(frm.inPreco.value);
    carros.push({modelo, preco});     // adiciona dados ao array de objetos
    frm.inModelo.value = "";     // limpa campos do form
    frm.inPreco.value = "";
    inModelo.focus();     // posiciona cursor em inModelo
    // dispara um evento de click em btListar (equivale a um click no botão na página)
    frm.btListar.dispatchEvent(new Event("click"));
})

frm.btListar.addEventListener("click", () => {     // "escuta" clique em btListar
    if (carros.length == 0) {     // se tamanho do array é igual a 0
        alert("Não há carros na lista");
        return
    }
    // método reduce() concatena uma string, obtendo modelo e preço de cada veículo
    const lista = carros.reduce((acumulador, carro) => 
        acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n", "");
    resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`;
})

