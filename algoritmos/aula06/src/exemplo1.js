function mensagem(){
    console.log("oi");
}

function saudacao(nome){
    console.log("oi", nome);
}

function somar(x,y){
    console.log("Soma:", x + y);
}


function parImpar(nro){
    if(nro%2 == 0){
        console.log(nro, "é par");
    }else{
        console.log(nro, "é impar");
    }
}

function pow(x,y){
    return x**y;
}

/*mensagem();
saudacao("Gustavo");
saudacao("Guilherme");
somar(3,2);
somar(10,5);
parImpar(1);
parImpar(2);*/

r = pow(2,3);
console.log(r);