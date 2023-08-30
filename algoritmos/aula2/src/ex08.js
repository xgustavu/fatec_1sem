temperatura = parseFloat(prompt("Insira sua temperatura corporal:"));

if(temperatura >= 41){
    console.log("Hipotermia!");
}
else if(temperatura >= 39.6){
    console.log("Febre alta!");
}
else if(temperatura >= 37.8){
    console.log("Frebe!");
}
else if(temperatura >= 35.1){
    console.log("Normal!");
}
else if(temperatura < 35){
    console.log("Hipotermia!");
}