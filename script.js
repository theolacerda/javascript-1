let Qnt = 0;
let opcao;

do {
    opcao = parseInt(prompt("Digite 1 para compra, 2 para venda e 0 para sair do programa"));

    if (opcao === 1) {
        let qtdCompra = parseInt(prompt("Quantas peças deseja comprar?"));
        if (qtdCompra > 0) {
            Qnt += qtdCompra;
            alert("Compra realizada! Quantidade atual de peças: " + Qnt);
        } else {
            alert("Quantidade inválida!");
        }
    } else if (opcao === 2) {
        let qtdVenda = parseInt(prompt("Quantas peças deseja vender?"));
        if (qtdVenda > 0 && qtdVenda <= Qnt) {
            Qnt -= qtdVenda;
            alert("Venda realizada! Quantidade atual de peças: " + Qnt);
        } else {
            alert("Quantidade inválida ou insuficiente no estoque!");
        }
    } else if (opcao === 0) {
        alert("Saindo do sistema...");
    } else {
        alert("Opção inválida!");
    }

} while (opcao !== 0);
