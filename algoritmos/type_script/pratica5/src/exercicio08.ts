function multiplo(elementos:number[], a:number; b:number){
    const itens:number[] = [];
    for(let i = 0; i < elementos.length; i++){
        if(elementos[i]%a == 0 || ){
            //itens[i] = elementos[i];
            itens.push(elementos[i]);
        }
    }
    return itens;
}