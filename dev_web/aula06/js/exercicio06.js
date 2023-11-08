function exer6(){
    entrada = document.querySelector("#entrada").value;

    p = document.createElement("p");

    texto = document.createTextNode(entrada);

    p.appendChild(texto);

    saida = document.querySelector("#saida");

    saida.appendChild(p);

    t = document.createAttribute("title");
    t.value = "Nome fornecido";
    p.setAttributeNode(t);
}