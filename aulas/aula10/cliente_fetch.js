const url = 'http://localhost:3000/tarefas';

fetch(url).then((Response) => Response.json())
.then((data) => console.log(data))
.catch((error) => console.log ('Deu ruim!', error.message));

fetch(`${url}/ 1a2b`)
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log("Deu ruim!", error.message))

await fetch(url,{
    method: "POST",
    body: {"nome": "Estudar React Native", "concluida": false}
}) .then().catch();