const prompt = require('prompt-sync')();
let controle = 0

while(controle != 1) {
    let nomeUsuario = prompt("digite o nome de usuário: ");

    if(nomeUsuario.length >= 12) {
        nomeUsuario = nomeUsuario.toLowerCase()
        if(nomeUsuario.indexOf("@") === -1) {
            console.log("ERRO! o nome de usuario deve conter @");
        }

        if(nomeUsuario.indexOf("admin") !== -1) {
            console.log("ERRO! Usuarios não devém conter admin no seu nome")
        }

        else if (nomeUsuario.indexOf("user") !== -1) {
            console.log("Nome válido!")
            console.log("O nome de usuário é: " + nomeUsuario)
            controle = 1;
        }
    }
    else {
        console.log("ERRO! O nome do usuário deve conter pelo menos 12 caracteres")
    }
}