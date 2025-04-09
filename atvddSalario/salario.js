let anosTrabalhados;
let salarioAtual;
let generoFuncionario;

alert("Olá Bom dia, estamos reajustando salários de acordo com alguns fatores, Vamos verificar seu salário!  ")
generoFuncionario = prompt("Digite seu gênero, use os termos feminino ou masculino:");
//O método toLowerCase() retorna o valor da string original convertido para minúsculo
if ((generoFuncionario.toLowerCase()) === "feminino") {
    salarioAtual = parseFloat(prompt("Digite o seu sálario atual: "));
    anosTrabalhados = parseInt(prompt("Agora quantos anos está na empresa:  "));
    if (!isNaN(salarioAtual) && !isNaN(anosTrabalhados)) {
        if ((anosTrabalhados) < 5) {
            alert(`Seu novo salario será de : ${salarioAtual * 1.04}`);
        } else if (anosTrabalhados >= 5 && anosTrabalhados <= 10) {
            alert(`Seu novo salario será de : ${salarioAtual * 1.07}`);
        } else if (anosTrabalhados >= 15 && anosTrabalhados <= 20) {
            alert(`Seu novo salario será de : ${salarioAtual * 1.12}`);
        } else if (anosTrabalhados > 20)
            alert(`Seu novo salario será de : ${salarioAtual * 1.23}`);
    } else {
        alert("Você digitou de maneira incorreta, digite seu salário e os anos Trabalhados com números apenas")
    }
}
else if (generoFuncionario.toLowerCase() === "masculino") {
    salarioAtual = parseFloat(prompt("Digite seu sálario atual: "));
    anosTrabalhados = parseInt(prompt("Agora quantos anos está na empresa:  "));
    if (!isNaN(salarioAtual) && !isNaN(anosTrabalhados)) {
        if ((anosTrabalhados) < 5) {
            alert(`Seu novo salario será de : ${salarioAtual * 1.03}`);
        } else if (anosTrabalhados >= 5 && anosTrabalhados <= 10) {
            alert(`Seu novo salario será de : ${salarioAtual * 1.08}`);
        } else if (anosTrabalhados >= 15 && anosTrabalhados <= 20) {
            alert(`Seu novo salario será de : ${salarioAtual * 1.14}`);
        } else if (anosTrabalhados > 20)
            alert(`Seu novo salario será de : ${salarioAtual * 1.25}`);
    } else { alert("Você digitou de maneira incorreta, digite seu salário e os anos Trabalhados com números apenas") }
} else { alert("Você digitou erroneamente, use os termos feminino ou masculino") }
