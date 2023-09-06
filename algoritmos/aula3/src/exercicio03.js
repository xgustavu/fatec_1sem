n1 = parseInt(prompt("Insira um número inteiro:"));
n2 = parseInt(prompt("Insira outro número inteiro:"));

if(n1 < n2){
    while(n1 <= n2){
        console.log(n1);
        n1 = n1 + 1;
    }
}else{
    while(n2 <= n1){
        console.log(n2);
        n2 = n2 + 1;
    }
}