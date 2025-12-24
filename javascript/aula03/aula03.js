//Tipos de declarações (VAR,CONST)

"use strict"
var nome = "Murilo"
console.log(nome) //Global, consegue ser acessado em qualquer parte

function teste(){
    //De bloco
    let acesso = true
    if(true){
        console.log("Acesso dentro do IF: "+ acesso)
    }
    console.log("Acesso fora do IF: "+ acesso)
}

teste()

//Vai dar erro
// console.log("Fora da função: " + acesso)
// De bloco
const pi = 3.14

//Não se pode atribuir novos valores em constantes 
// pi = 12

console.log(pi)
