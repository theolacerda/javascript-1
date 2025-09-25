alert('Você está entrando no exercício número 1');

let resp = prompt('Digite Ok se você deseja continuar');

while (resp !== "Ok") {
    if (resp === "oK" || resp === "ok") {
        alert('Escreve direito');
    } else {
        alert('Resposta errada');
    }
    resp = prompt('Digite Ok se você deseja continuar');
}

if(resp===Ok){
    alert('Meus parabéns');
}

function exibirResultado(mensagem) {
    document.getElementById("resultado").innerText = mensagem;
}