let tarefas = [
    "Estudar JavaScript",
    "Fazer exercícios de arrays",
    "Preparar apresentação",
    "Enviar relatório",
    "Terminar modulo 4 - Feito",
    "Aprender html e css - Feito"
  ];


  //1 
  console.log("Listando Tarefas: ")
  for(let i = 0; i < tarefas.length; i++) {
    console.log(`${i + 1} - ${tarefas[i]}`)
  }

  //2
  function verifica(tarefa) {
    return !tarefa.includes("Feito")
  }

  //3
  let tarefasOrdenadas = tarefas.sort();
  console.log("Tarefas ordenadas: ")
  console.log(tarefasOrdenadas)

  //4
  let primeirasTarefas = tarefas.slice(0,2)
  console.log("Primeiras tarefas: ");
  console.log(primeirasTarefas);

  //5
  tarefas.pop()
  console.log("Array atualizado!")
  console.log(tarefas);

  //6
  tarefas.push("Ler livro novo")
  console.log("Array atualizado: ")
  console.log(tarefas)
