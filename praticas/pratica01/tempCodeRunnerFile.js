function escolherOpcao(opcao) {
    switch (opcao) {
        case "1": {
            const nome = readline.question("Entre com o nome da tarefa: ");
            adicionarTarefa(nome);
            break;
          }
          case "2": {
            const tarefas = listarTarefas();
            console.log("Minhas tarefas");
            tarefas.forEach((tarefa) => {
              console.log(`ID: ${tarefa.id} - Nome: ${tarefa.nome} - Concluída: ${tarefa.concluida}`);
            });
            break;
          }
          case "3": {
            const id = readline.question("Entre com o id da tarefa: ");
            removerTarefa(id);
            break;
          }
          case "4": {
            const id = readline.question("Entre com o id da tarefa: ");
            const nome = readline.question("Entre com o nome da tarefa: ");
            const concluida = readline.question("Entre com o status da tarefa: ");
            modificarTarefa(id, { nome, concluida });
            break; 
          }
          case "5":
            process.exit(0);
            break
                
    }    
}