let Qnt = 0;

function comprar() {
    let qtdCompra = parseInt(document.getElementById("qtdCompra").value);
    if (qtdCompra > 0) {
        Qnt += qtdCompra;
        exibirResultado("Compra realizada! Quantidade atual de peças: " + Qnt);
    } else {
        exibirResultado("Quantidade inválida!");
    }
}

function vender() {
    let qtdVenda = parseInt(document.getElementById("qtdVenda").value);
    if (qtdVenda > 0 && qtdVenda <= Qnt) {
        Qnt -= qtdVenda;
        exibirResultado("Venda realizada! Quantidade atual de peças: " + Qnt);
    } else {
        exibirResultado("Quantidade inválida ou insuficiente no estoque!");
    }
}

function sair() {
    Qnt = 0;
    exibirResultado("Saída realizada. Quantidade atual de peças: " + Qnt);
}

function exibirResultado(mensagem) {
    document.getElementById("resultado").innerText = mensagem;
}