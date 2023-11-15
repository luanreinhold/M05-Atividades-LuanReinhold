let numeros = [1, 2, 7, 14, 5, 0, 10, 23, 13, 17, 8, 19];
//1

function verificaPrimo(numero) {
    if(numero <=1) return false;
    for(let i = 2; i < numero; i++) {
        if(numero % i === 0) {
            return false;
        }
    }
    return true;
}

//2

let numerosprimos = numeros.filter(verificaPrimo);
console.log("Array de números primos:");
console.log(numerosprimos)

//3
let quadradosDosPrimos = numerosprimos.map(numero => numero **2);
console.log("array dos quadrados dos primos: ")
console.log(quadradosDosPrimos)