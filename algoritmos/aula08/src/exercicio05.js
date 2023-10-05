disciplina = { 
    nome: "Algoritmos", carga: 80, 
    notas: [ 
        { 
            peso: 0.25, nota: 8.2 }, 
        { 
            peso: 0.35, nota: 7.5 }, 
        { 
            peso: 0.4, nota: 9 
        } 
    ]
}

notaFinal = disciplina.notas[0].peso * disciplina.notas[0].nota + disciplina.notas[1].peso * disciplina.notas[1].nota + disciplina.notas[2].peso * disciplina.notas[2].nota;