pesos = [0.4, 0.2, 0.1, 0.3];
notas = [8.2, 5.0, 10.0, 9.1];
i = 0;
c = 0;

while(i < pesos.length){
    c = pesos[i] * notas[i];
    console.log(pesos[i], "*", notas[i],"=", c );
    i++;
}