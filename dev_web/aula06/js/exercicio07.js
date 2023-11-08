function exer7(){
    nome = document.querySelector("#entrada").value;

    li = document.createElement("li");
    texto = document.createTextNode(nome);
    li.appendChild(texto);

    p = document.querySelector("ol");
    p.appendChild(li);

    t = document.createAttribute("title");
    t.value = nome;
    p.setAttributeNode(t);
}