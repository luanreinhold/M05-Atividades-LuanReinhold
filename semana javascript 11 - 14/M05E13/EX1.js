var prompt = require('prompt-sync')();

let email = prompt("Digite seu email: ")

function verificaEmail (email) {
    let nomeUsuario = ""
    let i = email.indexOf("@")
    let dominio = email.slice(i, email.length)
  
    if(dominio == "@gmail.com") {
        nomeUsuario = email.slice(0, i)
        console.log(`Nome de usuário: ${nomeUsuario}`)
        console.log("O e-mail contém o domínio '@gmail.com' ")
    } else {
        let dominioEmail = email.slice(i, email.length) 
        console.log(`O dominio do domínio é: ${dominioEmail}`)
        console.log("O e-mail não contém o domínio '@gmail.com' ")
    }

}

console.log(verificaEmail(email))