alert('Bem vindo ao jogo do numero secreto');
let numeroSecreto =5;
let chute;
while (chute != numeroSecreto){
    chute = prompt('Digite um numero entre 0 e 10');
if (chute==numeroSecreto){
    alert('Voce descobriu o numero secreto');
} else {
    if(chute>numeroSecreto){
        alert('O numero secreto e menor que ' + (chute));
    } else {
        alert('O numero secreto e maior que ' + (chute));
    }   
}
}