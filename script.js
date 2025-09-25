// Variável que armazena a quantidade atual de peças no estoque
let Qnt = 0;

// Função chamada ao clicar no botão "Comprar"
function comprar() {
    // Obtém o valor digitado no campo de compra e converte para inteiro
    let qtdCompra = parseInt(document.getElementById("qtdCompra").value);
    // Verifica se o valor é válido (maior que zero)
    if (qtdCompra > 0) {
        Qnt += qtdCompra; // Adiciona ao estoque
        exibirResultado("Compra realizada! Quantidade atual de peças: " + Qnt);
    } else {
        exibirResultado("Quantidade inválida!"); // Mensagem de erro
    }
}

// Função chamada ao clicar no botão "Vender"
function vender() {
    // Obtém o valor digitado no campo de venda e converte para inteiro
    let qtdVenda = parseInt(document.getElementById("qtdVenda").value);
    // Verifica se o valor é válido e se há peças suficientes no estoque
    if (qtdVenda > 0 && qtdVenda <= Qnt) {
        Qnt -= qtdVenda; // Remove do estoque
        exibirResultado("Venda realizada! Quantidade atual de peças: " + Qnt);
    } else {
        exibirResultado("Quantidade inválida ou insuficiente no estoque!"); // Mensagem de erro
    }
}

// Função chamada ao clicar no botão "Sair"
function sair() {
    Qnt = 0; // Zera o estoque
    exibirResultado("Saída realizada. Quantidade atual de peças: " + Qnt);
}

// Função para exibir mensagens na tela, dentro do elemento com id "resultado"
function exibirResultado(mensagem) {
    document.getElementById("resultado").innerText = mensagem;

}}