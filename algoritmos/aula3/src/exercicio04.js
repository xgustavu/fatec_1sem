n1 = parseInt(prompt("Insira um número inteiro:"));
n2 = parseInt(prompt("Insira outro número inteiro:"));
i = 0;

if(n1 < n2){
    while(n1 <= n2){
        i = n1 + i;
        n1 = n1 + 1;
    }
    console.log("Somatório:", i);
}else{
    while(n2 <= n1){
        i = n1 + i;
        n2 = n2 + 1;
    }
    console.log("Somatório:", i);
}