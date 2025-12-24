function quadrado(numero){
    return numero * numero;
}

console.log(quadrado(5));

function nome(){ 
    console.log("Meu nome é Murilo!");
}

nome();

function dizerOla(nome = "Desconhecido"){
    console.log("Olá " + nome + "!");
}

// Sem argumento defenido:
dizerOla();
// Com argumento definido:
dizerOla("Murilo");