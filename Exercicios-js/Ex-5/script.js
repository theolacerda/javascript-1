const idade = prompt('Qual a sua idade?').toLowerCase();

if (idade >= 18) {
    alert('Você é maior de idade');
} else {
    alert('Você é menor de idade');
}




const numero = prompt('Informe um numero').toLowerCase();
if (numero % 2) {
    alert('Número informado é impar');  
}
else {
    alert('Número informado é par');
}




const capital = prompt('Em que cidade você mora?').toLowerCase();

if (capital== 'sao paulo') {
    alert('Bem-vindo à capital paulista!');
}
else {
    alert('Cidade não reconhecida');
}

const senha = prompt('Digite a senha').toLowerCase();

if (senha == '1234') {
    alert('Acesso permitido');
}
else {
    alert('Acesso negado');
}







alert('Você tem ' + idade + ' anos onde '+ idade + ' é o valor digitado.');