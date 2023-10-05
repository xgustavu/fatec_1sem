nros = prompt("Insira numeros separados por vírgula:");
nros2 = nros.split(",");

for(i = 0, n = 0; i < nros2.length; i+=2){
    n = parseInt(nros2[i]);
    console.log(n);
}