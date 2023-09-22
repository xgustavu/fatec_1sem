matriz = [
    [9, 2, 4],
    [6, 5, 7],
    [2, 1, 3]
]

//matriz = [ [9, 2, 4], [6, 5, 7], [2, 1, 3] ]

i = 0;
i2 = 0;

while(i < matriz.length){
    while(i2 < matriz.length){
        console.log(matriz[i][i2]);
        i2++;
        i++;
    }    
    i = i + 1;
}