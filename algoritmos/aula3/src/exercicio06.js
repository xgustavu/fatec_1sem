i = 0;
c = Infinity;

while(i < 5){
    n1 = parseInt(prompt("Insira um número:"));
    i = i + 1;
    if(n1 < c){
        c = n1; 
    }
}
console.log("Menor valor:", c);