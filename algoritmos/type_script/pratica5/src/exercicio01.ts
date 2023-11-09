function converter(entrada:string):number[] {
    const textos:string[] = entrada.split(",");
    const nros:number[] = [];
    for(let i = 0; i < textos.length; i++){
        nros[i] = parseInt(textos[i]);
    }
    return nros;
}

const teste:string = "30,60,50,10,20,40";
const resposta = converter(teste);
console.log(resposta);

export {};