function somatorio(n){
    i = 0;
    soma = 0;
    while(i < n.length){
        soma = soma + n[i];
        i++;
    }
    return soma;
}

numeros = [8,3,4,7,5];
s = somatorio(numeros);
console.log("Somatorio:", s);
