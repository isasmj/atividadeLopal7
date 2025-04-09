let tipoCarro
let diasAlugado
let quantosKmPercorridos

tipoCarro = prompt("Qual é o seu tipo de carro, popular ou de luxo? ");
//O método toLowerCase() retorna o valor da string original convertido para minúsculo
if ((tipoCarro.toLowerCase()) === "popular") {
    diasAlugado = parseInt(prompt("Quantos dias de aluguel? "));
    quantosKmPercorridos = parseFloat(prompt("Quantos quilometros foram percorridos? "));
    if ((quantosKmPercorridos) <= 100) {
        alert(`Com um carro  ${tipoCarro}  que foi alugado por ${diasAlugado}  dias e percorreu  ${quantosKmPercorridos}  km, o valor total é ${(90 * diasAlugado) + (0.20 * quantosKmPercorridos)}`);
    } else {
        
        alert(`Com um carro  ${tipoCarro}  que foi alugado por ${diasAlugado}  dias e percorreu  ${quantosKmPercorridos}  km, o valor total é ${(90 * diasAlugado) + (0.10 * quantosKmPercorridos)}`);
    }
}
else if ((tipoCarro.toLowerCase()) === "luxo") {  
    diasAlugado = parseInt(prompt("Quantos dias de aluguel? "));
    quantosKmPercorridos = parseFloat(prompt("Quantos quilometros foram percorridos? "));
    if ((quantosKmPercorridos) <= 200) {
        alert(`Com um carro  ${tipoCarro}  que foi alugado por ${diasAlugado}  dias e percorreu  ${quantosKmPercorridos}  km, o valor total é ${(150 * diasAlugado) + (0.30 * quantosKmPercorridos)}`);
    } else {
        alert(`Com um carro  ${tipoCarro}  que foi alugado por ${diasAlugado}  dias e percorreu  ${quantosKmPercorridos}  km, o valor total é ${(150 * diasAlugado) + (0.25 * quantosKmPercorridos)}`);
    }
} else { alert("Tente novamente com uma das opções sugeridas") };