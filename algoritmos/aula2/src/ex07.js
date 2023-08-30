n1 = parseInt(prompt("Insira um número:"));
n2 = parseInt(prompt("Insira um segundo número:"));
n3 = parseInt(prompt("Insira um terceiro número:"));

if(n1>n2 && n1>n3){
    console.log("O maior número é o ",n1);
}else if(n2>n1 && n2>n3){
    console.log("O maior número é o ",n2);
}else{
    console.log("O maior número é o ",n3)
}