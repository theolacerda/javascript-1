const diaSemana = prompt('Que dia da semana é hoje?').toLowerCase();

if (diaSemana === 'sabado' || diaSemana === 'domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Bom trabalho/estudo!');
}

const numero = prompt('Informe um numero').toLowerCase();
if (numero<0) {
    alert('Número informado é negativo');
}
else if (numero>=0) {
    alert('Número informado é positivo');
}

const pontos = prompt('Quantos pontos você fez?').toLowerCase();

if (pontos==100) {
    alert('Parabéns, você venceu!');
}
else if (pontos<100) {
    alert('Tente novamente para ganhar.');
}








const nome = prompt('Qual o seu nome?').toLowerCase();
alert('Olá, ' + nome + '! Seja bem-vindo(a)!');