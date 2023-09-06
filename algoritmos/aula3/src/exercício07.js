i = 0;
c = -100000000000000;

while(i < 5){
    n1 = parseInt(prompt("Insira um número:"));
    i = i + 1;
    if(n1 > c){
        c = n1;
    }
}
console.log("Maior número:", c);