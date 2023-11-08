function exer4(){
    p = document.createElement("p");

    texto = document.createTextNode("Ana Maria");

    p.appendChild(texto);

    saida = document.querySelector("#saida");

    saida.appendChild(p);
}