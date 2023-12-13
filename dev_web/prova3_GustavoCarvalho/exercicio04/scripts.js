function gerarTabuada() {
    // Limpa o conteúdo anterior
    document.getElementById("tabuadaResult").innerHTML = "";

    // Obtém o número inserido pelo usuário
    var numero = document.getElementById("numeroInput").value;

    // Gera e exibe a tabuada
    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        var linhaTabuada = document.createElement("p");
        linhaTabuada.textContent = numero + " x " + i + " = " + resultado;
        document.getElementById("tabuadaResult").appendChild(linhaTabuada);
    }
}