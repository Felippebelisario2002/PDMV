//variaveis
let variavel_local =10; //number
const constante = [];  // array
const objeto = {};    // objeto
const msg = "Texto";  // string
let status = false;   // bool

//funcoes
function som(a,b) {
    return a + b;
}
let resultado = soma (1, 2);

const multiplica = (a,b) => a * b; a * b;
resultado = multiplica (1, 2);
/*
function multiplica(a,b){ 
    return a * b;
}
*/
// funcao assicrona
async function tempo(duracao) {
    await new Promise((r)=>{
        setInterval(r,duracao)
    });
    console.log('passou o tempo!');
}


 tempo(3000);

 const pessoa = {nome:"Belisario", email:"belisario@gmail.com", fone:"1254-1555"};
 console.log(pessoa.nome);
 pessoa.nome = "Belisario";
 console.log(pessoa.nome);
 const { nome } = pessoa;
 console.log(nome);
 const pessoa_fisica = {cpf: 111, ...pessoa};

 const lista = [];
 lista.push("uva");
 const achou = lista.find((item) => item === "uva");

 const texto ="Ola";
 texto.concat(" Mundo");
 texto.toUpperCase();
 //modulos
 export {soma, multiplica                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }