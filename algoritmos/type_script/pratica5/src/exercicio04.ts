function aleatorio(quantidade:number,min:number,max:number){
    const itens:number[] = [];
    const intervalo = max - min;
    for(let i = 0; i < quantidade; i++){
        itens[i] = Math.floor(Math.random() * 100);
    }
    return itens;
}

const nros = aleatorio(10,40,70); 
console.log(nros);

export {};