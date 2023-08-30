n1 = parseInt(prompt("Insira um número:"));
n2 = parseInt(prompt("Insira outro número:"));

resto = n1%n2;

if(resto==0){
    console.log("O n1 é múltiplo do n2");
}else{
    console.log("O n1 não é múltiplo do n2");
}