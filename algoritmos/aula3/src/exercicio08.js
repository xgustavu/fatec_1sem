senha = "naosei";

s = prompt("Insira a senha:");

while(s != senha){
    console.log("senha incorreta!")
    s = prompt("Insira a senha:");
}
prompt("Aceso liberado!")