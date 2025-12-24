//  Parâmetros REST

function soma(...numeros){
    let tamanho = numeros.length
    let soma = 0
    for (let i= 0; i < tamanho; i++){
        soma += numeros[i]
    }
    return soma;
}

console.log(soma(1,2,3,4,5,6,7,8,9,10))
console.log(soma(10,20,30))