 let Qnt = 0;

    function comprar() {
        let qtdCompra = parseInt(prompt("Quantas peças deseja comprar?"));
        if (qtdCompra > 0) {
            Qnt += qtdCompra;
            exibirResultado("Compra realizada! Quantidade atual de peças: " + Qnt);
        } else {
            exibirResultado("Quantidade inválida!");
        }
    }

    function vender() {
        let qtdVenda = parseInt(prompt("Quantas peças deseja vender?"));
        if (qtdVenda > 0 && qtdVenda <= Qnt) {
            Qnt -= qtdVenda;
            exibirResultado("Venda realizada! Quantidade atual de peças: " + Qnt);
        } else {
            exibirResultado("Quantidade inválida ou insuficiente no estoque!");
        }
    }

    function sair() {
        exibirResultado("Saida realizada");
    }

    function exibirResultado(mensagem) {
        document.getElementById("resultado").innerText = mensagem;
    }