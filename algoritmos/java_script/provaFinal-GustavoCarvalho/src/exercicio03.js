const pontuacoes = [
    {avaliacao:"P1", nota:8, peso:0.1},
    {avaliacao:"P2", nota:7, peso:0.2},
    {avaliacao:"P3", nota:3.2},
    {avaliacao:"API", nota:6, peso:0.3}
];
console.log("Conceito:", conceito(pontuacoes));

function pontuacaoFinal(pontuacoes){
    let soma = 0;

    for(let i = 0; i < pontuacoes.length; i++){
        if(pontuacoes[i].peso == undefined ){
            let nota_prova = pontuacoes[i].nota;
            soma = soma + nota_prova;
        } else{
            let nota_prova = pontuacoes[i].nota * pontuacoes[i].peso;
            soma = soma + nota_prova;
        }
    }
    return soma;
}

function conceito(){
    let soma2 = pontuacaoFinal(pontuacoes);

    if(soma2 > 9 && soma2 <= 10){
        return "A";
    }else if(soma2 > 8 && soma2 <= 9){
        return "B";
    }else if(soma2 > 7 && soma2 <=8){
        return "C";
    }else if(soma2 > 6 && soma2 <=7){
        return "D";
    }else if(soma2 >= 5 && soma2 <=6){
        return "E";
    }else if(soma2 < 5){
        return "I";
    }
}