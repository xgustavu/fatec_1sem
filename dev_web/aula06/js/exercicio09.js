function exer9(){
    nome = document.querySelector("#entrada").value;

    if(nome.length > 0){
        li = document.createElement("li");
        texto = document.createTextNode(nome);
        li.appendChild(texto);

        p = document.querySelector("ol");
        p.appendChild(li);

        t = document.createAttribute("title");
        t.value = nome;
        p.setAttributeNode(t);

        /* document.querySelector("#entrada").value = ""; */

        quantidade = document.querySelectorAll("li").length;
        document.querySelector("#total").innerText = quantidade;
    }
}