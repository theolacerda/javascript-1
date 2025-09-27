alert('Bom dia Isadora🎉🎉🎉');

let resp = prompt('Digite Ok se você deseja continuar');


while (resp.toLowerCase() !== "ok") {
    alert('Escreve direito😒');
    resp = prompt('Digite Ok se você deseja continuar');
}

alert('Meus parabéns');


function exibirResultado(mensagem) {
    document.getElementById("resultado").innerText = mensagem;
}


const botaoFugitivo = document.getElementById("fugitivo");
botaoFugitivo.addEventListener("mouseenter", () => {
    const largura = window.innerWidth - botaoFugitivo.offsetWidth;
    const altura = window.innerHeight - botaoFugitivo.offsetHeight;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    botaoFugitivo.style.left = `${x}px`;
    botaoFugitivo.style.top = `${y}px`;
});


const botaoTheo = document.getElementById("eu");
botaoTheo.addEventListener("click", () => {
    let resposta = alert("Que bom que você sabe");
});
