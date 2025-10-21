let num = 9;
let chute = null;

function teste() {
    
    chute = parseInt(document.getElementById("qtdCompra").value, 10);

    if (isNaN(chute)) {
        exibirResultado("Informe um número válido.");
        return;
    }

    if (chute < 0 || chute > 10) {
        exibirResultado("Informe um número entre 0 e 10.");
        return;
    }

    if (chute === num) {
        exibirResultado("Parabéns! Você acertou o número secreto.");
    } else {
        exibirResultado("Tente novamente");
    }
}

function sair() {
   
    document.getElementById("qtdCompra").value = "";
    chute = null;
    exibirResultado("Saída realizada.");
}

function exibirResultado(mensagem) {
    document.getElementById("resultado").innerText = mensagem;
}