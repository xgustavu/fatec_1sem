senha = "naosei";
i = 0;

s = prompt("Insira a senha:");

while(s != senha && i < 2){
    console.log("Senha incorreta!")
    s = prompt("Insira a senha:");
    i = i + 1;
}if(i >= 2){
    console.log("Excedeu o número de tentativas!");
}else{
    console.log("Acesso liberado!")
}