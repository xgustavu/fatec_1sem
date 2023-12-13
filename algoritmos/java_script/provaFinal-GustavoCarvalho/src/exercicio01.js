const notas = [
    {avaliacao:"P1", nota:8, peso:0.1},
    {avaliacao:"P2", nota:7, peso:0.2},
    {avaliacao:"P3", nota:9, peso:0.4},
    {avaliacao:"API", nota:6, peso:0.3}
];
console.log("Média:", notaFinal(notas));

function notaFinal(notas){
    let soma = 0;

    for(let i = 0; i < notas.length; i++){
        let nota_prova = notas[i].nota * notas[i].peso;
        soma = soma + nota_prova;
    }
    return soma
}
