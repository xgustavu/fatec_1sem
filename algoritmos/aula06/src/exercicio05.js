function inverte(nome){
    saida = "";
    i = 0;
    while(i < nome.length){
        saida = nome[i] + saida;
        i++;
    }
    return saida;
}

n = inverte("Gustavo");
console.log("Invertido:", n);