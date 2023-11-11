function exer10() {
  nome = document.querySelector("#entrada").value;
  if (nome.length > 0) {
    // cria um elemento do tipo <li>
    li = document.createElement("li");
    // cria um texto
    texto = document.createTextNode(nome);
    // coloca o texto no corpo do elemento <li>
    li.appendChild(texto);
    // obtém o elemento <ol>
    no = document.querySelector("ol");
    // adiciona o elemento <li> no corpo da <ol>
    no.appendChild(li);
    // cria o atributo title
    atributo = document.createAttribute("title");
    // coloca valor no atributo
    atributo.value = nome;
    // adiciona o atributo no elemento <li>
    no.setAttributeNode(atributo);
    // seta o valor do campo de entrada
    document.querySelector("#entrada").value = "";
    // obtém a quantidade de elementos <li>
    quantidade = document.querySelectorAll("li").length;
    document.querySelector("#total").innerText = quantidade;

    // cria o atributo onclick
    clique = document.createAttribute("onclick");
    // coloca valor no atributo
    clique.value = "exibir()";
    // adiciona o atributo no elemento <li>
    no.setAttributeNode(clique);
  }
}

function exibir(){
  alert("Exibindo");
}
