nros = prompt("Insira numeros separados por vírgula:");
nros2 = nros.split(",");

for(i = 0, n = 0; i < nros2.length; i++){
    n = parseInt(nros2[i]);
    if(n%2 == 0){
        console.log(nros2[i]);
    }
}