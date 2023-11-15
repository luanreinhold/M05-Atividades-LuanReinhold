var prompt = require('prompt-sync')();
//questão 1

//const n1 = Number(prompt('Digite o primeiro número:'))
//const n2 = Number(prompt('Digite o segundo número:'))
function ex1 (n1, n2) {
    let soma = 0;
    for(let i = 1; i <= n2; i++) {
     soma = n1 * i
    }
    return soma
}


//questao 2
function informaNumeros(n) {
    let numero = 1
    let media = 0;
    let contador = 0;
    while(numero != 0) {
         numero = Number(prompt("Digite um número (0 para sair): "))
         if (numero == 0) 
            break;
         
         media += numero
         contador += 1
    }
    return media / contador
}

// questao 4
//let fibo = parseInt(prompt("digite um número inteiro positivo: "))
function fibonnaci (number) {
    if (number > 0)
    switch (number) {
        case 1:
            console.log(`Sequencia de Fibonacci até ${number} `)
            console.log(`0`)
            break;
        case 2:
            console.log("Sequencia de Fibonacci: ")
            console.log("0 1");
            break;

        default:
            let first = 0;
            let second = 1;
            let result = "0 1";
            for(let i = 3; i <= number; i++) {
                let third = first + second;
                result += ` ${third}`;
                first = second;
                second = third;
            }
            console.log(`Sequencia de Fibonnaci: ${number}`);
            console.log(result)
            break;
    }
    }

    
// questão 5
// let texto = prompt("digite um texto: ")
function inverteTexto(txt) {
    let text = '';

    for(let i = txt.length - 1; i >= 0; i--) {
        text += txt[i]
    }
    return text

}

console.log(inverteTexto(texto))


