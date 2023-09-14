nome = prompt("Insira seu nome:");
i = 0;

while( i <= nome.length){
    if( i%2 == 0){
        console.log(nome[i]);
    }
    i = i + 1;
}