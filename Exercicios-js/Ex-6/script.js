const num = prompt('Digite um número: ');
if(num<100 && num>0){
if (num % 2 === 0) {
    alert('O número ' + num + ' é par.');
} else {
    alert('O número ' + num + ' é ímpar.');
}
}else{
    alert('Número inválido. Por favor, insira um número entre 0 e 100.');
}

