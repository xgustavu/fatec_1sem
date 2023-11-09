function multiplo(elementos:number[], valor:number){
    const itens:number[] = [];
    for(let i = 0; i < elementos.length; i++){
        if(elementos[i]%valor == 0){
            //itens[i] = elementos[i];
            itens.push(elementos[i]);
        }
    }
    return itens;
}

const nros = [21,12,18,15,28,19,23,14];
const resultado = multiplo(nros , 4);
console.log(resultado);

export {};