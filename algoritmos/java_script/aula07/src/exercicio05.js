nros = prompt("Insira numeros separados por vírgula:");
nros2 = nros.split(",");

for(i = 0, c = 0; i < nros2.length; i++){
    c = c + parseInt(nros2[i]);
}

console.log(c);