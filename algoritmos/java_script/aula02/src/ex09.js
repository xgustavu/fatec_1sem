peso = parseFloat(prompt("Insira seu peso:"));
altura = parseFloat(prompt("Insira sua altura:"));

imc = peso / (altura*altura);
// IMC peso/(altura*altura)

if(imc <= 18.5){
    console.log("Abaixo do peso!");
}else if(imc <=24.9){
    console.log("Peso ideal (parabéns)");
}else if(imc <= 29.9){
    console.log("Levemente acima do peso");
}else if(imc <= 34.9){
    console.log("Obesidade grau I");
}else if(imc <= 39.9){
    console.log("Obesidade grau II (Severa)");
}else if(imc >= 40){
    console.log("Obesidade grau III (Mórbida)");
}