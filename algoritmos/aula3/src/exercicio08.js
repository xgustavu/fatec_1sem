senha = "naosei";

s = prompt("Insira a senha:");

while(s != senha){
    console.log("Senha incorreta!")
    s = prompt("Insira a senha:");
}

prompt("Acesso liberado!")