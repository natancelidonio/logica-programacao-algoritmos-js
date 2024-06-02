const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduct.value;
    const preco = Number(frm.inPreco.value);
    
    const halfPrice = preco / 2;
    const precoPromo = preco * 2 + halfPrice;

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${precoPromo.toFixed(2)}`;
    resp2.innerText = `O 3° produto sai por apenas R$: ${halfPrice.toFixed(2)}`;

    e.preventDefault();
});
